/**
 * Remove duplicate CSS chunks from the build.
 *
 * Astro emits one CSS chunk per entry; with a single import of global.css this
 * yields two chunks whose rule sets overlap almost entirely — one is a strict
 * subset of the other (observed: 446 of 470 rules, 41KB duplicated). Every page
 * links both, so every page downloads the same Tailwind reset twice.
 *
 * This script compares rule sets, and for any chunk that is a subset of another:
 *   1. rewrites every HTML reference to point at the superset chunk,
 *   2. deletes the redundant file.
 *
 * The subset test is exact (set of rules), so nothing unique can be dropped: a
 * chunk is only removed when every one of its rules exists in the surviving chunk.
 *
 * Run after `astro build`.
 */
import { readdir, readFile, writeFile, unlink } from "node:fs/promises";
import { join } from "node:path";

const DIST = "dist";
const ASTRO = join(DIST, "_astro");

const rules = (css) =>
  new Set(
    css
      .split("}")
      .map((r) => r.trim())
      .filter((r) => r.length > 0),
  );

async function main() {
  let cssFiles;
  try {
    cssFiles = (await readdir(ASTRO)).filter((f) => f.endsWith(".css"));
  } catch {
    console.log("dedupe-css: no _astro directory, skipping");
    return;
  }
  if (cssFiles.length < 2) {
    console.log(`dedupe-css: ${cssFiles.length} chunk(s), nothing to dedupe`);
    return;
  }

  const chunks = [];
  for (const f of cssFiles) {
    const css = await readFile(join(ASTRO, f), "utf8");
    chunks.push({ file: f, css, rules: rules(css), bytes: Buffer.byteLength(css) });
  }

  const supersetOf = (a, b) => [...a.rules].every((r) => b.rules.has(r));
  const drop = new Map(); // redundant file -> replacement file

  for (const a of chunks) {
    for (const b of chunks) {
      if (a.file === b.file || b.rules.size <= a.rules.size) continue;
      if (supersetOf(a, b) && a.rules.size < b.rules.size) {
        drop.set(a.file, b.file);
      }
    }
  }

  if (drop.size === 0) {
    console.log("dedupe-css: no chunk is a subset of another");
    return;
  }

  // Rewrite HTML references
  let rewritten = 0;
  const htmlFiles = [];
  async function walk(dir) {
    for (const e of await readdir(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) await walk(p);
      else if (e.name.endsWith(".html")) htmlFiles.push(p);
    }
  }
  await walk(DIST);

  for (const htmlPath of htmlFiles) {
    let html = await readFile(htmlPath, "utf8");
    let touched = false;
    for (const [from, to] of drop) {
      if (html.includes(from)) {
        html = html.split(from).join(to);
        touched = true;
      }
    }
    // A page may end up with two links to the same chunk after rewriting; collapse them.
    const seen = new Set();
    html = html.replace(/<link[^>]*rel="stylesheet"[^>]*>/g, (tag) => {
      const href = (tag.match(/href="([^"]+)"/) || [])[1];
      if (!href) return tag;
      if (seen.has(href)) return "";
      seen.add(href);
      return tag;
    });

    if (touched) {
      await writeFile(htmlPath, html, "utf8");
      rewritten += 1;
    }
  }

  for (const [from, to] of drop) {
    await unlink(join(ASTRO, from));
    const size = chunks.find((c) => c.file === from)?.bytes ?? 0;
    console.log(`  dropped ${from} (${(size / 1024).toFixed(1)}KB) — subset of ${to}`);
  }
  console.log(`dedupe-css: removed ${drop.size} chunk(s), rewrote ${rewritten} pages`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
