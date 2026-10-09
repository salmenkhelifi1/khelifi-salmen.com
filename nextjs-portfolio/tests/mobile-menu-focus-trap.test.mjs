import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

// Runtime proof lives in the CDP capture (menuTabCycle reaches the toggle);
// this guards the source shape so the close toggle stays inside the trap.
test("mobile menu Tab trap includes the close toggle and re-queries items", async () => {
  const s = await readFile(new URL("../src/components/SiteHeader.tsx", import.meta.url), "utf8");
  assert.match(s, /const cycle = \[buttonRef\.current, \.\.\.menuItems\(\)\]/);
  // Queried on each keydown, not captured once at open.
  const handler = s.slice(s.indexOf("const handleKeyDown"), s.indexOf('document.addEventListener("keydown"'));
  assert.match(handler, /menuItems\(\)/);
});
