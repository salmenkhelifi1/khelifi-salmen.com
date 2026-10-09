import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

// Static half of the reduced-motion guarantee. The runtime half (computed
// durations are ~0 under `reduce` and non-zero under default media as a
// negative control) is checked by the audit's CDP capture harness.
const css = await readFile(new URL("../src/app/globals.css", import.meta.url), "utf8");

function reduceBlocks() {
  const blocks = [];
  let from = 0;
  for (;;) {
    const at = css.indexOf("@media (prefers-reduced-motion: reduce)", from);
    if (at === -1) return blocks;
    let depth = 0;
    let i = css.indexOf("{", at);
    const start = i;
    for (; i < css.length; i++) {
      if (css[i] === "{") depth++;
      else if (css[i] === "}" && --depth === 0) break;
    }
    blocks.push(css.slice(start, i + 1));
    from = i;
  }
}

function ms(value) {
  const m = value.match(/^([\d.]+)(ms|s)$/);
  assert.ok(m, `unparseable duration ${value}`);
  return Number(m[1]) * (m[2] === "s" ? 1000 : 1);
}

test("reduce kills every transition and animation, including pseudo-elements", () => {
  const universal = reduceBlocks().find((b) => /\*,\s*\*::before,\s*\*::after\s*\{/.test(b));
  assert.ok(universal, "no universal reduced-motion rule");
  for (const prop of ["animation-duration", "transition-duration"]) {
    const value = universal.match(new RegExp(`${prop}:\\s*([^;]+?)\\s*!important;`))?.[1];
    assert.ok(value, `${prop} missing or not !important`);
    assert.ok(ms(value) <= 0.01, `${prop} is ${value}`);
  }
  assert.match(universal, /animation-iteration-count:\s*1\s*!important;/);
  assert.match(universal, /scroll-behavior:\s*auto\s*!important;/);
});

test("reduce shows reveal content without waiting for scroll", () => {
  const rule = reduceBlocks()
    .map((b) => b.match(/^\s*\.reveal\s*\{[^}]*\}/m)?.[0])
    .find(Boolean);
  assert.ok(rule, "bare .reveal not handled under reduce");
  assert.match(rule, /opacity:\s*1;/);
  assert.match(rule, /transform:\s*none;/);
});
