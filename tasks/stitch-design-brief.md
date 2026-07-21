# Design Brief — Salmen Khelifi Portfolio (for Google Stitch)

Extracted from the live implementation on `main` (current `new-website` work is already merged in — `main` is ahead). Sources: `nextjs-portfolio/src/app/globals.css`, `nextjs-portfolio/src/app/home-content.tsx`, `nextjs-portfolio/src/app/layout.tsx`.

Paste the block below directly into Stitch as the style/brand description. Everything after it is reference detail if Stitch needs more specifics.

---

## Stitch Prompt (paste-ready)

> A dark, premium "Refined Dark Architecture" portfolio UI for a full-stack software engineer & automation specialist. Near-black background (#08080a) with slightly lighter surface panels (#0e0e12, #16161f). Frosted "liquid glass" cards: translucent white (8-13% opacity), 20px backdrop blur, 180% saturation, hairline border that's bright on top (35% white) and dim elsewhere (14% white), soft outer shadow. Single accent color only — steel blue #2f80ed — used sparingly for CTAs, active states, and a subtle glow, never decorative. Text hierarchy: off-white primary (#f5f5f7), muted gray secondary (#8e8e93), dim tertiary (#515156). Typography is Manrope, tight negative letter-spacing on headlines (-0.03 to -0.04em), bold weights (700-800) for headings, light weight (300) for large body text. Fully rounded pill buttons (border-radius 999px) with glass material and a blue glow on the primary CTA. Cards use a large 28px radius. Generous whitespace, 8pt spacing grid, minimal ambient background blooms (blurred blue/purple/teal radial gradients, very low opacity) instead of hard gradients. No multi-color accents, no drop-shadow skeuomorphism, no bevels — flat, quiet, high-end SaaS aesthetic (think Linear / Vercel / Apple product pages, not a colorful dev-portfolio template).

---

## 1. Color Tokens

| Token | Value | Use |
|---|---|---|
| `--bg-page` | `#08080a` | Page base |
| `--bg-surface` | `#0e0e12` | Card/section fills |
| `--bg-surface-elevated` | `#16161f` | Hover / icon chips |
| `--border-subtle` | `rgba(255,255,255,0.03)` | Hairline section dividers |
| `--border-muted` | `rgba(255,255,255,0.08)` | Standard borders |
| `--border-active` | `rgba(255,255,255,0.16)` | Hover/focus borders |
| `--text-primary` | `#f5f5f7` | Headlines, body emphasis |
| `--text-secondary` | `#8e8e93` | Body copy, descriptions |
| `--text-tertiary` | `#515156` | Captions, footer, meta |
| `--accent` | `#2f80ed` | Only accent color — CTAs, active state, links on hover |
| `--accent-dim` | `rgba(47,128,237,0.1)` | Accent fills |
| `--accent-glow` | `rgba(47,128,237,0.04)` | Ambient glow |

**Rule: single-accent system.** No secondary brand colors, no per-project color-coding. Everything besides the one blue accent is grayscale.

### Liquid Glass material
```
--glass-bg: rgba(255,255,255,0.08)
--glass-bg-elevated: rgba(255,255,255,0.13)   /* hover state */
--glass-border: rgba(255,255,255,0.14)
--glass-border-bright: rgba(255,255,255,0.35) /* top border only, simulates light hitting glass */
--glass-blur: 20px backdrop-filter blur + 180% saturate
--glass-shadow: 0 8px 32px rgba(0,0,0,0.35), inset top highlight, inset bottom shade
```
Applied to: nav bar, hero badge, all cards (services, testimonials, project images), buttons, tech badges, portrait frame.

### Ambient background
Three large (45-65vw) blurred radial-gradient "blooms" fixed behind all content, slow-drifting (26-38s ease-in-out loops), low opacity:
- Top-left: blue `rgba(47,128,237,0.5)`
- Bottom-right: purple `rgba(148,87,235,0.4)`
- Mid-right: teal `rgba(45,212,191,0.32)`

## 2. Typography

Font: **Manrope** (Google Font), weights 300/400/500/600/700/800.

| Style | Size (mobile → desktop) | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|
| Display Hero | 56px → 88px | 800 | -0.04em | 1.05 |
| H1 | 44px → 56px | 700 | -0.03em | 1.1 |
| H2 | 32px → 36px | 600 | -0.02em | 1.2 |
| H3 | 20px | 600 | -0.01em | 1.4 |
| Body Large | 18px | 300 | -0.01em | 1.6 |
| Body Regular | 16px | 400 | 0 | 1.6 |
| Caption/Badge | 12px | 600 | +0.05em, uppercase | 1.5 |

Hero headline uses a top-to-bottom white → gray text gradient (`#ffffff` → `#a1a1aa`) on the emphasis line, not the accent color.

## 3. Spacing, Radius, Shadow

- 8pt grid: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px
- Radius: sm 6px, md 10px, lg 16px, xl 28px (cards/panels), pill 999px (buttons/badges)
- Card shadow: `0 4px 30px rgba(0,0,0,0.4)` + inset top highlight
- Hover shadow: `0 10px 40px rgba(0,0,0,0.6)` + stronger inset highlight
- Accent glow (primary CTA): `0 0 40px -10px rgba(47,128,237,0.15)`
- Motion: interactive transitions 180ms `cubic-bezier(0.4,0,0.2,1)`; scroll-reveal entrances 600ms `cubic-bezier(0.16,1,0.3,1)`, 12px vertical offset; respects `prefers-reduced-motion`

## 4. Components

- **Nav bar**: fixed, full-width glass blur strip, logo "Khelifi." (accent-colored period), inline links, pill "Let's Talk" CTA, hamburger on mobile.
- **Buttons**: pill-shaped, min 44×44px touch target, glass material. Primary = accent blue fill + glow; secondary = glass fill, brightens on hover; active `:active` scales to 0.97.
- **Badges/tags**: pill, glass background, uppercase caption text or regular text depending on context (tech-stack tags vs. filter chips).
- **Cards**: glass panel, 28px radius, hover brightens background + adds outer shadow. Used for service cards, testimonial cards, project image frames.
- **Portrait/avatar**: circular glass frame, image cropped to fill.
- **Marquee**: horizontal auto-scroll strip of plain-text tech names, edge-masked (fades at left/right), tertiary-gray text brightening to primary on hover.

## 5. Profile / About Section (current implementation — what to redesign in Stitch)

Section anchor `#about`, centered, max-width 4xl, on the base page background (not a boxed card — content sits directly on the ambient-bloom backdrop).

**Current structure, top to bottom:**
1. Circular glass-framed portrait (128px mobile → 160px desktop), photo: `salmen-khelifi-full-stack-developer-portrait.jpg`
2. H2 "About Me"
3. Bio paragraph (body-large, secondary-gray with primary-white emphasis spans):
   > "With **5+ years of experience**, I bridge the gap between complex code and business goals. Whether it's a mobile app in **Flutter**, a custom **WordPress** plugin, or an autonomous **n8n** workflow, I build solutions that work."
4. Row of social/contact links, all pill/icon-only except two labeled pills:
   - Icon-only (44×44px, secondary-gray → accent on hover): GitHub, LinkedIn, Facebook, Instagram, X
   - Labeled pills (bordered, glass): "Freelancer.com", "Upwork", "View résumé" (→ `/resume`), "Download CV" (PDF, with download icon)

**Identity/positioning copy used site-wide** (for consistent tone in any new Stitch screens):
- Title: "Salmen Khelifi | Full-Stack, Mobile & Automation Specialist"
- One-liner: "Software Engineer & Automation Specialist building revenue-focused web apps, mobile products, and AI workflows."
- Hero headline: "Building automated digital ecosystems."
- Hero subhead: "I am Salmen Khelifi, a Software Engineer & Automation Specialist. From Web Apps & Mobile to complex AI Workflows, I build systems that drive revenue."
- Status badge: "AVAILABLE FOR NEW PROJECTS" (small accent dot + uppercase caption text, glass pill)
- Stack marquee: n8n Automation, Flutter, React.js, Node.js, OpenAI API, Shopify Liquid, WordPress, Firebase

## 6. What NOT to do (deviations to avoid when generating new screens)

- No per-project/category accent colors (past version used emerald/purple/orange — that was removed; single blue accent only now)
- No skeuomorphic device mockups (phone bezels, laptop frames) — flat image previews with a thin border instead
- No bright/solid white CTA buttons — use the glass + accent-glow treatment
- No heavy drop shadows or bevels — shadows are soft, low-opacity, layered with inset highlights only
