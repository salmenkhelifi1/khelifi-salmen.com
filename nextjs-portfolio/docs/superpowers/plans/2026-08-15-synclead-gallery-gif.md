# SyncLead Gallery GIF Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the outdated SyncLead full-project MP4 with a seven-screen animated GIF built from the current 1280×720 portfolio screenshots.

**Architecture:** Generate one public GIF directly from the existing ordered PNG set with Pillow. Render it through the existing Next.js `Image` component while retaining the seven detailed MP4 walkthroughs below.

**Tech Stack:** Python 3, Pillow, Next.js 16, React 19, Node test runner

---

### Task 1: Add the media regression

**Files:**
- Modify: `tests/synclead-media.test.mjs`

- [ ] Assert that `SyncLeadCaseStudy.tsx` references `/images/synclead/full-project-walkthrough.gif`.
- [ ] Assert that it no longer references `/images/synclead/full-project-demo-hd.mp4`.
- [ ] Run `node --test tests/synclead-media.test.mjs` and confirm the new assertion fails on the old MP4 reference.

### Task 2: Generate and integrate the GIF

**Files:**
- Create: `public/images/synclead/full-project-walkthrough.gif`
- Modify: `src/components/SyncLeadCaseStudy.tsx`
- Delete: `public/images/synclead/full-project-demo-hd.mp4`

- [ ] Load the seven PNG files in gallery order with Pillow, preserve 1280×720 dimensions, quantize each frame to an adaptive GIF palette, save each frame for 2000 ms, and omit infinite looping.
- [ ] Replace the full walkthrough `<video>` with a responsive `Image` using `unoptimized`, accurate alt text, and the existing rounded card styling.
- [ ] Change the caption from nine views to seven current product views.
- [ ] Remove the obsolete MP4 and run the media regression until it passes.
- [ ] Inspect the GIF with Pillow and assert format `GIF`, size `(1280, 720)`, and `n_frames === 7`.

### Task 3: Verify and release

**Files:**
- Verify all changed files from Tasks 1 and 2.

- [ ] Run `node --test tests/*.test.mjs`.
- [ ] Run `npm run lint` and accept only the known unrelated `MdxImage.tsx` warning.
- [ ] Run `npm run build` and confirm `/projects/synclead` is generated.
- [ ] Review the staged diff for unrelated files or sensitive paths, commit, fast-forward `main`, and push.
- [ ] Wait for the Vercel production alias, then verify the live page references the GIF, not the MP4, and the GIF returns HTTP 200 with `image/gif`.
