# SyncLead Uncropped Card Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the cropped SyncLead cover with a tall two-row composition in which the complete quote and messaging browser screenshots remain visible.

**Architecture:** Keep the existing `4:5` card metadata and components unchanged. Use installed Sharp to resize each verified `3840x2160` source proportionally to `800x450`, then place them inside equal `800x500` rows on one `800x1000` cover.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, `next/image`, installed Sharp image tooling, ESLint

---

### Task 1: Replace the cropped cover

**Files:**
- Modify: `public/images/synclead/portfolio-card.png`
- Read: `public/images/synclead/quotes-show.png`
- Read: `public/images/synclead/messaging-unified.png`

- [ ] **Step 1: Run the pre-change composition assertion**

Run:

```bash
node - <<'NODE'
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const sharp = require('sharp');

const hash = value => crypto.createHash('sha256').update(value).digest('hex');

async function expectedCover() {
  const [quote, messaging] = await Promise.all([
    sharp('public/images/synclead/quotes-show.png').resize(800, 450).png().toBuffer(),
    sharp('public/images/synclead/messaging-unified.png').resize(800, 450).png().toBuffer(),
  ]);

  return sharp({
    create: { width: 800, height: 1000, channels: 3, background: '#0b0b0d' },
  })
    .composite([
      { input: quote, left: 0, top: 25 },
      { input: messaging, left: 0, top: 525 },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

(async () => {
  const current = fs.readFileSync('public/images/synclead/portfolio-card.png');
  assert.equal(hash(current), hash(await expectedCover()));
})();
NODE
```

Expected: FAIL because the deployed cover is the cropped quote image.

- [ ] **Step 2: Generate the deterministic two-row cover**

Run:

```bash
synclead_tmp="$(mktemp -d)"
node - "$synclead_tmp/portfolio-card.png" <<'NODE'
const sharp = require('sharp');
const output = process.argv[2];

(async () => {
  const [quote, messaging] = await Promise.all([
    sharp('public/images/synclead/quotes-show.png').resize(800, 450).png().toBuffer(),
    sharp('public/images/synclead/messaging-unified.png').resize(800, 450).png().toBuffer(),
  ]);

  await sharp({
    create: { width: 800, height: 1000, channels: 3, background: '#0b0b0d' },
  })
    .composite([
      { input: quote, left: 0, top: 25 },
      { input: messaging, left: 0, top: 525 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(output);
})();
NODE
mv "$synclead_tmp/portfolio-card.png" public/images/synclead/portfolio-card.png
rmdir "$synclead_tmp"
```

Expected: the cover becomes an `800x1000` PNG containing both complete `16:9` screenshots.

- [ ] **Step 3: Run the focused assertions**

Run the Step 1 hash assertion again, then:

```bash
node - <<'NODE'
const assert = require('node:assert/strict');
const sharp = require('sharp');

(async () => {
  const [cover, quote, messaging] = await Promise.all([
    sharp('public/images/synclead/portfolio-card.png').metadata(),
    sharp('public/images/synclead/quotes-show.png').metadata(),
    sharp('public/images/synclead/messaging-unified.png').metadata(),
  ]);
  assert.deepEqual([cover.width, cover.height], [800, 1000]);
  assert.deepEqual([quote.width, quote.height], [3840, 2160]);
  assert.deepEqual([messaging.width, messaging.height], [3840, 2160]);
})();
NODE
git diff --check
git diff --stat
git status --short
```

Expected: assertions exit `0`; only the cover is an implementation change and unrelated files remain unstaged.

### Task 2: Verify and deliver

**Files:**
- Verify: `public/images/synclead/portfolio-card.png`
- Verify unchanged: `src/data/projects.ts`

- [ ] **Step 1: Run project verification**

```bash
npm run lint
npm run build
```

Expected: lint exits `0` with no new warnings; build exits `0` and generates all routes.

- [ ] **Step 2: Verify responsive rendering**

Inspect `/work` at `1440x1100` and `390x844`. Assert that SyncLead retains the same frame dimensions as FoundPeers, uses `portfolio-card.png`, produces no page errors, and causes no horizontal overflow. Confirm `/projects/synclead` still uses the original dashboard hero.

- [ ] **Step 3: Commit and push only approved files**

```bash
git add public/images/synclead/portfolio-card.png
git diff --cached --check
git diff --cached --stat
git commit -m "fix: show complete SyncLead card screens"
git push origin main
```

Expected: the implementation commit contains one asset and reaches `origin/main`.

- [ ] **Step 4: Verify production**

```bash
curl -fsSL -o /dev/null -w '%{http_code}\n' https://www.khelifi-salmen.com/work
curl -fsSL -o /dev/null -w '%{http_code}\n' https://www.khelifi-salmen.com/projects/synclead
curl -fsSL -o /dev/null -w '%{http_code} %{content_type}\n' https://www.khelifi-salmen.com/images/synclead/portfolio-card.png
```

Expected: both pages return `200`; the cover returns `200 image/png`. Confirm production HTML references the new cover and provider deployment checks pass.
