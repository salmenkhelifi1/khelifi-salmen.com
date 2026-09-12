# Component and Content Inventory

## Routes and platform behavior to preserve

- `/` homepage
- `/work` full project archive
- `/projects/[slug]` case studies and existing project slugs
- `/resume`
- `/blog` and `/blog/[slug]`
- `/n8n-automation-developer`
- Existing short-link redirects such as `/call`, `/cv`, `/github`, `/linkedin`, `/upwork`, and `/freelancer`
- Canonical, Open Graph, Twitter, JSON-LD, sitemap, robots, PWA, analytics, Cal.com, theme initialization, and service-worker behavior

## Homepage inventory

| Area | Current source | Decision |
| --- | --- | --- |
| Header | `SiteHeader.tsx`, `homepage.ts` nav data | Simplify labels and make the project brief the primary CTA; preserve theme and GitHub access. |
| Hero | `home-content.tsx`, `globals.css` | Keep the approved personal workspace image, shorten the composition, use outcome-first copy, remove duplicated badges/proof, add one primary and one secondary action plus a tertiary calendar link. |
| Trust strip | `CredibilityStrip.tsx`, `credibilityItems` | Keep once, immediately after the hero. |
| Capabilities | `services` in `homepage.ts` | Move before work and rename to buyer outcomes: Build & launch, Fix & improve, Automate & integrate. |
| Selected work | `FeaturedProject.tsx`, `CompactProject.tsx`, project data | Preserve two featured and two compact projects, their facts, links, and images. |
| Testimonials | `TestimonialSpotlight.tsx`, `testimonials.ts` | Put the strongest verified review immediately after work; remove repeated stats and progressively disclose supporting reviews. |
| Engineering proof | `technicalDepth` in `homepage.ts` | Preserve every verified claim and link; show summaries first and details through native accessible disclosure. |
| Process | `ProcessTimeline.tsx`, `processSteps` | Keep four stages with simpler default copy; disclose concern and deliverable on demand. |
| About | `home-content.tsx`, schema profile URLs | Keep the portrait, availability, engineering philosophy, résumé/CV, and professional profiles; remove repeated years/location and move marketplace/newsletter entry points to the footer. |
| Contact | `ContactCTA.tsx` | Replace equal CTA links with an accessible project brief that prepares a structured email; retain email and calendar alternatives. |
| Footer | `SiteFooter.tsx` | Preserve navigation/social links and add de-emphasized Fiverr/Substack entry points. |

## Verified content sources

- Project names, descriptions, case-study URLs, roles, decisions, and verification statements: `src/data/homepage.ts` and project route content.
- Testimonials and ratings: `src/data/testimonials.ts` and Freelancer profile URL.
- Public identity, email, booking, marketplace, and social URLs: `src/data/schema.ts`.
- Personal images: existing approved files in `public/images/`.

## Constraints

- No fabricated client logos, metrics, outcomes, testimonials, or company associations.
- No route or slug changes.
- No package installation or edits to the pre-existing dirty `package.json` and lockfile.
- No backend submission endpoint exists. The smallest truthful contact flow will validate a concise brief and open the visitor's email client with a structured draft; it will not claim server-side delivery.
- Existing untracked SEO reports, media, plans, and generated artifacts remain untouched.
