# Antigravity UI Direction & Implementation Specification

This document defines the concrete, implementation-ready UI direction for the `nextjs-portfolio` application (`khelifi-salmen.com/nextjs-portfolio`). It addresses key audit findings while strictly enforcing the **Refined Dark Architecture** design system.

---

## 1. Dual-Audience Navigation & Recruiter Path

### Audit Finding & Objective
The site currently prioritizes freelance client acquisition ("Start a Project" / "Let's Talk" CTA), while the recruiter path is buried. The link to `/resume` is hidden inside the `#about` section bio and the footer. Recruiters performing a 30-second scan cannot instantly access structured credentials, code samples, or full-stack engineering depth.

### Proposed Navigation Changes (`SiteHeader.tsx` & `navLinks`)
We propose a minimal, high-impact adjustment to `SiteHeader.tsx` that surfaces the **Résumé** link directly in the primary navigation and adds a direct **GitHub** icon shortcut, without diluting the primary client conversion CTA.

#### Desktop Navigation Structure (`md:flex`)
- **Nav Links Array** (`src/data/homepage.ts` `navLinks`):
  1. `Work` (`href: "/#work"`)
  2. `Capabilities` (`href: "/#services"`)
  3. `Process` (`href: "/#process"`)
  4. `About` (`href: "/#about"`)
  5. `Résumé` (`href: "/resume"`)
- **Header Actions Area** (Right side of `SiteHeader.tsx`):
  - **GitHub Icon Link**: An accessible icon button (`min-h-11 min-w-11`) positioned immediately to the left of the CTA button.
    - Class: `inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-active)] hover:bg-[var(--glass-bg-elevated)] transition-colors`
    - Icon: `GithubIcon` (from `lucide-react`)
    - Accessibility: `aria-label="GitHub Profile"`
  - **Primary CTA Button**: `"Let's Talk"` / `"Book a Call"` (`href: bookingUrl`, `target="_blank"`).

#### Mobile Menu Drawer (`md:hidden`)
- Navigation items inside `SiteHeader` dropdown menu drawer:
  1. `Work`
  2. `Capabilities`
  3. `Process`
  4. `About`
  5. `Résumé` (styled with a subtle `--accent` highlight badge or text color `text-[var(--accent)]` to draw recruiter attention)
- Bottom Actions inside drawer:
  - Row with GitHub and LinkedIn icon links.
  - Full-width CTA button: `"Book a call"` (`cta-button cta-primary w-full`).

### 30-Second Recruiter Scan Path (Page-by-Page)

```
[ Homepage: Top Nav ] ---> Click "Résumé" ---> [ /resume Page ]
        |                                             |
        +---> Hero: Capability Markers                +---> Download PDF / Book Call
        +---> Hero: "View Selected Work"              +---> ATS-Clean Experience & Skills
        +---> Featured Case Studies                   +---> Links to Case Studies / GitHub
```

1. **Homepage (`/`) (0 - 10 Seconds)**:
   - **Header**: Sees `Résumé` link in fixed nav and GitHub icon in top-right.
   - **Hero**: Scans key capability markers (`Product Engineering`, `Automation & Integrations`, `High-Performance Experiences`) and ecosystem diagram showing full-stack architecture depth.
2. **Résumé Page (`/resume`) (10 - 20 Seconds)**:
   - **Header Controls**: Instant sticky action for `"Download PDF"` (`salmen-khelifi-cv.pdf`) and `"Book a call"`.
   - **Summary & Experience**: High-density typography hierarchy cleanly outlining 5+ years experience, stack breakdown (React, Next.js, Node.js, Flutter, n8n, PostgreSQL), and factual project outcomes.
3. **Case Study Pages (`/projects/[slug]`) (20 - 30 Seconds)**:
   - Recruiter clicks a project link (e.g. `Luxe Spa Booking` or `Anlingo`).
   - Scans sticky Table of Contents (`ProjectToc`), Architecture topology cards, Engineering Decisions, and clicks `"Source Code"` (GitHub link) or `"Live Demo"`.

---

## 2. Hero Capability Markers

### Master Spec Requirement
The master redesign spec (`tasks/portfolio-redesign-spec.md`) requires three core capability markers in the hero:
1. **Product Engineering**
2. **Automation and Integrations**
3. **High-Performance Experiences**

