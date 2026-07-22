# Portfolio Redesign — Full Implementation Spec (source of truth for all phases)

This is the approved, comprehensive spec for the `stitch-redesign` branch. Every phase delegation should reference this file by path rather than having the spec re-pasted. Do not deviate from it without checking back with the orchestrating session.

## Ground rules (apply to every phase)

- Modify the existing repo directly (`khelifi-salmen.com/nextjs-portfolio`). Do not create a separate demo project. Do not replace the repository. Do not rewrite working functionality without a clear reason.
- Before writing code for a phase, inspect the current state of whatever you're touching (framework/version, routing, styling approach, existing reusable components, project data sources, images, contact links, testimonials, animations, case-study routes, résumé route, SEO/metadata, forms/integrations) rather than assuming.
- Use `tasks/stitch-design-brief.md` and this file as the visual/content source of truth.
- **Content preservation is non-negotiable:** real project names, real screenshots, existing project descriptions, real technologies, existing routes, real testimonials, existing working links, contact details, social links, résumé content, public Freelancer info, existing accurate SEO content. You may rewrite copy for clarity but never change underlying facts. If information is missing, use a clearly marked content placeholder in the data layer — never fabricate content, metrics, client names, or testimonials.
- TypeScript strict, no unnecessary `any`. Centralized, typed content/data structures — no duplicating project content across components.
- Protect working software: reuse sound existing components/functionality; refactor only when the current structure blocks the approved design, accessibility, responsiveness, maintainability, or performance.
- End of every phase: run lint, typecheck, and production build; fix all errors introduced by that phase; do not claim completion if the build fails.

## Visual system (preserve, do not reinvent)

Refined Dark Architecture: near-black page background, single steel-blue accent `#2f80ed`, Manrope typography, selective liquid-glass materials, large rounded surfaces, strong whitespace, high-contrast text hierarchy, subtle ambient depth, pill-shaped actions, professional motion, reduced-motion support, reduced-transparency support.

Do not introduce: multiple accent colors, project-specific color themes, bright decorative gradients, heavy shadows, skeuomorphic device frames, generic dashboard mockups, excessive glass cards, technology-logo walls, generic developer-template layouts, large blue full-width CTA rectangles.

Glass is selective: navigation, primary interactive surfaces, architecture nodes, featured project framing, small proof elements, buttons, important floating metadata. Not every section needs a glass panel.

## Identity and positioning

Salmen Khelifi — full-stack software engineer and automation specialist. Tunisian-born, working remotely and internationally. 5+ years building software, 3+ years freelance/agency delivery.

Core positioning: "I build digital products that automate work, convert users, and scale."
Supporting: "Full-stack software engineer and automation specialist building web platforms, mobile products, SaaS systems, and automated workflows."

Tone: calm, direct, precise, technical, human, anti-hype, client-focused. Avoid "passionate developer," buzzword marketing, empty claims, fake urgency, invented metrics/projects/testimonials/clients/results.

## Verified-real facts available to use (do not invent beyond these)

- Freelancer.com: 4.9/5 rating, 8 reviews, 100% on-time, 100% on-budget, Preferred Freelancer badge. **Do not include Upwork statistics** (profile currently private there).
- Real engineering stories: structured self-audit of a multi-tenant platform (ChakTech) before launch-readiness; MongoDB → PostgreSQL live migration with no data loss; Luxe Spa Booking's multi-vertical preset system (spa/salon/barber/clinic swap in under 10 seconds, no code changes); Spotter AI's on-device camera-based pose detection (Google ML Kit, no cloud round-trip).
- Featured projects for homepage: Luxe Spa Booking (`/projects/luxe-spa`) and Anlingo (`/projects/anlingo`) — real problem/solution facts live in `nextjs-portfolio/src/data/projects.ts` (`overview.problem`, `overview.what`, `features[]`).
- Location wording: "Tunisian-born, working remotely and internationally" — do not name a specific city (unconfirmed/private).

## Architecture requirements

Reusable components rather than hard-coded sections. Suggested set: `SiteHeader`, `DesktopNavigation`, `MobileNavigation`, `SectionContainer`, `SectionHeading`, `StatusBadge`, `PrimaryButton`, `SecondaryButton`, `GlassSurface`, `CredibilityStrip`, `ArchitectureDiagram`, `ArchitectureNode`, `FeaturedProject`, `StandardProject`, `CompactProject`, `TechnicalStory`, `CapabilitySystem`, `ProcessTimeline`, `TestimonialSpotlight`, `AboutEditorial`, `ContactCTA`, `SiteFooter`.

