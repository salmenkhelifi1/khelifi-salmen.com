# Integrated Implementation Spec (Phase 8 reconciliation)

Reconciles `tasks/codex-architecture-audit.md` (structure) + `tasks/antigravity-ui-direction.md` (visual) + the live browser testing report. Branch: `stitch-redesign`. Each stage = one commit, verified in browser before the next.

## Resolved decisions
- Nav model: Codex's absolute-anchor shape (`/#work`, `/#services`, …) — no `usePathname` needed. Type widens to allow route links so `/resume` can join the nav (Antigravity requirement).
- One header: `SiteHeader` becomes the only header. Case-study pages consume it with a `backHref`/`backLabel` prop (Codex step 2) — this also fixes the transparent case-study header (browser finding #3) since `.nav-pill` is already opaque.
- TOC: keep `ProjectToc`, fix the parent grid so the sticky rail follows the full page (Codex step 3 / finding #2).
- Hero: add the 3 capability marker pills (Antigravity §2) and fix badge/nav collision via hero top-padding clearance (Antigravity §3) — pressure-test at multiple scroll positions, fall back to spacing+z rule if padding alone fails.
- Résumé: low-glass restyle per Antigravity §4 (solid `--bg-surface` surfaces, existing type scale, print stylesheet preserved, restyled action pills). Shares `SiteHeader` (Codex step 8 direction, minimal form).
- Gallery images: `BLUR_PLACEHOLDER` on all case-study images (Antigravity §5).
- Accessibility (Codex list): home `<main>` landmark; `<header>` wrapper + `aria-label` on nav; `aria-controls` on mobile menu button + unmount-or-inert closed menu; `aria-pressed` on homepage filter buttons; `<nav aria-label="Project navigation">` for prev/next; `aria-hidden` on decorative resume icons; `<cite>` misuse fixed.
- Cleanup: delete dead marquee CSS (Codex step 4).
- Deferred (follow-up, not this pass): SiteShell extraction, project-card data consolidation (`projectCards.ts`), case-study section extraction (Codex steps 5–7), Playwright smoke script.

## Stages & ownership
- **A (orchestrator, direct):** route-aware navLinks + Résumé nav item + GitHub icon button in header + `backHref` prop added to SiteHeader (so later stages only consume it). Footer links same fix.
- **B+D (delegated, one task):** case-study page adopts shared SiteHeader/SiteFooter (opaque header, Back to Work via prop), TOC sticky layout fix, gallery blur placeholders, [slug]-page a11y items, résumé restyle per Antigravity §4 with print preserved. MUST NOT touch `globals.css`, `home-content.tsx`, or `SiteHeader.tsx` beyond consuming existing props.
- **C+E (orchestrator, direct, parallel with B+D):** hero capability pills + badge clearance (home-content.tsx), home `<main>` landmark, header/nav landmarks + aria-controls + menu inert state (SiteHeader.tsx — done before B+D dispatch to avoid two writers), homepage filter `aria-pressed`, marquee CSS deletion (globals.css).
- **F (orchestrator):** Phase-10 full validation vs. the testing report; before/after summary.

## Definition of done
Every High/Medium finding from the testing report closed and re-verified live; tsc/lint/build clean; 26 routes build; one header/footer implementation across all routes; keyboard + landmarks verified; print résumé verified.
