import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { isInternalHost } from "../src/lib/internal-traffic.ts";

test("only the production hosts count as visitor traffic", () => {
  for (const host of [
    "localhost",
    "127.0.0.1",
    "192.168.1.20",
    "deploy-preview-7--khelifisalmen.netlify.app",
    "khelifi-salmen-com-git-dev.vercel.app",
    "www.khelifi-salmen.com.evil.test",
  ]) {
    assert.equal(isInternalHost(host), true, host);
  }
  assert.equal(isInternalHost("www.khelifi-salmen.com"), false);
  assert.equal(isInternalHost("khelifi-salmen.com"), false);
});

test("forceEnabled opts a non-production host in on purpose", () => {
  assert.equal(isInternalHost("localhost", true), false);
});

const src = (p) => readFile(new URL(`../${p}`, import.meta.url), "utf8");

test("GA renders only off the shared gate and keeps its production fallback ID", async () => {
  const s = await src("src/components/Analytics.tsx");
  assert.match(s, /isInternalHost\(window\.location\.hostname\)/);
  assert.match(s, /if \(!production\) return null;/);
  // Production must survive a deploy without NEXT_PUBLIC_GA_ID.
  assert.match(s, /process\.env\.NEXT_PUBLIC_GA_ID \?\? "G-8N7BGP0VPJ"/);
});