Centralized typed content/data for: navigation, projects, project categories, testimonials, capabilities, engineering stories, process steps, social links, contact information, personal facts, technology groups.

## Global layout

Max content width ~1280px, 12-column desktop grid, intentional tablet layouts, single-column mobile where appropriate, 8px spacing rhythm, large section spacing, controlled asymmetric compositions, open space between sections. No long stack of identical cards — use full-width project visuals, asymmetric layouts, editorial typography, layered screenshots, architecture diagrams, connected timelines, one controlled bento composition, open unboxed content.

## Homepage sections (in order)

1. **Navigation** — Khelifi. / Work / Capabilities / Process / About / Contact / Start a Project. Fixed/sticky, compact liquid-glass surface, shrinks slightly on scroll, current-section indication, keyboard-accessible, visible focus states, no "Stack" nav item. Mobile: logo, menu trigger, clear open/close states, 44px+ touch targets, body scroll lock, current-page indicator, Start a Project primary action.
2. **Hero** — headline/supporting text as in Identity section above. Include: Available for New Projects, View Selected Work, Start a Project, "Tunisian-born, working internationally." Capability markers: Product Engineering / Automation and Integrations / High-Performance Experiences. Meaningful architecture visual beside content (nodes: user application, admin dashboard, API, auth, PostgreSQL, n8n, AI processing, payments, notifications, analytics — pick a truthful, meaningful subset with real connections, not a random disconnected diagram). Include one real interface fragment from an existing project. Mobile: vertical flow version.
3. **Credibility strip** — only verified facts (see above list). One compact horizontal composition desktop, wrapping/stacked on mobile. Not five large cards.
4. **Selected Work** — 3-4 strongest real projects: one large featured, two supporting, one compact specialist. Each: name, category, target business/user, problem, what was built, role, technical complexity, honest value (no invented metrics), real screenshot, View Case Study, Live Demo where available. Tech badges secondary. Vary composition between projects — not the same left-text/right-image pattern repeated. Add "View All Work."
5. **Technical Credibility** — built around the 4 real engineering stories above (one primary + three supporting). Each story: context, constraint, decision, trade-off, result, what it demonstrates. Diagrams/structured flows/schema views/expandable panels — not a generic skill-card grid.
6. **Capabilities** — Product Engineering / Automation & Integrations / High-Performance Experiences (bullet lists as specified in the original brief). Connected system representation: Interface → API → Database → Automation → Business outcome. One bento composition only — vary layout from other sections.
7. **Process** — Discover → Architect → Build → Launch and Improve. Per step: what I do / what the client receives / what decision is made. Connected timeline/system flow, not four equal cards.
8. **Client Proof** — real content only: one featured testimonial, two smaller excerpts, 4.9/5 across 8 reviews, 100% on-time, 100% on-budget, Preferred Freelancer badge. No Upwork stats. Not a three-column wall of identical cards.
9. **About** — editorial composition: real portrait, short intro, engineering philosophy, selected facts, résumé/GitHub/LinkedIn/email. Core statement: "I protect working software. I preserve what works, identify what is holding the product back, and improve it without destroying shipping momentum." Communicate ownership across database/backend/frontend/mobile/deployment/automation, and effective collaboration with clients/agencies/designers/technical teams. No long row of small social icons.
10. **Final contact section** — headline "Have a product, workflow, or platform that needs to be built?" / supporting copy as specified / actions: Start a Project, Book a Call, Email Me / optional project types (Build a product, Improve an existing system, Automate a workflow). One controlled blue glow, not oversized.
11. **Footer** — Khelifi. / title / Work / Capabilities / About / Contact / Résumé / GitHub / LinkedIn / Email / "Tunisia, working internationally." Dynamic current year. Line: "Built for clarity, performance, and maintainability."

## Work page

Page intro, accessible category filters (All / SaaS and Platforms / Automation and AI / Mobile / E-commerce / Websites), featured project, standard project layouts, compact specialist projects, technical experiments, contact CTA. Filters update displayed projects without breaking layout. Real project data only.

## Project case-study system (template + first implementation)

