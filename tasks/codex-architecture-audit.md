# Next.js Portfolio Architecture Audit

Read-only audit of `nextjs-portfolio/`. Branch confirmed with `git rev-parse --abbrev-ref HEAD`: `stitch-redesign`.

No source files were modified for this audit.

## Current Architecture

### What is working

- Next.js App Router is used in the expected places: `src/app/layout.tsx` owns document metadata, font setup, JSON-LD, global background, and dev-only `react-grab`; routes live at `/`, `/work`, `/resume`, and `/projects/[slug]`.
- Strict TypeScript and path aliases are configured in `tsconfig.json`; `@/*` maps to `src/*`.
- Styling is mostly simple and appropriate for this app: Tailwind v4 utilities plus CSS custom-property tokens and reusable classes in `src/app/globals.css`. There is no `tailwind.config.js`, which matches Tailwind v4 setup.
- Shared homepage modules exist and are worth preserving: `SiteHeader`, `SiteFooter`, `SectionContainer`, `SectionHeading`, `FeaturedProject`, `CompactProject`, `ProcessTimeline`, `ContactCTA`, and testimonial/project card modules.
- The canonical project-detail content source is already present in `src/data/projects.ts`, and it feeds dynamic routes, sitemap, schema JSON-LD, resume selected projects, and `/work`.
- `/work` has the right direction: `WorkGrid.tsx` reads `src/data/projects.ts` and adapts real project records into the existing card modules.
- State is small and local: homepage work filter, `/work` category filter, header mobile menu, and `ProjectToc` active section/disclosure state. No global state library is needed.

### Friction and unnecessary complexity

- `src/app/projects/[slug]/page.tsx` is doing too much. At 982 lines, it mixes route metadata, helper functions, project-specific architecture heuristics, TOC construction, page shell, all case-study section markup, previous/next navigation, JSON-LD, and footer markup. This is the main locality problem.
- The project route has a forked header and footer. It uses an ad-hoc `nav-blur` header at `src/app/projects/[slug]/page.tsx:440` and a local footer at `src/app/projects/[slug]/page.tsx:975`, while home and `/work` use `SiteHeader`/`SiteFooter`.
- `/resume` also has its own ad-hoc top nav and inline print styles in `src/app/resume/page.tsx:156` and `src/app/resume/page.tsx:239`. The page is knowingly not restyled, but it should still share the site shell.
- Navigation data is not route-aware. `navLinks` in `src/data/homepage.ts:101` contains bare `#work`, `#services`, etc. `SiteHeader` and `SiteFooter` render them directly, so the links break silently from `/work`, `/resume`, and `/projects/[slug]`.
- Project card content is duplicated. `src/data/homepage.ts` owns a separate `projects` list and `featuredWork`, while `src/data/projects.ts` owns the real case-study records. `/work` already proves this can be derived through adapters.
- Card modules depend on homepage-owned types. `FeaturedProject.tsx` imports `FeaturedWorkItem` from `homepage.ts`; `CompactProject.tsx` imports `Project` from `homepage.ts`. That makes homepage data the presentation seam even though `projects.ts` is the content source.
- Filtering vocabularies are duplicated. Homepage uses `WorkFilter` and `categoryToFilter`; `/work` uses `WorkPageCategory` and `projectCategoryMap`. These can drift.
- Dead CSS remains in `globals.css`: `@keyframes scroll`, `.marquee-container`, `.marquee-content`, `.marquee-item`, and the reduced-motion marquee override. No current TSX reference uses these classes.
- `ProjectToc` is a good module, but its sticky behavior is tied to the current project page flex/container structure. The bug where the left rail goes empty after the hero should be fixed by adjusting the page/aside layout, not by duplicating TOC code.

## Target Architecture

Keep the current app. Do not rewrite it.

### Route shell

Use one shared shell across routes:

- `RootLayout` stays responsible for document-level concerns only: `<html>`, font, global CSS, global JSON-LD/background.
- Add or use a small shared shell module, e.g. `src/components/SiteShell.tsx`, that renders:
  - `SiteHeader`
  - `<main>`
  - `SiteFooter`
- Pages pass route variations as props:
  - default home/work nav
  - optional back link such as `Back to Work`
  - optional compact/footer behavior
  - optional `hideOnPrint` for resume
- `SiteHeader` should become the only header implementation. Project pages should not own a second `nav`.
- `SiteFooter` should become the only footer implementation. If a compact footer is needed for case studies, make it a prop, not a fork.

### Navigation model

Make navigation absolute from any route. The simplest working interface:

