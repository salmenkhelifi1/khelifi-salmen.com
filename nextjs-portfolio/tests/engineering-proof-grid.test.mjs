import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

// Without items-start the default `stretch` grows the closed sibling card to the
// open card's height, leaving an empty panel that reads as broken.
test("opening one engineering-proof disclosure does not stretch its sibling", async () => {
  const s = await readFile(new URL("../src/components/EngineeringProof.tsx", import.meta.url), "utf8");
  assert.match(s, /className="grid items-start gap-4 md:grid-cols-2"/);
});
