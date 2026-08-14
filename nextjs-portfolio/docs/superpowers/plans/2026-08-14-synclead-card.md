# SyncLead Portfolio Card Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give SyncLead the same tall `4:5` portfolio-grid presence as FoundPeers with a readable, tightly focused quote-workspace cover.

**Architecture:** Reuse `CompactProject`'s existing portrait-preview path by changing only SyncLead's `galleryAspect`. Replace the existing listing-only cover with a deterministic crop derived from the already verified SyncLead quote screenshot; leave all case-study screenshots, videos, components, and grid styles unchanged.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, `next/image`, installed Sharp image tooling, ESLint

---

### Task 1: Create the focused portrait card

**Files:**
- Modify: `public/images/synclead/portfolio-card.png`
- Modify: `src/data/projects.ts:93-94`

- [ ] **Step 1: Run the pre-change dimension check**

Run:

```bash
node - <<'NODE'
const sharp = require('sharp');
(async () => {
  const metadata = await sharp('public/images/synclead/portfolio-card.png').metadata();
  if (metadata.width !== 800 || metadata.height !== 1000) {
    throw new Error(`Expected 800x1000 portrait cover, received ${metadata.width}x${metadata.height}`);
  }
})();
NODE
```

Expected: FAIL with `Expected 800x1000 portrait cover, received 1600x1000`.

- [ ] **Step 2: Generate the deterministic `4:5` crop**

Run:

```bash
synclead_tmp="$(mktemp -d)"
node - "$synclead_tmp/portfolio-card.png" <<'NODE'
const sharp = require('sharp');
const output = process.argv[2];
(async () => {
  await sharp('public/images/synclead/portfolio-card.png')
    .extract({ left: 300, top: 16, width: 588, height: 735 })
    .resize(800, 1000)
    .png({ compressionLevel: 9 })
    .toFile(output);
})();
NODE
mv "$synclead_tmp/portfolio-card.png" public/images/synclead/portfolio-card.png
rmdir "$synclead_tmp"
```

Expected: `portfolio-card.png` becomes an `800x1000` PNG focused on the quote workspace.

- [ ] **Step 3: Reuse the existing portrait-preview path**

Change the SyncLead project metadata in `src/data/projects.ts`:

```ts
galleryAspect: "phone",
```

Do not change `CompactProject`, `WorkGrid`, or any other project metadata.

- [ ] **Step 4: Run the focused assertions**

Run:

```bash
node - <<'NODE'
const assert = require('node:assert/strict');
const sharp = require('sharp');
const fs = require('node:fs');
(async () => {
  const metadata = await sharp('public/images/synclead/portfolio-card.png').metadata();
  assert.deepEqual([metadata.width, metadata.height], [800, 1000]);
  const source = fs.readFileSync('src/data/projects.ts', 'utf8');
  const synclead = source.slice(source.indexOf('slug: "synclead"'), source.indexOf('slug: "foundpeers"'));
  assert.match(synclead, /heroImage: "\/images\/synclead\/portfolio-card\.png"/);
  assert.match(synclead, /galleryAspect: "phone"/);
})();
NODE
```

Expected: exit code `0`.

- [ ] **Step 5: Review the focused diff**

Run:

```bash
git diff --check
git diff --stat
git status --short
```

Expected: only the approved SyncLead asset and metadata are implementation changes; pre-existing package and SEO work remains unstaged.

### Task 2: Verify, deliver, and test production

**Files:**
- Verify: `src/data/projects.ts`
- Verify: `public/images/synclead/portfolio-card.png`

- [ ] **Step 1: Run project verification**

Run:

```bash
npm run lint
npm run build
```

Expected: lint exits `0` with no new warnings; build exits `0` and generates `/work` and `/projects/synclead`.

- [ ] **Step 2: Verify local production rendering**

Run the production build and inspect `/work` at `1440x1100` and `390x844` in Playwright Chromium. For the SyncLead cover, assert:

```js
({
  currentSrcIncludes: 'synclead%2Fportfolio-card.png',
  aspectRatio: '4 / 5',
  objectFit: 'cover',
  objectPosition: '50% 0%',
  pageErrors: [],
  horizontalOverflow: false,
})
```

Expected: both viewports satisfy every assertion, and `/projects/synclead` retains the original case-study media.

- [ ] **Step 3: Commit only approved implementation files**

Run:

```bash
git add src/data/projects.ts public/images/synclead/portfolio-card.png
git diff --cached --check
git diff --cached --stat
git commit -m "fix: enlarge SyncLead portfolio card"
```

Expected: the commit contains two files and no unrelated package, SEO, or media changes.

- [ ] **Step 4: Push the approved commits**

Run:

```bash
git push origin main
```

Expected: the design, plan, and implementation commits reach `origin/main`.

- [ ] **Step 5: Verify the live deployment**

After the deployment checks succeed, verify:

```bash
curl -fsSL -o /dev/null -w '%{http_code}\n' https://www.khelifi-salmen.com/work
curl -fsSL -o /dev/null -w '%{http_code}\n' https://www.khelifi-salmen.com/projects/synclead
curl -fsSL -o /dev/null -w '%{http_code} %{content_type}\n' https://www.khelifi-salmen.com/images/synclead/portfolio-card.png
```

Expected: both pages return `200`; the cover returns `200 image/png`.

Repeat the desktop/mobile browser assertions against the public domain. Report the commit, changed files, lint/build results, live checks, preserved unrelated work, and any remaining limitation.
