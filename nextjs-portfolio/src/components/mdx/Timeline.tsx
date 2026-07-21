import React from "react";

export type TimelineItem = {
  number?: string;
  title: string;
  subtitle?: string;
  description: string;
  result?: string;
};

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="my-8 relative pl-6 border-l-2 border-[var(--border-active)] space-y-8">
      {items.map((step, index) => {
        const stepNum = step.number || `0${index + 1}`;
        return (
          <div key={step.title} className="relative">
            {/* Step Node */}
            <div className="absolute -left-[31px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--glass-border-bright)] bg-[var(--bg-surface-elevated)] font-mono text-xs font-bold text-[var(--accent)] shadow-sm">
              {stepNum}
            </div>

            <div className="space-y-1.5 pl-4">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-[var(--text-primary)]">
                  {step.title}
                </h4>
                {step.subtitle && (
                  <span className="text-xs font-mono text-[var(--text-tertiary)]">
                    • {step.subtitle}
                  </span>
                )}
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {step.description}
              </p>
              {step.result && (
                <div className="text-xs font-semibold text-[var(--accent)]">
                  {step.result}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
