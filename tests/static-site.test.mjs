import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const indexFile = new URL("../dist/index.html", import.meta.url);
const chineseFile = new URL("../dist/zh/index.html", import.meta.url);

test("builds the English landing page with translated source content", async () => {
  const html = await readFile(indexFile, "utf8");

  assert.match(html, /<html lang="en">/i);
  assert.match(html, /<title>Infinite Sports \| Youth Sports Academy in Houston<\/title>/i);
  assert.match(html, /Greatness\s*<span>starts young\.<\/span>/i);
  assert.match(html, /Founded in 2022 and headquartered in Houston/i);
  assert.match(html, /15235 Spring Cypress Rd, Cypress, TX 77429/i);
  assert.match(html, /China Town/i);
  assert.doesNotMatch(html, /Chinatown/i);
  assert.match(html, /832-666-0867/i);
  assert.match(
    html,
    /https:\/\/docs\.google\.com\/forms\/d\/e\/1FAIpQLSebGqG9GWPaNaCSjmlAdFGRdjDk5HmV4kgpbP0AtevkOlXAWg\/viewform/i,
  );
  assert.match(html, /id="programs"/i);
  assert.match(html, /id="campus"/i);
  assert.match(html, /id="team"/i);
  assert.match(html, /id="gallery"/i);
  assert.match(html, /id="contact"/i);
  assert.match(html, /src="\/volleyball\.jpg"/i);
  assert.match(html, /https:\/\/www\.theinfinitesports\.com\//i);
  assert.match(html, /hreflang="zh-CN" href="https:\/\/www\.theinfinitesports\.com\/zh\/"/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|wrangler/i);
});

test("builds a complete Chinese version with working language metadata", async () => {
  const html = await readFile(chineseFile, "utf8");

  assert.match(html, /<html lang="zh-CN">/i);
  assert.match(html, /<title>浩瀚体育｜休斯顿青少年体育教育<\/title>/i);
  assert.match(html, /浩瀚体育（Infinite Sports）成立于 2022 年/i);
  assert.match(html, /青少年篮球培训/i);
  assert.match(html, /中国城校区/i);
  assert.match(
    html,
    /https:\/\/docs\.google\.com\/forms\/d\/e\/1FAIpQLSebGqG9GWPaNaCSjmlAdFGRdjDk5HmV4kgpbP0AtevkOlXAWg\/viewform/i,
  );
  assert.match(html, /href="\/" lang="en"/i);
  assert.match(html, /rel="canonical" href="https:\/\/www\.theinfinitesports\.com\/zh\/"/i);
  assert.match(html, /src="\/basketball\.jpg"/i);
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
