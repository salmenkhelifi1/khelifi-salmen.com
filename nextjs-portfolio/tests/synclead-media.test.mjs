import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the SyncLead case study only renders the current verified screenshots", async () => {
  const [source, projects] = await Promise.all([
    readFile(
      new URL("../src/components/SyncLeadCaseStudy.tsx", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../src/data/projects.ts", import.meta.url), "utf8"),
  ]);

  assert.match(source, /\/images\/synclead\/case-study\/synclead-01-landing\.png/);
  assert.match(source, /\/images\/synclead\/case-study\/synclead-03-dashboard\.png/);
  assert.doesNotMatch(source, /\/images\/synclead\/portfolio-media\//);
  assert.doesNotMatch(source, /\/images\/synclead\/full-project-walkthrough\.gif/);
  assert.doesNotMatch(source, /\/images\/synclead\/focused-proof\//);
  assert.match(projects, /heroImage: "\/images\/synclead\/case-study\/synclead-01-landing\.png"/);
  assert.match(
    projects,
    /src: "\/images\/synclead\/case-study\/synclead-03-dashboard\.png",\s+alt: "SyncLead dashboard/,
  );
  assert.doesNotMatch(projects, /\/images\/synclead\/portfolio-card-landscape\.png/);
});