### Design & Placement Decision
- **Placement**: Located inside `home-content.tsx` under the main hero headline paragraph (`.hero-subtitle`) and immediately above the primary action buttons (`.hero-actions`).
- **Visual Treatment Decision**: **Refined Glass Pill Row** (Justified over plain caption text).
  - *Justification*: Plain caption rows look like passive footer tags. Individual glass pills (`.tech-badge` styling with a `--glass-bg` surface and subtle `--accent` indicator dot) reinforce the liquid-glass material system while maintaining high contrast and distinct scannability.
- **Markup & Styling Specification**:
  ```tsx
  <div className="reveal mb-10 flex flex-wrap gap-3" style={{ transitionDelay: "250ms" }}>
    <div className="tech-badge inline-flex items-center gap-2 border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-primary)] backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
      Product Engineering
    </div>
    <div className="tech-badge inline-flex items-center gap-2 border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-primary)] backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
      Automation & Integrations
    </div>
    <div className="tech-badge inline-flex items-center gap-2 border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-primary)] backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
      High-Performance Experiences
    </div>
  </div>
  ```

### Responsive Behavior & Hero Grid Integration
- **Grid Layout**: Hero uses a 12-column grid (`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`).
  - Left Column (`lg:col-span-7`): Holds `StatusBadge`, `hero-title`, `hero-subtitle`, **Capability Markers**, and `hero-actions`.
  - Right Column (`lg:col-span-5`): Holds `ArchitectureDiagram` (visible at `lg+` breakpoint).
- **Responsive Flexing**:
  - At `<768px` (Mobile): Capability markers wrap vertically into 2-3 rows, aligned left, 100% width container.
  - At `≥768px` (Tablet/Desktop): Inline horizontal wrap with `gap-3`.

---

## 3. Hero Status Badge / Nav Collision Mitigation

### Collision Root Cause Analysis
- **Current State in Code**:
  - `SiteHeader.tsx`: Container has `fixed top-4 z-50` (16px from top viewport). The `.nav-pill` height is ~56px. Total nav bottom boundary = `16px + 56px = 72px` (and up to 84px on mobile open state).
  - `home-content.tsx`: Hero section uses `<section className="hero-section flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 ...">`.
  - On viewports with height `<800px` or mobile screens (390px width), `pt-20` (80px top padding) places the top edge of `StatusBadge` (`AVAILABLE FOR NEW PROJECTS`) at `80px` from section top, causing visual intersection and overlap with the floating nav pill at `scroll = 0`.

### Exact Stacking & Spacing Architecture

```
Viewport Top (0px)
|
+--- [16px] Top Offset (top-4)
|    +-----------------------------------------------------+
|    | Fixed Floating Nav Pill (.nav-pill) [Height: 56px]  |  (z-index: 50)
|    +-----------------------------------------------------+
+--- [72px] Nav Pill Bottom Boundary
|
|    ==== [48px CLEARANCE BUFFER] ====
|
+--- [120px] Hero Content Top Padding (pt-32 / md:pt-40)
|    +-----------------------------------------------------+
|    | StatusBadge ("AVAILABLE FOR NEW PROJECTS")          |  (z-index: 10)
|    +-----------------------------------------------------+
|    | Hero Title & Subtitle                               |
|    +-----------------------------------------------------+
```

#### Code Modifications Specification:
1. **Hero Section Padding Adjustment** (`home-content.tsx` line 151):
   - Replace `pt-20` with `pt-32 md:pt-40` (128px on mobile, 160px on desktop).
   - This ensures minimum clearance between nav pill bottom (`72px`) and status badge top (`128px`) is **56px** on mobile and **88px** on desktop at `scroll = 0`.
2. **Layering & Z-Index Table**:

| Element | CSS Selector / Class | z-index | Position |
|---|---|---|---|
| Floating Header | `SiteHeader.tsx` wrapper | `z-50` | `fixed top-4` |
| Mobile Menu Dropdown | Dropdown panel in `SiteHeader` | `z-50` | `absolute top-[calc(100%+0.5rem)]` |
| Hero Content Wrapper | `.hero-content` | `z-10` | `relative` |
| Ecosystem Diagram | `ArchitectureDiagram.tsx` | `z-10` | `relative` |
| Ambient Blooms Background | `.bg-blooms` | `z-[-1]` | `fixed inset-0` |