```ts
type NavLink = {
  label: string;
  href: `/#${string}`;
};
```

Then store `/#work`, `/#services`, `/#process`, `/#about`, `/#contact`. This avoids needing `usePathname`; same-page anchors still work on `/`, and non-home routes navigate correctly.

If active-section styling is later needed, add `{ sectionId: "work" }` and derive the href in one helper. Do not add that now unless there is an actual active-state requirement.

### Project content model

Make `src/data/projects.ts` the single project source for:

- case-study routes
- `/work`
- homepage project grid
- sitemap
- resume selected project links
- schema JSON-LD

Move card presentation types/adapters out of `homepage.ts` into a small project presentation module, for example:

- `src/data/projectCards.ts` for `featuredSlugs`, category groups, and `toFeaturedProjectCard` / `toCompactProjectCard`
- or colocate the two adapter functions near `FeaturedProject`/`CompactProject` if only cards use them

Keep homepage-only data in `homepage.ts`: credibility items, services, process steps, ecosystem nodes, social links, and homepage copy.

### Case-study page module shape

Split `src/app/projects/[slug]/page.tsx` by visible sections, not by speculative abstractions:

- route file keeps `generateStaticParams`, `generateMetadata`, `getProject`, previous/next lookup, JSON-LD, and calls a case-study view
- `src/components/case-study/ProjectLinks.tsx`
- `src/components/case-study/ProjectHero.tsx`
- `src/components/case-study/ImpactSection.tsx`
- `src/components/case-study/ProblemSection.tsx`
- `src/components/case-study/SolutionSection.tsx`
- `src/components/case-study/ArchitectureSection.tsx`
- `src/components/case-study/FeatureFlowsSection.tsx`
- `src/components/case-study/ChallengesSection.tsx`
- `src/components/case-study/GallerySection.tsx`
- `src/components/case-study/TechStackSection.tsx`
- `src/components/case-study/ProjectPager.tsx`

Keep helper logic private to the section that uses it unless at least two sections need it.

## Minimal File Structure Recommendation

Preserve:

