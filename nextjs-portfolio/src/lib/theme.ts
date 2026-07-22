/**
 * Single source of truth for theme constants and resolution logic.
 *
 * Two places need this logic and BOTH must stay in sync:
 * 1. THEME_INIT_SCRIPT below — runs as a raw inline <script> in <head>,
 *    before hydration, so it cannot import this module (no bundle has
 *    loaded yet). It's a hand-written mirror of resolveTheme()/
 *    getStoredPreference() — if you change the logic here, update the
 *    string below to match.
 * 2. The ThemeProvider (src/components/theme/theme-provider.tsx), which
 *    imports and calls these functions directly on the client after hydration.
 */

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "portfolio-theme";
export const THEME_PREFERENCES: ThemePreference[] = ["light", "dark", "system"];

export function isThemePreference(value: unknown): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

/** Safe localStorage read: falls back to "system" if unavailable, blocked, or invalid. */
export function getStoredPreference(): ThemePreference {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemePreference(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

/** Safe localStorage write: no-op (never throws) if storage is blocked or unavailable. */
export function storePreference(preference: ThemePreference): void {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    // Storage blocked (private browsing, quota, disabled) — preference still
    // applies for this session via React state, it just won't persist.
  }
}

export function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function resolveTheme(preference: ThemePreference): ResolvedTheme {
  return preference === "system" ? getSystemTheme() : preference;
}

/**
 * Raw source for the pre-hydration inline script. Sets data-theme on <html>
 * synchronously, before first paint, so there is no flash of the wrong theme
 * and no hydration mismatch (suppressHydrationWarning on <html> covers this
 * one attribute). Must be a self-contained string — cannot reference any
 * imported function at runtime, this file only exists to keep the constant
 * (and the documented obligation to keep the logic in sync) in one place.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var k=${JSON.stringify(
  THEME_STORAGE_KEY
)};var s=localStorage.getItem(k);var p=(s==="light"||s==="dark"||s==="system")?s:"system";var r=p==="system"?(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):p;var d=document.documentElement;d.classList.add("theme-resolving");d.setAttribute("data-theme",r);d.style.colorScheme=r;requestAnimationFrame(function(){requestAnimationFrame(function(){d.classList.remove("theme-resolving")})})}catch(e){}})();`;