3. **Scrolled Nav Backdrop Rules**:
   - `.nav-pill` uses `background: rgba(10, 10, 14, 0.78)` with `backdrop-filter: blur(20px) saturate(180%)`. Content passing beneath the nav remains readable without visually clashing with header text.

---

## 4. Résumé Page Restyle (`/resume/page.tsx`)

### Design Mandate: Low-Glass, High-Readability, Print-Optimized
The `/resume` page must prioritize rapid parsing by human reviewers and ATS parsers, clean PDF export, and seamless integration with the portfolio's Refined Dark Architecture token system without copying decorative homepage effects (no drifting ambient blooms).

### Typography Scale & Token Usage
- **Page Base**: `bg-[var(--bg-page)]` (`#08080a`), text `text-[var(--text-primary)]` (`#f5f5f7`).
- **Header Title**: `text-h1` (36px mobile / 48px desktop, `font-extrabold tracking-tight`).
- **Job Title Subhead**: `text-h3 text-[var(--accent)]` (`#2f80ed`, `font-semibold`).
- **Section Headings**: `text-h2` (`text-xl font-bold flex items-center gap-2 border-b border-[var(--border-muted)] pb-2.5 mb-6 text-[var(--text-primary)]`).
- **Body / Bullet Text**: `text-body-regular` (`text-sm md:text-base text-[var(--text-secondary)] leading-relaxed`).
- **Tech Stack Badges**: `.tech-badge` (`bg-[var(--bg-surface-elevated)] border border-[var(--border-muted)] text-[var(--text-secondary)] text-xs rounded-full px-3 py-1`).

### Card & Surface Restyle (Glass Minimization)
- Replace frosted `.glass-panel` cards with solid/semi-solid surfaces:
  - **Skill Cards**: `bg-[var(--bg-surface)]` (`#0e0e12`) with `border border-[var(--border-muted)]` (`rgba(255,255,255,0.08)`).
  - **Experience Blocks**: Borderless clean list with left accent hairline indicator `border-l-2 border-[var(--accent-dim)] pl-4 hover:border-[var(--accent)] transition-colors`.

### Action Buttons & CTA Integration
Header action buttons (`/resume/page.tsx` line 336):
- **Download PDF Button**:
  - Class: `cta-button system-live-link inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-[var(--text-primary)]`
  - Icon: `<Download className="w-4 h-4" />`
  - Action: Triggers download of `/salmen-khelifi-cv.pdf`.
- **Book a Call Button**:
  - Class: `cta-button cta-secondary inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-6 py-2.5 text-sm font-bold text-[var(--text-primary)] hover:bg-[var(--glass-bg-elevated)]`
  - Icon: `<ArrowUpRight className="w-4 h-4" />`
  - Action: External link to `bookingUrl`.

### Print Stylesheet Specification (`@media print`)

```css
@media print {
  /* 1. Reset Background & Force Pure High-Contrast Printing */
  body, html, :root {
    background: #ffffff !important;
    color: #000000 !important;
    font-size: 11pt !important;
    line-height: 1.4 !important;
  }

  /* 2. Hide Non-Print Interactive Elements */
  .no-print, nav, header .cta-button, footer, .bg-blooms {
    display: none !important;
  }

  /* 3. Header & Contact Layout for Print */
  .print-header {
    border-bottom: 2pt solid #000000 !important;
    margin-bottom: 16pt !important;
    padding-bottom: 8pt !important;
  }

  /* 4. Page Break & Section Hygiene */
  .print-section, .print-project {
    page-break-inside: avoid;
    break-inside: avoid;
    margin-bottom: 14pt !important;
  }

  /* 5. Typography & Color Adjustments */
  h1 { font-size: 20pt !important; color: #000000 !important; margin-bottom: 4pt !important; }
  h2 { font-size: 13pt !important; color: #000000 !important; border-bottom: 1pt solid #666666 !important; margin-bottom: 8pt !important; }
  h3 { font-size: 11pt !important; color: #000000 !important; font-weight: bold !important; }
  p, li, span { color: #222222 !important; }
  .print-accent { color: #000000 !important; font-weight: bold !important; }

  /* 6. Explicit URL Display on External Print Links */
  a[href^="http"]::after, a[href^="mailto:"]::after {
    content: " (" attr(href) ")";
    font-size: 9pt;
    color: #444444;
    font-weight: normal;
  }

  /* 7. Skill Chips Print Expansion */
  .tech-badge {
    border: none !important;
    background: transparent !important;
    padding: 0 !important;
    color: #000000 !important;
    font-weight: 600 !important;
  }
  .tech-badge::after { content: ", "; }
  .tech-badge:last-child::after { content: ""; }
}
```

