## Blocker

- `nextjs-portfolio/src/app/projects/[slug]/page.tsx:352` — `deriveResultFromSolution` fabricates public outcomes from keywords, including “eliminated,” “guaranteed,” “zero,” and “100%” claims, while the UI labels them a “Factual Retrospective.”
  Suggested fix: Remove derived outcomes or add an explicit optional result field populated only with owner-verified evidence.

- `nextjs-portfolio/src/app/projects/[slug]/page.tsx:619` — Luxe Spa is an owned pre-launch product, but the page says it was “Delivered” as a “production” platform, implying a shipped commercial result.
  Suggested fix: Describe it as a solo in-development build and limit the copy to implemented engineering scope.

- `nextjs-portfolio/src/data/projects.ts:296`; `nextjs-portfolio/src/app/projects/[slug]/page.tsx:622` — Anlingo’s web experience is described as private and as not exposing private user text, contradicting the owner rule that the web app is not fully private/on-device.
  Suggested fix: State precisely which processing is local versus server/provider-backed and remove blanket privacy guarantees.

## High

- `nextjs-portfolio/public/llms-full.txt:17` — The public AI-crawler document advertises an undefined GrammarAI project, links to the nonexistent `/projects/grammarai` route, and makes unsupported on-device/privacy claims.
  Suggested fix: Remove the stale GrammarAI section or replace it with a current project entry grounded in `src/data/projects.ts`.

- `nextjs-portfolio/src/data/projects.ts:185`; `nextjs-portfolio/src/data/projects.ts:195` — Luxe Spa challenge copy claims guaranteed retry/failure resilience and prevention of prompt injection and hallucinated services without repository evidence.
  Suggested fix: Mark this as an unverified claim needing owner confirmation, then qualify it or cite concrete tests/configuration before launch.

- `nextjs-portfolio/content/case-studies/luxe-spa.mdx:32`; `nextjs-portfolio/content/case-studies/luxe-spa.mdx:40` — The public narrative claims concurrent double-bookings are eliminated and background job completion is guaranteed; both are absolute, unverified outcomes.
  Suggested fix: Recast them as implemented safeguards/design goals unless owner-supplied concurrency and worker-failure evidence supports the absolutes.

- `nextjs-portfolio/src/data/projects.ts:672`; `nextjs-portfolio/src/data/projects.ts:765` — Noxivo publicly calls `noxivo.pro` the live site even though the repository explicitly records the `.pro` versus `.app` domain as unresolved.
  Suggested fix: Confirm the public domain with the owner and update both the feature copy and live link together.

- `nextjs-portfolio/src/app/projects/[slug]/page.tsx:1009` — Every project, including pre-launch products and simple sites, is said to have “achieved high reliability without operational bloat,” an unverified generated outcome.
  Suggested fix: Remove the universal outcome sentence or replace it with project-specific, owner-confirmed lessons.

- `nextjs-portfolio/src/data/homepage.ts:418` — Anlingo’s technical story asserts verified protection of API budgets and service availability, but no supporting evidence or owner confirmation exists in the repository.
  Suggested fix: Use implementation-only wording about rate limits, usage tracking, and fallbacks until operational evidence is confirmed.

## Medium

- `nextjs-portfolio/src/app/resume/page.tsx:56`; `nextjs-portfolio/src/app/resume/page.tsx:69` — Rentiora is presented as client work with the role “Frontend Developer,” while the repository records both the work type and role as unconfirmed.
  Suggested fix: Obtain owner confirmation or omit Rentiora from the résumé until its classification and role are verified.

- `nextjs-portfolio/src/app/blog/page.tsx:112`; `nextjs-portfolio/src/app/blog/page.tsx:127` — The prior section-2 accessibility gap remains for both article links: neither the title link nor “Read Article” has the requested 44px minimum target.
  Suggested fix: Give both anchors `inline-flex min-h-11 items-center`, or make one 44px card-level link and remove the duplicate target.

## Low

- `nextjs-portfolio/src/app/projects/[slug]/page.tsx:62` — Project Open Graph/Twitter images still use generic repeated alt text (`"${project.title} featured screenshot"`) instead of the descriptive gallery alt already available.
  Suggested fix: Reuse the matching hero/gallery alt in metadata, with an empty alt only when the image is decorative.

VERDICT: NO-GO — Remove the keyword-derived fabricated outcome generator in `src/app/projects/[slug]/page.tsx` first.
