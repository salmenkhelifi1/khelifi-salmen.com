import React from "react";
import { Info, AlertTriangle, CheckCircle2 } from "lucide-react";

export type CalloutVariant = "info" | "warning" | "success";

interface CalloutProps {
  variant?: CalloutVariant;
  icon?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
}

const variantStyles: Record<
  CalloutVariant,
  { container: string; iconColor: string; defaultIcon: React.ReactNode }
> = {
  info: {
    container: "border-[var(--accent)]/30 bg-[var(--accent-dim)]/20",
    iconColor: "text-[var(--accent)]",
    defaultIcon: <Info className="w-5 h-5" aria-hidden="true" />,
  },
  warning: {
    container: "border-amber-500/30 bg-amber-950/20",
    iconColor: "text-amber-400",
    defaultIcon: <AlertTriangle className="w-5 h-5" aria-hidden="true" />,
  },
  success: {
    container: "border-emerald-500/30 bg-emerald-950/20",
    iconColor: "text-emerald-400",
    defaultIcon: <CheckCircle2 className="w-5 h-5" aria-hidden="true" />,
  },
};

export default function Callout({
  variant = "info",
  icon,
  title,
  children,
}: CalloutProps) {
  const styles = variantStyles[variant] || variantStyles.info;

  return (
    <div
      className={`my-6 rounded-2xl border p-5 glass-panel ${styles.container}`}
    >
      <div className="flex items-start gap-3.5">
        <div className={`mt-0.5 shrink-0 ${styles.iconColor}`}>
          {icon || styles.defaultIcon}
        </div>
        <div className="flex-1 min-w-0 space-y-1">
          {title && (
            <h4 className="text-sm font-bold text-[var(--text-primary)]">
              {title}
            </h4>
          )}
          <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