---

## 5. Case-Study Image Loading & Placeholder Strategy

### Audit Finding
Case-study gallery images on project pages (`/projects/[slug]`) currently lazy-load as empty black rectangles (`bg-[var(--bg-surface)]`). The baseline homepage implementation uses a blur placeholder (`BLUR_PLACEHOLDER`), but project gallery loops lack explicit blur data URLs and skeleton states.

### Universal Blur Placeholder Standard

#### Constant Definition & Export (`src/data/homepage.ts` or `@/data/schema`):
```typescript
export const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAFAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKrobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDhc+1FFFUB/9k=";
```

#### Mandatory `<Image>` Properties Checklist for All Case Studies:
Every `<Image>` component in `FeaturedProject.tsx`, `CompactProject.tsx`, and `app/projects/[slug]/page.tsx` must strictly supply:
1. `src`: Absolute path under `/images/...`
2. `alt`: Descriptive text string (e.g. `OWNER-COPY-NEEDED: Screen preview of Luxe Spa admin scheduling grid`)
3. `placeholder="blur"`
4. `blurDataURL={BLUR_PLACEHOLDER}`
5. `sizes`: Responsive media sizes attribute matching layout width
6. Container styling: Image parent `<div>` MUST include `bg-[var(--bg-surface-elevated)] animate-pulse` until loaded to prevent black frame flashes.

---

## 6. Comprehensive Component States Inventory

This matrix defines the required visual tokens for every interactive element across default, hover, focus, active, and current states.

| Element Type | Default State | Hover State | Focus-Visible State | Active State (`:active`) | Current / Selected State |
|---|---|---|---|---|---|
| **Nav Links** (`SiteHeader`) | `text-[var(--text-secondary)]` (`#8e8e93`), `text-sm font-medium` | `text-[var(--text-primary)]` (`#f5f5f7`), `transition-colors 180ms` | `outline: 2px solid var(--accent)`, `outline-offset: 4px`, `rounded-md` | `text-[var(--text-primary)]`, `scale(0.97)` | `text-[var(--text-primary)]`, `font-semibold`, `aria-current="page"` |
| **Filter Chips** (`WorkGrid`) | `bg-[var(--glass-bg)]`, `border-[var(--glass-border)]`, `text-[var(--text-secondary)]` | `bg-[var(--glass-bg-elevated)]`, `border-[var(--border-active)]`, `text-[var(--text-primary)]` | `outline: 2px solid var(--accent)`, `outline-offset: 2px` | `scale(0.96)` | `bg-[rgba(47,128,237,0.55)]`, `text-[var(--text-primary)]`, `border-transparent` |
| **Primary CTA Button** | `bg-[rgba(47,128,237,0.55)]`, `border-[rgba(47,128,237,0.6)]`, `color: #f5f5f7` | `bg-[rgba(59,141,243,0.7)]`, `box-shadow: var(--glow-accent), var(--shadow-hover)` | `outline: 2px solid var(--text-primary)`, `outline-offset: 4px` | `transform: scale(0.97)`, `transition: 120ms` | N/A |
| **Secondary CTA Button** | `bg-[var(--glass-bg)]`, `border-[var(--glass-border)]`, `color: #f5f5f7` | `bg-[var(--glass-bg-elevated)]`, `border-[var(--border-active)]` | `outline: 2px solid var(--accent)`, `outline-offset: 4px` | `transform: scale(0.97)` | N/A |
| **Project Cards** (`FeaturedProject` / `Compact`) | `bg-[var(--glass-bg)]`, `border-[var(--glass-border)]`, `box-shadow: var(--glass-shadow)` | `bg-[var(--glass-bg-elevated)]`, `border-[var(--border-active)]`, `box-shadow: var(--shadow-hover)` | `outline: 2px solid var(--accent)`, `outline-offset: 4px` | `scale(0.99)` | N/A |
| **TOC Links** (`ProjectToc`) | `text-[var(--text-tertiary)]`, `border-l-2 border-transparent`, `pl-3` | `text-[var(--text-primary)]`, `border-l-2 border-[var(--border-active)]` | `outline: 2px solid var(--accent)`, `outline-offset: 2px` | `text-[var(--text-primary)]` | `text-[var(--accent)]`, `border-l-2 border-[var(--accent)]`, `font-semibold` |
| **Mobile Menu Trigger** | `bg-[var(--glass-bg)]`, `border-[var(--glass-border)]`, `text-[var(--text-primary)]` | `bg-[var(--glass-bg-elevated)]`, `border-[var(--border-active)]` | `outline: 2px solid var(--accent)`, `outline-offset: 2px` | `scale(0.95)` | `aria-expanded="true"` (icon swaps to `X`) |
| **Gallery Images** | `border-[var(--glass-border)]`, `bg-[var(--bg-surface)]` | `border-[var(--border-active)]`, `box-shadow: var(--shadow-hover)` | `outline: 2px solid var(--accent)`, `outline-offset: 4px` | `scale(0.98)` | N/A |

