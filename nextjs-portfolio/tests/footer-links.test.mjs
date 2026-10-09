import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const footer = () => readFile(new URL("../src/components/SiteFooter.tsx", import.meta.url), "utf8");

test("footer lists Résumé once (via navLinks) and keeps the footer-resume capture id", async () => {
  const s = await footer();
  const data = await readFile(new URL("../src/data/homepage.ts", import.meta.url), "utf8");
  assert.match(data, /\{ href: "\/resume", label: "Résumé" \}/);
  assert.doesNotMatch(s, /href="\/resume"/);
  assert.match(s, /data-ph-capture=\{link\.href === "\/resume" \? "footer-resume" : undefined\}/);
});

test("Socials holds only social profiles; the fixed-scope offer sits in Quick Links", async () => {
  const s = await footer();
  const quick = s.slice(s.indexOf('aria-label="Footer quick links"'), s.indexOf('aria-label="Footer social links"'));
  const socials = s.slice(s.indexOf('aria-label="Footer social links"'), s.indexOf("</nav>", s.indexOf('aria-label="Footer social links"')));
  assert.match(quick, /Fixed-scope services/);
  assert.doesNotMatch(socials, /Fixed-scope services|fiverr/i);
});
