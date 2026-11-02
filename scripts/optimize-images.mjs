/**
 * Generate AVIF + WebP variants for every PNG in public/images.
 *
 * Output: public/images/opt/<name>-<width>.<ext> plus public/images/manifest.json
 * describing intrinsic dimensions and available widths, which OptImage.astro reads
 * at build time to emit <picture> markup with correct width/height (CLS) and srcset.
 *
 * Originals are kept untouched and remain the <img> fallback.
 *
 * Run: node scripts/optimize-images.mjs
 */
import { readdir, mkdir, writeFile, stat } from "node:fs/promises";
import { join, basename, extname } from "node:path";
import sharp from "sharp";

const SRC = "public/images";
const OUT = join(SRC, "opt");
const WIDTHS = [400, 800, 1200];
const WEBP_Q = 82;
const AVIF_Q = 55;

const kb = (n) => `${(n / 1024).toFixed(0)}KB`;

async function main() {
  await mkdir(OUT, { recursive: true });
  const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g)$/i.test(f));
  const manifest = {};
  let before = 0;
  let after = 0;

  for (const file of files) {
    const src = join(SRC, file);
    const name = basename(file, extname(file));
    const meta = await sharp(src).metadata();
    const original = (await stat(src)).size;
    before += original;

    const widths = WIDTHS.filter((w) => w <= meta.width);
    if (widths.length === 0) widths.push(meta.width);

    const written = [];
    for (const w of widths) {
      for (const [ext, opts] of [
        ["webp", { quality: WEBP_Q, effort: 5 }],
        ["avif", { quality: AVIF_Q, effort: 4 }],
      ]) {
        const out = join(OUT, `${name}-${w}.${ext}`);
        await sharp(src).resize({ width: w, withoutEnlargement: true })[ext](opts).toFile(out);
        written.push({ w, ext, bytes: (await stat(out)).size });
      }
    }

    const best = written
      .filter((v) => v.ext === "avif")
      .sort((a, b) => b.w - a.w)[0];
    after += best ? best.bytes : original;

    manifest[file] = {
      width: meta.width,
      height: meta.height,
      bytes: original,
      widths,
    };
    console.log(
      `  ${file.padEnd(58)} ${kb(original).padStart(7)} → avif ${best ? kb(best.bytes) : "-"}`,
    );
  }

  await writeFile(join(SRC, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
  await writeFile("src/data/image-manifest.json", JSON.stringify(manifest, null, 2) + "\n");
  console.log(
    `\noptimize-images: ${files.length} images | ${(before / 1048576).toFixed(1)}MB → ${(after / 1048576).toFixed(1)}MB (largest AVIF per image)`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