### Currently Missing States in Codebase & Fix Protocol
1. **Filter Chips (`WorkGrid`)**: Currently missing explicit `:focus-visible` outline rules.
   - *Fix*: Add `focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2` to all filter button templates in `home-content.tsx` and `app/work/page.tsx`.
2. **Table of Contents Links (`ProjectToc.tsx`)**: Missing `aria-current="true"` on the active TOC item.
   - *Fix*: Add `aria-current={activeId === section.id ? "location" : undefined}` to TOC anchor items.
3. **Nav Links (`SiteHeader.tsx`)**: Missing active page indicator for subpages like `/resume` or `/work`.
   - *Fix*: Match `pathname === link.href` and apply `text-[var(--text-primary)] font-bold aria-current="page"`.

---

## 7. Motion & Accessibility Principles

### Reveal Animation Engine (`.reveal`)
The site uses an IntersectionObserver pattern in `home-content.tsx` targeting `.reveal`:
```css
.reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1),
              opacity 600ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
```

### Micro-Interaction Timing Rules
- **Hover Transitions**: `180ms cubic-bezier(0.4, 0, 0.2, 1)` for color, background, and shadow changes.
- **Button Press Feedback (`:active`)**: `120ms cubic-bezier(0.4, 0, 0.2, 1)` with `transform: scale(0.97)`.
- **Content Access Bar**: Motion MUST NEVER delay content access. All initial fold content loads instantly; scroll reveals trigger when element is within `80px` of viewport bottom.

### User Preference Overrides (`globals.css`)

