"use client";

import React, { createContext, useContext, useEffect, useCallback, useSyncExternalStore } from "react";
import {
  ThemePreference,
  ResolvedTheme,
  THEME_STORAGE_KEY,
  getStoredPreference,
  storePreference,
  getSystemTheme,
} from "@/lib/theme";

interface ThemeContextValue {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setPreference: (preference: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function updateMetaThemeColor(theme: ResolvedTheme) {
  if (typeof document === "undefined") return;
  // Must match --bg-page in globals.css for both themes — keep in sync.
  const color = theme === "dark" ? "#08080a" : "#f6f6f8";
  let meta = document.querySelector<HTMLMetaElement>('meta[data-dynamic-theme-color="true"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.setAttribute("data-dynamic-theme-color", "true");
    document.head.appendChild(meta);
  }
  meta.content = color;
}

function applyThemeToDocument(resolved: ResolvedTheme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", resolved);
  document.documentElement.style.colorScheme = resolved;
  updateMetaThemeColor(resolved);
}

/*
 * Reading localStorage / matchMedia safely across server and client is
 * exactly what useSyncExternalStore exists for: it returns a fixed
 * "server snapshot" during SSR and the client's first hydration pass (so
 * server and client output match — no hydration mismatch), then re-renders
 * with the live value immediately after, and re-subscribes to future
 * changes. Rolling this by hand with useState + useEffect either mismatches
 * on hydration or trips the react-hooks/set-state-in-effect rule; this is
 * the primitive React shipped specifically for this problem.
 */

// --- External store: the saved preference (localStorage) -----------------
// The native `storage` event only fires in OTHER tabs, not the one that
// made the change — this local listener set covers same-tab updates from
// setPreference() below, so the two together give correct multi-tab sync.
const preferenceListeners = new Set<() => void>();

function subscribeToPreference(callback: () => void) {
  preferenceListeners.add(callback);
  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY) callback();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    preferenceListeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

function notifyPreferenceListeners() {
  preferenceListeners.forEach((callback) => callback());
}

function getPreferenceServerSnapshot(): ThemePreference {
  return "system";
}

// --- External store: the OS color-scheme media query ----------------------
function subscribeToSystemTheme(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSystemThemeServerSnapshot(): ResolvedTheme {
  return "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const preference = useSyncExternalStore(
    subscribeToPreference,
    getStoredPreference,
    getPreferenceServerSnapshot
  );

  const systemTheme = useSyncExternalStore(
    subscribeToSystemTheme,
    getSystemTheme,
    getSystemThemeServerSnapshot
  );

  const resolvedTheme: ResolvedTheme = preference === "system" ? systemTheme : preference;

  // Keep the DOM (data-theme, color-scheme, dynamic meta theme-color) in
  // sync with the resolved theme. The pre-hydration script in layout.tsx
  // already applied the correct value before first paint, so this is a
  // no-op on a typical first render — it's what actually applies the
  // change when the user picks a different theme or the OS preference
  // changes live.
  useEffect(() => {
    applyThemeToDocument(resolvedTheme);
  }, [resolvedTheme]);

  const setPreference = useCallback((pref: ThemePreference) => {
    storePreference(pref);
    notifyPreferenceListeners();
  }, []);

  return (
    <ThemeContext.Provider value={{ preference, resolvedTheme, setPreference }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
