/**
 * Build the AI-readable Markdown twin for every HTML page.
 *
 * The HTML remains the canonical presentation; this script writes a
 * /path/index.md alongside it so agents and research tools can read the page
 * without parsing the full layout. Run after `astro build` and `dedupe-css`.
 */
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { NodeHtmlMarkdown } from "node-html-markdown";

const DIST = "dist";
const nhm = new NodeHtmlMarkdown({
  bulletMarker: "-",
  codeBlockStyle: "fenced",
  keepDataImages: false,
  maxConsecutiveNewlines: 2,
});

async function walk(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walk(path, out);
    else if (entry.name === "index.html") out.push(path);
  }
  return out;
}

function decode(value = "") {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ");
}

async function main() {
  const files = await walk(DIST);
  let written = 0;
  for (const file of files) {
    const html = await readFile(file, "utf8");
    const title = decode((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || "");
    const description = decode((html.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || "");
    const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/i) || [])[1] || "";
    const noindex = /<meta name="robots" content="[^"]*noindex/i.test(html);
    const main = (html.match(/<main[\s\S]*?<\/main>/i) || [html.match(/<article[\s\S]*?<\/article>/i) || []])[0] || "";
    if (!main) continue;
    const clean = main
      .replace(/<script\b[\s\S]*?<\/script>/gi, "")
      .replace(/<style\b[\s\S]*?<\/style>/gi, "")
      .replace(/<nav\b[\s\S]*?<\/nav>/gi, "")
      .replace(/<header\b[\s\S]*?<\/header>/gi, "")
      .replace(/<footer\b[\s\S]*?<\/footer>/gi, "")
      .replace(/<h1\b[\s\S]*?<\/h1>/i, "")
      .replace(/<figure\b[\s\S]*?<\/figure>/gi, "");
    const body = nhm.translate(clean).replace(/\n{3,}/g, "\n\n").trim();
    const rel = relative(DIST, dirname(file));
    const out = join(DIST, rel, "index.md");
    const front = `# ${title}\n\n> ${description}\n\nCanonical: ${canonical}${noindex ? "\nRobots: noindex,follow" : ""}\n\n`;
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, front + body + "\n", "utf8");
    written += 1;
  }
  console.log(`generate-markdown: wrote ${written} markdown twins`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
