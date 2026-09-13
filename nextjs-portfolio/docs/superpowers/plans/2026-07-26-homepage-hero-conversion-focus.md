# Homepage Hero Conversion Focus Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the homepage hero conversion-focused, fully visible, and balanced across desktop, short-laptop, tablet, and mobile viewports.

**Architecture:** Keep the existing hero and diagram components. Adjust only their existing layout classes and CSS tokens, and gate the existing Cal floating-button initializer by pathname so homepage CTAs do not compete.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4 utilities, existing CSS custom properties, existing Cal.com embed, Playwright CLI

---

## File Map

- Modify `src/app/home-content.tsx`: conversion-focused grid, action order, and hero spacing.
- Modify `src/app/globals.css`: fluid hero type/spacing, emphasis contrast, and bounded diagram presentation.
- Modify `src/components/CalFloatingButton.tsx`: skip floating-button initialization on `/`.
- No new runtime files, abstractions, or dependencies.

### Task 1: Capture the Existing Failure

**Files:**
- Inspect: `src/app/home-content.tsx`
- Inspect: `src/app/globals.css`

- [ ] **Step 1: Start the development server**

Run:

```bash
npm run dev
```

Expected: Next.js reports a local URL and accepts requests.

- [ ] **Step 2: Capture baseline screenshots**

Use Playwright CLI to open the local homepage and capture:

```text
1440×900
1366×768
1280×720
1024×768
768×1024
390×844
```

Expected failure: at short desktop sizes, the heading consumes most of the
viewport and supporting content/actions are below the fold; the floating Cal
button competes with or overlaps the diagram.

- [ ] **Step 3: Record measurable baseline checks**

In the browser, inspect `.hero-section`, `.hero-title`, `.hero-actions`, and
the Cal floating button. Record bounding rectangles and
`document.documentElement.scrollWidth > document.documentElement.clientWidth`.

Expected: no horizontal overflow, but incomplete above-the-fold content and a
homepage floating booking control.

### Task 2: Implement the Conversion-Focused Hero

**Files:**
- Modify: `src/app/home-content.tsx:147-195`
- Modify: `src/app/globals.css:474-505`
- Modify: `src/app/globals.css:673-677`

- [ ] **Step 1: Change the hero layout and action order**

In `src/app/home-content.tsx`:

- Replace fixed `min-h-screen`, large padding, and `overflow-hidden` with the
  `hero-section` CSS contract and compact responsive horizontal padding.
- Change the desktop grid to eight content columns and four diagram columns.
- Add a dedicated `hero-copy` class.
- Reduce utility margins; let `.hero-section` own responsive vertical rhythm.
- Render **Start a Project** with `PrimaryButton`.
- Render **View Selected Work** with `SecondaryButton`.
- Add `hero-visual` to the diagram wrapper.

The resulting structure must remain:

```tsx
<section className="hero-section mx-auto flex w-full max-w-7xl items-center px-6">
  <div className="hero-content grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12">
    <div className="hero-copy flex flex-col items-start text-left lg:col-span-8">
      {/* badge, h1, subtitle, capability list */}
      <div className="hero-actions reveal flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
        <PrimaryButton href={bookingUrl}>Start a Project</PrimaryButton>
        <SecondaryButton href="#work">View Selected Work</SecondaryButton>
      </div>
    </div>
    <div className="hero-visual hidden lg:col-span-4 lg:block">
      <ArchitectureDiagram nodes={ecosystemNodes} />
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add fluid sizing and spacing**

In `src/app/globals.css`, keep existing theme variables and replace the hero
rules with:

```css
.hero-section {
  isolation: isolate;
  min-height: 100svh;
  padding-block: clamp(7.5rem, 15vh, 10rem) clamp(3rem, 8vh, 5rem);
  position: relative;
}

.hero-copy {
  max-width: 50rem;
}

.hero-title {
  color: var(--text-primary);
  font-size: clamp(3rem, 5.6vw, 5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.98;
}

.hero-subtitle {
  color: color-mix(in srgb, var(--text-secondary) 82%, var(--text-primary));
}

.hero-visual {
  margin-inline: auto;
  max-width: 22rem;
  width: 100%;
}
```

Remove the old `@media (min-width: 768px)` fixed `5.5rem` hero-title rule.

- [ ] **Step 3: Improve emphasis and diagram contrast**

Scope the emphasized phrase to the hero:

```css
.hero-title .text-gradient {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--text-primary) 82%, var(--accent)),
    color-mix(in srgb, var(--accent) 72%, var(--text-primary))
  );
  background-clip: text;
  -webkit-background-clip: text;
}

.hero-visual .ecosystem-line {
  stroke: color-mix(in srgb, var(--border-active) 65%, var(--accent));
}

.hero-visual .ecosystem-node {
  color: color-mix(in srgb, var(--text-secondary) 78%, var(--text-primary));
}
```

- [ ] **Step 4: Add short-height compression**

Use one native media query:

```css
@media (min-width: 1024px) and (max-height: 760px) {
  .hero-section {
    padding-block: 7rem 2.5rem;
  }

  .hero-title {
    font-size: clamp(3.25rem, 5.2vw, 4.5rem);
  }

  .hero-badge,
  .hero-title,
  .hero-subtitle {
    margin-bottom: 1.25rem;
  }

  .hero-copy ul {
    margin-bottom: 1.5rem;
  }
}
```

- [ ] **Step 5: Run static checks**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands exit `0`.

### Task 3: Remove Homepage Floating-CTA Competition

**Files:**
- Modify: `src/components/CalFloatingButton.tsx`

- [ ] **Step 1: Verify the failing behavior**

Open `/` and inspect for the Cal floating button after the page settles.

Expected: the floating button exists despite booking actions in the header and
hero.

- [ ] **Step 2: Gate initialization with the native Next pathname hook**

Update the component:

```tsx
import { usePathname } from "next/navigation";

export default function CalFloatingButton() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") return;

    // existing Cal initialization
  }, [pathname]);

  return null;
}
```

Do not change Cal configuration or booking links.

- [ ] **Step 3: Verify route behavior**

Open `/`, then a non-home route such as `/work`.

Expected: the floating button is absent on `/` and present on `/work`; the
header and hero Cal buttons still open the embed.

- [ ] **Step 4: Run static checks**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands exit `0`.

### Task 4: Responsive and Accessibility Verification

**Files:**
- Verify: `src/app/home-content.tsx`
- Verify: `src/app/globals.css`
- Verify: `src/components/CalFloatingButton.tsx`

- [ ] **Step 1: Inspect all acceptance viewports**

Capture final screenshots at 1440×900, 1366×768, 1280×720, 1024×768,
768×1024, and 390×844.

Expected at every size:

- no horizontal overflow;
- no clipped or overlapping hero content;
- both hero actions are visible or reachable through normal vertical scroll;
- desktop diagram is fully visible;
- tablet/mobile layout contains no squeezed diagram.

- [ ] **Step 2: Verify keyboard behavior**

From the address bar, press `Tab` through navigation and hero controls.

Expected: logical order, visible focus ring, and working Enter/Space activation.

- [ ] **Step 3: Verify reduced motion**

Emulate `prefers-reduced-motion: reduce` and reload.

Expected: hero content is immediately visible and transitions are effectively
disabled by the existing reduced-motion rule.

- [ ] **Step 4: Run final verification**

Run:

```bash
npm run lint
npm run build
git diff --check
git diff -- src/app/home-content.tsx src/app/globals.css src/components/CalFloatingButton.tsx
```

Expected: lint and build exit `0`, `git diff --check` emits nothing, and the
diff is limited to the approved hero and booking-button behavior.

