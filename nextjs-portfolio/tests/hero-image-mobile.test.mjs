import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (p) => readFile(new URL(`../${p}`, import.meta.url), "utf8");

// Runtime proof (0 requests at 320/390, 1 at 1440) is in the CDP capture; this
// guards that the source/preload media query stays aligned with the CSS hide rule.
test("hero portrait is only sourced and preloaded where .hero-media is visible", async () => {
  const [tsx, css] = await Promise.all([read("src/app/home-content.tsx"), read("src/app/globals.css")]);
  const hideAt = Number(css.match(/@media \(max-width: (\d+)px\) \{\s*\.hero-media \{\s*display: none;/)?.[1]);
  assert.ok(hideAt, "CSS hide rule for .hero-media not found");
  assert.match(tsx, new RegExp(`HERO_MEDIA_QUERY = "\\(min-width: ${hideAt + 1}px\\)"`));
  assert.match(tsx, /<source media=\{HERO_MEDIA_QUERY\}/);
  assert.match(tsx, /media: HERO_MEDIA_QUERY/);
  // A plain priority <Image> would preload on every viewport again.
  assert.doesNotMatch(tsx, /salmen-workspace-hero[\s\S]{0,400}priority/);
});
