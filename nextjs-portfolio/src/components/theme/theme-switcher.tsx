"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { ThemePreference } from "@/lib/theme";
import { useTheme } from "./theme-provider";

const themeOptions: {
  value: ThemePreference;
  label: string;
  icon: typeof Sun;
}[] = [
  { value: "light", label: "Light theme", icon: Sun },
  { value: "dark", label: "Dark theme", icon: Moon },
  { value: "system", label: "System theme", icon: Monitor },
];

export function ThemeSwitcher() {
  const { preference, setPreference } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className="inline-flex items-center gap-1 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] p-1 backdrop-blur-xl"
    >
      {themeOptions.map(({ value, label, icon: Icon }) => {
        const isChecked = preference === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={isChecked}
            aria-label={label}
            title={label}
            onClick={() => setPreference(value)}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors ${
              isChecked
                ? "bg-[var(--glass-bg-elevated)] text-[var(--accent)] border border-[var(--glass-border-bright)]"
                : "text-[var(--text-secondary)] hover:bg-[var(--glass-bg-elevated)] hover:text-[var(--text-primary)]"
            }`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}

export default ThemeSwitcher;
