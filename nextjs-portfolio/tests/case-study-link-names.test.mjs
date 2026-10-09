import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

// Four homepage cards share the visible text "View Case Study"; each link must
// carry its project title as a visually hidden suffix so screen-reader and
// voice users get distinct names (visible text stays first, WCAG 2.5.3).
for (const [file, title] of [
  ["FeaturedProject.tsx", "item.title"],
  ["CompactProject.tsx", "project.title"],
]) {
  test(`${file} gives each case-study link a distinct accessible name`, async () => {
    const s = await readFile(new URL(`../src/components/${file}`, import.meta.url), "utf8");
    assert.match(s, new RegExp(`<span className="sr-only">: \\{${title.replace(".", "\\.")}\\}</span>`));
  });
}
