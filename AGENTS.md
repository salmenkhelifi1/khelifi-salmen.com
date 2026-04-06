# AGENTS

## Repository layout
- Root (`khelifi-salmen.com/`) still hosts the legacy static site (HTML/CSS, assets, and GitHub Pages workflow). The actively developed portfolio lives under `nextjs-portfolio/` (Next.js App Router). Know which surface you are changing before editing.
- `tasks/todo.md` tracks migration status; skim it for outstanding review items (lint/diagnostics) before starting work.
- `images/` at the root belongs to the static site. The Next.js app serves media from `nextjs-portfolio/public/` (e.g., `public/images/stitch-projects`).

## Setup & tooling
- Use Node 18.18+ (Next.js 16 requirement). Run `npm install` separately in the repo root (for Stitch helper scripts) and in `nextjs-portfolio/` (for the actual app).
- The `nextjs-portfolio` package uses TypeScript with `strict: true`, `moduleResolution: "bundler"`, and the alias `@/* → ./src/*`. Respect these when adding imports.
- Tailwind v4 is provided through `@tailwindcss/postcss` only; there is no classic `tailwind.config.js`. All styling is currently utility classes plus custom CSS in the app.

## Everyday commands (run inside `nextjs-portfolio/`)
- Dev server: `npm run dev` (Next.js 16/Turbopack on port 3000).
- Lint: `npm run lint` (Next.js core-web-vitals + TypeScript config). Fix `next/no-img-element` warnings rather than suppressing unless the page intentionally needs raw `<img>`.
- Typecheck/build: `npm run build`. This also runs Next.js type analysis. Expect a "workspace root inferred" warning because multiple `package-lock.json` files exist; it is harmless if you execute commands from `nextjs-portfolio/`.
- Preview production build: `npm run start` after `npm run build`.
- There are no automated tests; verification = lint + build.

## Patterns & conventions
- Project detail pages live under `nextjs-portfolio/src/app/project-*/page.tsx`. Each file exports `metadata` and follows the hero → gallery → features → stack → achievements template. Copy an existing page when adding new work.
- The homepage (`src/app/home-content.tsx`) is a client component (`"use client"`) that wires scroll animations and parallax effects. Keep DOM/`window` usage here; server components must remain side-effect free.
- Use `lucide-react` icons (or `createLucideIcon`) instead of importing SVGs manually to stay consistent.
- Images referenced in the app must be copied into `nextjs-portfolio/public/...` and served with `<Image>` when possible. Only fall back to `<img>` when Stitch galleries demand raw tags; lint will flag this otherwise.
- Stick to the alias `@/` for shared utilities if you add new helpers under `src/`.

## Asset automation & scripts
- Stitch screenshots are downloaded by the scripts in the repo root (`fetch-grammarai-stitch.mjs`, `download-stitch-screenshots.mjs`, etc.). They rely on `@google/stitch-sdk` and expect `process.env.STITCH_API_KEY` (currently hardcoded). Running them drops PNG files into `nextjs-portfolio/public/images/stitch-projects/`.
- The root `package.json` only exists to host those scripts; it is not tied to the Next.js app.

## CI / deployment
- `.github/workflows/static.yml` deploys the root directory to GitHub Pages on pushes to `main`. It simply uploads the repository contents; ensure generated assets you want on Pages are committed.
- There is no automated build for the Next.js app yet. Run `npm run lint && npm run build` locally before opening a PR.

## Gotchas
- Multiple `package-lock.json` files cause Next.js to warn about the workspace root; ignore the warning or set `turbopack.root` if it becomes noisy.
- LSP diagnostics in this environment may be unavailable (typescript-language-server is missing); rely on `npm run lint`/`npm run build` for validation instead.
- Do not accidentally edit the legacy static HTML files when the change belongs in the Next.js app, and vice versa.