- `src/app/layout.tsx`
- `src/app/home-content.tsx`
- `src/app/work/page.tsx`
- `src/app/resume/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- `src/components/*`
- `src/data/projects.ts`, `src/data/homepage.ts`, `src/data/schema.ts`, `src/data/testimonials.ts`

Add only when implementing the related step:

- `src/components/SiteShell.tsx`
- `src/data/projectCards.ts`
- `src/components/case-study/*`

Do not add CMS, MDX, route groups, a design-system package, global state, or new dependencies for this portfolio.

## Migration Sequence

Each step should be one commit and independently shippable.

### 1. Fix route-aware nav links

Change `navLinks` from bare hashes to absolute home anchors and verify `SiteHeader`/`SiteFooter` on `/`, `/work`, `/resume`, and `/projects/luxe-spa`.

Risk: same-page anchor scroll on `/` could change subtly.

Verify:

- `cd nextjs-portfolio && npm run lint`
- `cd nextjs-portfolio && npm run build`
- Browser: from `/work`, click Work/Capabilities/Process/About/Contact and confirm each lands on the home section.
- Browser: from `/projects/luxe-spa`, click the same links and confirm no dead hash on the project URL.

### 2. Replace project header/footer fork

Use shared `SiteHeader` and `SiteFooter` on `src/app/projects/[slug]/page.tsx`. Add only the smallest props needed for `Back to Work` and compact footer behavior.

Risk: fixed header height/offset can shift case-study top spacing and anchor scroll.

Verify:

- `cd nextjs-portfolio && npm run lint`
- `cd nextjs-portfolio && npm run build`
- Browser: `/projects/luxe-spa` header is opaque like home/work, has a working Back to Work affordance, and the footer matches the shared footer or its compact prop.
- Browser: direct load `/projects/chaktech` and previous/next links still work.

### 3. Fix `ProjectToc` sticky layout

Keep `ProjectToc`; fix the parent layout so the sticky aside remains in the left rail through the full case-study content. Likely place: the container around `ProjectToc` and `<main>` in `src/app/projects/[slug]/page.tsx:457`.

Risk: desktop-only layout regression; mobile TOC should remain collapsible.

Verify:

- `cd nextjs-portfolio && npm run lint`
- `cd nextjs-portfolio && npm run build`
- Browser desktop: scroll `/projects/luxe-spa` from hero to CTA; left rail stays visible and active link updates.
- Browser mobile: TOC disclosure still opens/closes and anchors scroll to sections.

### 4. Delete dead marquee CSS

Remove `@keyframes scroll`, `.marquee-*`, and the reduced-motion `.marquee-content` rule from `globals.css`.

Risk: only if hidden markup still uses marquee classes. `rg "marquee-" nextjs-portfolio/src` should be clean before deletion.

Verify:

- `rg "marquee-" nextjs-portfolio/src`
- `cd nextjs-portfolio && npm run lint`
- `cd nextjs-portfolio && npm run build`
- Browser: home visual scan for missing motion/content.

### 5. Add shared route shell

Introduce `SiteShell` and move home/work/project/resume route wrappers toward the same header/main/footer structure. Keep route pages readable; do not force all layout through root `layout.tsx` because route-specific props are needed.

Risk: duplicate landmarks if pages already include `<main>` or footer.

Verify:

- `cd nextjs-portfolio && npm run lint`
- `cd nextjs-portfolio && npm run build`
- Browser: every route has one header, one main landmark, one footer.
- Browser print preview: `/resume` hides no-print chrome correctly.

### 6. Consolidate project card data

Derive homepage and `/work` project cards from `src/data/projects.ts`. Remove `projects` and `featuredWork` duplication from `homepage.ts` after adapters are in place.

Risk: card order, featured selection, category filters, and preview image choices can change if adapter defaults are careless.

Verify:

- `cd nextjs-portfolio && npm run lint`
- `cd nextjs-portfolio && npm run build`
- Browser: homepage Selected Work still shows the intended featured projects and compact cards.
- Browser: `/work` category filters still include all expected projects.
- Browser: click at least one featured and one compact card.

### 7. Extract case-study sections

Extract visible section modules from `[slug]/page.tsx` after shell and data work are stable. Keep rendering identical first; no copy or layout changes in this commit.

Risk: accidental section omission changes TOC or project pages.

Verify:

- `cd nextjs-portfolio && npm run lint`
- `cd nextjs-portfolio && npm run build`
- Browser: `/projects/luxe-spa`, `/projects/anlingo`, `/projects/chaktech`, and one simple freelancer-style project render all expected sections.
- Browser: unknown slug still 404s.

### 8. Restyle resume through shared primitives

After shell is shared, bring `/resume` closer to the same visual primitives while preserving print behavior.

Risk: print output can regress.

Verify:

- `cd nextjs-portfolio && npm run lint`
- `cd nextjs-portfolio && npm run build`
- Browser: `/resume` screen layout still readable.
- Browser print preview: PDF/download-oriented view remains clean and compact.

## Testing Requirements

Per change:

- `cd nextjs-portfolio && npm run lint`
- `cd nextjs-portfolio && npm run build`
- Optionally `cd nextjs-portfolio && npx tsc --noEmit` before build if you want a faster type pass; there is no dedicated `tsc` npm script in `package.json`.

There are no automated tests in the app today. Minimal worthwhile addition: one small script or Playwright smoke test for route/content checks after the nav/data consolidation:

- `/`
- `/work`
- `/resume`
- `/projects/luxe-spa`
- `/projects/nope` expecting 404
- from a non-home route, nav link to `/#work`

Do not add a broad test framework or component test suite unless the portfolio gains real app behavior. Browser smoke plus lint/build is enough here.

## Semantic and Accessibility Issues Spotted

- Home lacks a `<main>` landmark. `page.tsx` returns `HomeContent`, and `HomeContent` returns a fragment with sections/header/footer.
- `SiteHeader` renders an anonymous `<nav>` without a wrapping `<header>` or `aria-label`. Add a header landmark and label the nav.
- `SiteHeader` mobile menu button has `aria-expanded` but no `aria-controls`; the closed menu remains mounted with focusable links hidden only by opacity/pointer-events.
- Homepage work filter buttons do not expose selected state. `/work` already uses `aria-pressed`; mirror that.
- `ProjectToc` disclosure has `aria-expanded` and `aria-controls`, which is good. Keep this when fixing sticky layout.
- Project previous/next links live in an unlabeled `<section>`; use a `<nav aria-label="Project navigation">`.
- Testimonials and resume feedback use `<cite>` for reviewer/person attribution. Prefer normal attribution markup inside `figcaption` or a plain block; reserve `cite` for the cited work title/source.
- Heading order is mostly coherent: route `h1`, section `h2`, card/detail `h3`. Watch `FeaturedProject` using `h2` inside the homepage Selected Work section; it is acceptable but could become `h3` if `Selected Work` remains the section heading.
- Decorative icons mostly use `aria-hidden`, but a few resume icons inside links/buttons lack it. Add `aria-hidden="true"` where the surrounding text already names the action.

## Bottom Line

The app has good raw material: App Router, strict TypeScript, simple local state, shared visual modules, CSS tokens, and a real project data source. The architecture work should be deletion and consolidation: one shared shell, route-safe nav links, one project data source, then a section split of the long case-study page.
