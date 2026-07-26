import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the work archive activates reveal cards after each filter change", async () => {
  const source = await readFile(
    new URL("../src/components/WorkGrid.tsx", import.meta.url),
    "utf8",
  );

  assert.match(source, /useEffect/);
  assert.match(source, /new IntersectionObserver/);
  assert.match(source, /\.reveal:not\(\.active\)/);
  assert.match(source, /\[activeCategory\]/);
});
