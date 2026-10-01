import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const indexFile = new URL("../dist/index.html", import.meta.url);

test("builds a complete static landing page", async () => {
  const html = await readFile(indexFile, "utf8");

  assert.match(html, /<title>Infinite Sports \| Youth Sports Academy<\/title>/i);
  assert.match(html, /Build the\s*<span>athlete within\.<\/span>/i);
  assert.match(html, /id="programs"/i);
  assert.match(html, /id="campus"/i);
  assert.match(html, /id="team"/i);
  assert.match(html, /id="gallery"/i);
  assert.match(html, /id="contact"/i);
  assert.match(html, /src="\/volleyball\.jpg"/i);
  assert.match(html, /https:\/\/www\.theinfnitesports\.com\//i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|wrangler/i);
});

test("copies all public launch assets", async () => {
  await Promise.all(
    ["hero-team.jpg", "volleyball.jpg", "basketball.jpg", "og.png", "CNAME"].map(
      (name) => access(new URL(`../dist/${name}`, import.meta.url)),
    ),
  );

  await assert.rejects(access(new URL("../dist/server/index.js", import.meta.url)));
  await assert.rejects(
    access(new URL("../dist/.openai/hosting.json", import.meta.url)),
  );
});
