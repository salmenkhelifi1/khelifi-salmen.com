# Next.js Portfolio Conversion Plan (done)

- [x] Audit existing static HTML/CSS/JS and asset usage
- [x] Rebuild layout, globals, and homepage markup in Next.js App Router
- [x] Create project detail pages matching static HTML
- [x] Install lucide-react and port icons
- [x] Copy images into Next.js public folder
- [x] Run diagnostics, lint, and build to verify

---

# Project Profile Page — Plan & Progress (current)

Session context file. If the conversation is lost, read this to resume.

## Working rules (user directives)
- **Orchestrator mode**: Claude plans/verifies only; actual coding is DELEGATED TO CODEX (`codex:codex-rescue` agent / codex plugin) to save tokens.
- Branch: `new-website`. App: `nextjs-portfolio/` (Next.js 16 App Router, React 19, TS, Tailwind v4, lucide-react v1 — brand icons removed, use `createLucideIcon` pattern from `src/app/home-content.tsx`).
- Dev server: `pnpm dev` in `nextjs-portfolio/` → http://localhost:3000
- No new libraries. No backend. Minimal, localized changes. Don't touch existing `project-*` pages or home page unless asked.

## Architecture decided
- Data-driven case-study pages:
  - `src/data/projects.ts` — typed static `Project[]` (slug, title, tagline, category, accent = literal Tailwind class strings, overview{what/problem/audience}, features[], gallery[], techStack{frontend/backend?/tools?}, badges[], challenges?, links{github?/live?}).
  - `src/app/projects/[slug]/page.tsx` — dynamic route, `generateStaticParams` + `generateMetadata`, `notFound()` for unknown slugs. Sections: hero, overview cards, features, gallery, tech stack, challenges table, CTA, footer. Optional fields render conditionally.
- Adding a project = append one object to `projects` array.

## Status
- [x] Codebase analysis (Phase 1)
- [x] `src/data/projects.ts` created — seeded: grammarai, adaptifit
- [x] `src/app/projects/[slug]/page.tsx` created
- [x] lucide `Github` import error fixed via `createLucideIcon`
- [x] ChakTech Platform case study added (slug `chaktech`, orange accent, `galleryAspect: "desktop"`, 13 images extracted to `public/images/chaktech/`)
- [x] Verified: /projects/{grammarai,adaptifit,chaktech} = 200, /projects/nope = 404, `tsc --noEmit` clean
- [x] Home integration (Codex): GrammarAI/Adaptifit cards → /projects/{slug}; new ChakTech Platform laptop card added; chaktech gallery trimmed to 6, desktop gallery = aspect-video 2-col
- [x] Verified locally: home links present, /projects/chaktech 200, `tsc` clean, `npm run lint` 0 errors (19 pre-existing warnings in old pages), `next build` clean

## Feature COMPLETE. Possible follow-ups (ask user)
1. Migrate remaining old `project-*` pages (rentiora, n8n, mobile, stitch-*) into projects.ts data; delete old pages + add redirects.
2. Visual polish pass on /projects/chaktech in browser.
3. Commit the work on `new-website`.

## Verify commands
```bash
cd nextjs-portfolio && npx tsc --noEmit
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/projects/grammarai
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/projects/chaktech
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/projects/nope   # expect 404
```
