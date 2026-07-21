"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import {
  ThemePreference,
  ResolvedTheme,
  getStoredPreference,
  storePreference,
  getSystemTheme,
  resolveTheme,
} from "@/lib/theme";

interface ThemeContextValue {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setPreference: (preference: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function updateMetaThemeColor(theme: ResolvedTheme) {
  if (typeof document === "undefined") return;
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

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(() => {
    if (typeof window !== "undefined") {
      return getStoredPreference();
    }
    return "system";
  });

  const [resolvedTheme, setResolvedThemeState] = useState<ResolvedTheme>(() => {
    if (typeof document !== "undefined") {
      const attr = document.documentElement.getAttribute("data-theme");
      if (attr === "light" || attr === "dark") return attr;
    }
    if (typeof window !== "undefined") {
      return resolveTheme(getStoredPreference());
    }
    return "dark";
  });

  useEffect(() => {
    applyThemeToDocument(resolvedTheme);
  }, [resolvedTheme]);

  const setPreference = useCallback((pref: ThemePreference) => {
    storePreference(pref);
    const nextResolved = resolveTheme(pref);
    applyThemeToDocument(nextResolved);
    setPreferenceState(pref);
    setResolvedThemeState(nextResolved);
  }, []);

  useEffect(() => {
    if (preference !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const nextResolved = getSystemTheme();
      applyThemeToDocument(nextResolved);
      setResolvedThemeState(nextResolved);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [preference]);

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