#### 1. Reduced Motion (`prefers-reduced-motion: reduce`)
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }

  .reveal {
    opacity: 1 !important;
    transform: none !important;
  }

  .marquee-content {
    animation: none !important;
  }

  .bg-blooms::before, .bg-blooms::after, .bg-blooms > span {
    animation: none !important;
  }
}
```

#### 2. Reduced Transparency (`prefers-reduced-transparency: reduce`)
```css
@media (prefers-reduced-transparency: reduce) {
  .glass-panel, .modern-card, .nav-pill, .nav-blur, .hero-badge, .cta-button, .tech-badge {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    background-color: var(--bg-surface-elevated) !important;
    border-color: var(--border-muted) !important;
  }
}
```

---

## 8. Responsive Design Grid & Breakpoint Matrix

| Element / Viewport | 390px (Mobile Portrait) | 768px (Tablet Portrait) | 1024px (Tablet Landscape) | 1440px (Desktop Large) |
|---|---|---|---|---|
| **Header Navigation** | Compact logo + Hamburger trigger. Drawer opens overlay full-width. | Logo + inline text links (`Work`, `Capabilities`, `Process`, `About`, `Résumé`) + `"Let's Talk"` CTA button. | Logo + inline links + GitHub icon + `"Let's Talk"` CTA button. | Max-width 1280px centered nav pill, generous link spacing (`gap-10`). |
| **Hero Section** | Single column. `pt-32`. Headline 56px (`text-display-hero`). Status badge top. Ecosystem diagram hidden. | Single column. `pt-36`. Headline 88px. Ecosystem diagram hidden. | 12-column grid (`7/5` split). Left: text & CTAs. Right: `ArchitectureDiagram`. | 12-column grid (`7/5` split). Max-width 1280px centered. |
| **Hero Capability Markers** | Wrapped vertical pill list (`flex-col sm:flex-row`). | Horizontal flex wrap row (`gap-3`). | Horizontal flex wrap row inside left hero column. | Horizontal flex wrap row inside left hero column. |
| **Résumé Page** | Single column container (`px-4`). Header stacked vertically. Action buttons full-width stacked. | 2-column header layout (Name/Title left, PDF/Call buttons right). | Max-width 4xl (`896px`). Clean 2-column skills grid. | Max-width 4xl centered. High contrast reading density. |
| **Case Study Page (TOC & Layout)** | TOC rendered as collapsible top Accordion control. Single column content. | Collapsible top Accordion control. 2-column feature cards. | Sticky left TOC sidebar (`w-64`). Right column case study content. | Sticky left TOC sidebar (`w-72`). 1280px max container. |
| **Case Study Gallery** | Single column stacked (`aspect-video` or `aspect-[9/19]`). | 2-column grid. | 2 to 3 column grid depending on phone/desktop aspect. | 3-column grid max width gallery. |

---

## 9. Accessibility Specifications & Contrast Calculations

### Keyboard Focus Visibility
- Universal focus rule in `globals.css`:
  ```css
  :where(a, button, input, textarea, select, [tabindex]):focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }
  ```

### ARIA Semantics Inventory
- Navigation: `<nav aria-label="Main navigation">`
- Mobile Menu Button: `<button type="button" aria-label="Open navigation menu" aria-expanded={isMenuOpen} aria-controls="mobile-menu">`
- Filter Chips: `<div role="tablist" aria-label="Project category filters">` with `<button role="tab" aria-selected={activeFilter === filter}>`
- TOC Sidebar: `<nav aria-label="Table of contents">` with `aria-current="location"` on active link.
- Icons: Decorative icons MUST include `aria-hidden="true"`. Interactive icon-only buttons MUST include `aria-label`.

### Quantitative Color Contrast Matrix (Calculated against `--bg-page` `#08080a`)

| Color Token | Hex / Value | Contrast Ratio vs `#08080a` | WCAG 2.1 Level Compliance | Intended Application |
|---|---|---|---|---|
| `--text-primary` | `#f5f5f7` | **18.2 : 1** | **AAA Pass** | Headlines, primary body text, active state text |
| `--text-secondary` | `#8e8e93` | **5.1 : 1** | **AA Pass** | Descriptions, subheadings, metadata text |
| `--accent` | `#2f80ed` | **4.8 : 1** | **AA Pass** (Normal & Large Text) | Primary CTA background, active borders, link highlights |
| `--text-tertiary` | `#515156` | **2.6 : 1** | *Fail for Body Text* | Restricted to uppercase captions (`.text-caption` 12px font-weight 600) & decorative metadata ONLY |
| `--glass-bg-elevated` | `rgba(255,255,255,0.13)` | N/A (Surface Fills) | **Pass** | Card background fills |

### Touch Target Minimum Enforcement
- All interactive targets (`<a>`, `<button>`) must meet minimum touch dimensions of **44 × 44px**.
- Tailwind class enforcement: `min-h-11 min-w-11` (44px × 44px) applied to all buttons, nav items, filter chips, and icon triggers.

---

## Real Content Preservation Rules
- **No Invented Copy**: Never invent metrics, client quotes, or company names.
- **Content Placeholder Marker**: Where factual content is pending client sign-off, use the literal marker:
  `OWNER-COPY-NEEDED: [Detailed description of structural content required]`
