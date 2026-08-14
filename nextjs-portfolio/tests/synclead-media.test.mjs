import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the SyncLead case study only renders the current portfolio media", async () => {
  const [source, projects] = await Promise.all([
    readFile(
      new URL("../src/components/SyncLeadCaseStudy.tsx", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../src/data/projects.ts", import.meta.url), "utf8"),
  ]);

  assert.match(source, /\/images\/synclead\/portfolio-media\/png\/dashboard-overview\.png/);
  assert.doesNotMatch(source, /\/images\/synclead\/focused-proof\//);
  assert.match(projects, /heroImage: "\/images\/synclead\/portfolio-media\/png\/dashboard-overview\.png"/);
  assert.match(
    projects,
    /src: "\/images\/synclead\/portfolio-media\/png\/dashboard-overview\.png",\s+alt: "SyncLead sales dashboard/,
  );
  assert.doesNotMatch(projects, /\/images\/synclead\/portfolio-card-landscape\.png/);
});