Reusable template: Hero → Impact → Context and problem → Solution → Architecture → Key product flows → Engineering decisions → Challenges → Visual gallery → Technology stack → Final result and lessons → Previous/next project navigation → Start a Similar Project CTA. Desktop: compact sticky table of contents. Mobile: collapsible contents control.

**First implementation: Luxe Spa Booking.** Real content/screenshots only (`nextjs-portfolio/src/data/projects.ts`, `luxe-spa`). Architecture may include, where factual: public booking interface, admin interface, staff access, API, auth, database, payments, real-time communication, notifications, automation, AI-assisted booking. Replace the current dense Challenges/Learnings table with Problem → Decision → Result stories. No empty screenshot placeholders.

## Capabilities page

Organize around client needs: build a new product / improve an existing system / automate operations / connect disconnected systems / technical ownership. Per category: suitable problem, typical deliverables, technical responsibility, what the client receives, relevant real project. No technology-logo gallery.

## About page

Direct introduction, engineering philosophy, what I can own, how I collaborate, real professional timeline, grouped tools/technologies, résumé and contact actions. Only real milestones.

## Contact page ("Start a Project")

Fields: name, email, company/project name, "what are you trying to build or improve," "what currently exists," desired outcome, project type, approximate budget range, preferred timeline, relevant link, attachment where supported. Project types: new product / existing-system improvement / automation / integration / mobile application / website or commerce / technical consultation. Clear process: 1) I review the request 2) I ask focused questions 3) We clarify scope and risks 4) I recommend the next step. **Preserve any existing working contact submission system — do not break existing email/form integrations.** (Check what exists before building anything new.)

## Résumé page

Name/title, contact info, summary, core capabilities, experience, selected projects, education, verified certifications, grouped technologies, Download PDF, Print action. Fewer glass effects. Prioritize readability, chronology, semantics, ATS compatibility, printability.

## Responsive requirements

Intentional layouts at 1440 / 1024 / 768 / 390. Not a scaled-down desktop layout. Mobile: no horizontal overflow, 44px+ buttons, large project screenshots, vertical-flow architecture diagrams, reduced backdrop blur, reduced decorative motion, no tiny badges, comfortable spacing, clear form controls, readable testimonial text, accessible mobile nav.

## Motion

Allowed: controlled section reveals, blur+scale materialization for selected glass surfaces, gentle project-image depth, cursor-responsive specular highlight, animated architecture connections, subtle nav resize, clear hover/focus feedback. Avoid: constant floating animation, excessive parallax, large spring movements, decorative particles, slow page transitions, motion that delays content access.

`prefers-reduced-motion`: cross-fades instead of slides, no parallax, stop architecture-line animation, keep hover/focus feedback.
`prefers-reduced-transparency`: increase surface opacity, remove/reduce backdrop blur, preserve hierarchy through solid surface colors, maintain readable borders/contrast.

## Accessibility

Semantic HTML, logical heading hierarchy, keyboard navigation, visible focus states, accessible mobile menu, meaningful link labels, form labels/error messages, sufficient contrast, alt text for project images, decorative visuals hidden from AT, no hover-only interactions, 44px+ touch targets, keyboard-usable architecture nodes, reduced-motion/transparency support.

## Performance & SEO

Responsive image loading, correct dimensions, modern formats where supported, lazy-load below-the-fold media, minimal client JS, server rendering where appropriate, code splitting, no unnecessary animation libraries, no large unoptimized background video, no viewport-wide expensive blur, stable layouts (minimal CLS). Preserve/improve current SEO: accurate titles, meta descriptions, canonical URLs, Open Graph, X card metadata where applicable, structured project metadata, sitemap, robots config, semantic headings, meaningful alt text. Never invent awards or business claims in metadata.

## Implementation order (do not skip ahead or bundle phases)

1. Global design tokens
2. Reusable layout system
3. Navigation
4. Homepage
5. Responsive homepage
6. Work page
7. Project case-study template
8. Luxe Spa Booking case study
9. Capabilities page
10. About page
11. Contact page
12. Résumé page
13. Accessibility states
14. Performance optimization
15. Testing and cleanup

## Deliverables expected at the end of each phase

Summary of what was implemented; files added; files modified; reusable components created; routes added/changed; content placeholders requiring owner input; any factual content that could not be found; testing performed; build result; remaining limitations.
