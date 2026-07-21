# Theme System Documentation

This document describes the design architecture, state resolution, FOUC prevention, persistence mechanism, and component styling guidelines for the portfolio theme system.

---

## 1. Architecture Overview

### Why CSS Variables + `[data-theme]` over Tailwind `dark:` classes
The entire codebase routes 100% of its visual color hierarchy through standard CSS custom properties (`var(--bg-page)`, `var(--text-primary)`, `var(--accent)`, etc.) defined in `src/app/globals.css`. 

Instead of adding duplicate Tailwind `dark:` utility classes across hundreds of elements, the system switches themes globally by altering the `data-theme` attribute on the root `<html>` element:
- Default (`:root`): Refined Dark Architecture (`data-theme="dark"` or unsetAttribute)
- Light theme (`[data-theme="light"]`): Refined Light Architecture

When `data-theme="light"` is set on `<html>`, all CSS variable tokens instantly update across the application without needing component-level re-renders or complex conditional styling rules.

---

## 2. Theme Resolution & System Mode

### Theme Preferences vs. Resolved Themes
- `ThemePreference`: `"light" | "dark" | "system"` (what the user chose)
- `ResolvedTheme`: `"light" | "dark"` (what is actively applied to the page)

### How System Mode Works
- When `preference === "system"`, the active theme is determined live by `window.matchMedia("(prefers-color-scheme: dark)")`.
- A media query listener is attached while `preference === "system"`. When the OS color scheme changes, `resolvedTheme` updates dynamically and `data-theme` is re-applied without modifying `localStorage` (`preference` remains `"system"`).
- When `preference` is explicitly set to `"light"` or `"dark"`, the media query listener is removed so OS-level changes do not override explicit user preferences.

---

## 3. Persistence Mechanism

- User preferences are persisted in `localStorage` under the key `portfolio-theme` (`THEME_STORAGE_KEY`).
- Reads and writes are safely guarded for SSR / private browsing / blocked storage scenarios using fallback logic in `src/lib/theme.ts`:
  - `getStoredPreference()`: Returns stored preference or `"system"` if storage is unavailable.
  - `storePreference(pref)`: Writes preference to `localStorage`, failing silently if blocked.

---

## 4. FOUC Prevention Strategy

Flash of Unstyled Content (FOUC) is prevented via a multi-tiered hydration strategy:

1. **Pre-Hydration Inline Script (`THEME_INIT_SCRIPT`)**:
   Injected into `<head>` inside `src/app/layout.tsx`. It runs synchronously before the body renders, reading `localStorage` and `matchMedia`, and sets `data-theme` and `style.colorScheme` on `document.documentElement` before first paint.
2. **Transition Suppression (`.theme-resolving`)**:
   During initial script execution, `theme-resolving` is added to `documentElement` to suppress CSS background/color transitions on initial load, preventing an unwanted fade animation during first paint.
3. **SSR Hydration Guard (`suppressHydrationWarning`)**:
   `html` in `layout.tsx` includes `suppressHydrationWarning` to avoid React hydration errors caused by the pre-hydration `data-theme` mutation.
4. **React Context Sync (`ThemeProvider`)**:
   On mount, `ThemeProvider` reads the pre-applied `data-theme` attribute from `document.documentElement` and matches its initial state to the painted DOM, ensuring 0% visual flash and 0% state mismatch.

---

## 5. Token Reference Table

| Token Name | Dark Value | Light Value | Usage / Description |
| :--- | :--- | :--- | :--- |
| `--bg-page` | `#08080a` | `#f6f6f8` | Primary page background |
| `--bg-surface` | `#0e0e12` | `#ffffff` | Card and surface container background |
| `--bg-surface-elevated` | `#16161f` | `#fcfcfd` | Elevated modal or dropdown surface background |
| `--border-subtle` | `rgba(255, 255, 255, 0.03)` | `rgba(15, 15, 20, 0.05)` | Subtle layout dividers |
| `--border-muted` | `rgba(255, 255, 255, 0.08)` | `rgba(15, 15, 20, 0.1)` | Standard component border |
| `--border-active` | `rgba(255, 255, 255, 0.16)` | `rgba(15, 15, 20, 0.18)` | Hover / active state border |
| `--text-primary` | `#f5f5f7` | `#14141a` | High-contrast headings and primary text |
| `--text-secondary` | `#8e8e93` | `#52525b` | Secondary body text and labels |
| `--text-tertiary` | `#515156` | `#6b6b76` | Captions and muted metadata |
| `--accent` | `#2f80ed` | `#1f6feb` | Brand accent color (Steel Blue) |
| `--accent-dim` | `rgba(47, 128, 237, 0.1)` | `rgba(31, 111, 235, 0.08)` | Low-opacity accent tint background |
| `--accent-glow` | `rgba(47, 128, 237, 0.04)` | `rgba(31, 111, 235, 0.1)` | Ambient glow effect |
| `--glass-bg` | `rgba(255, 255, 255, 0.08)` | `rgba(255, 255, 255, 0.6)` | Glassmorphism base material |
| `--glass-bg-elevated` | `rgba(255, 255, 255, 0.13)` | `rgba(255, 255, 255, 0.82)` | Glassmorphism hover / elevated material |
| `--glass-border` | `rgba(255, 255, 255, 0.14)` | `rgba(15, 15, 20, 0.1)` | Glass surface outline border |
| `--glass-border-bright` | `rgba(255, 255, 255, 0.35)` | `rgba(15, 15, 20, 0.16)` | Highlight border on glass elements |

---

## 6. How to Build New Components Correctly

When creating or modifying components in this codebase:

1. **ALWAYS use CSS variables** via Tailwind arbitrary-value syntax (e.g. `bg-[var(--bg-surface)]`, `text-[var(--text-primary)]`, `border-[var(--glass-border)]`).
2. **Use pre-defined utility classes** where applicable:
   - `.glass-panel` for glass container surfaces
   - `.modern-card` for interactive hoverable card elements
   - `.nav-pill` for pill navigation bars
   - `.cta-button` for CTA elements
3. **NEVER use hardcoded Tailwind color utilities** like `bg-white`, `bg-black`, `text-gray-500`, `border-slate-800`, or raw hex colors (`#000`, `#fff`). Doing so will cause dark/light mode visual leaks.
