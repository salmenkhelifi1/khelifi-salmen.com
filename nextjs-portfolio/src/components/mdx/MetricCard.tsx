import React from "react";

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
  trend?: string;
}

export default function MetricCard({
  value,
  label,
  description,
  trend,
}: MetricCardProps) {
  return (
    <div className="modern-card rounded-[var(--radius-xl)] p-6 my-4 text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-[var(--accent)] tracking-tight mb-1">
        {value}
      </div>
      <div className="text-sm font-bold text-[var(--text-primary)] mb-1">
        {label}
      </div>
      {description && (
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          {description}
        </p>
      )}
      {trend && (
        <div className="mt-2 text-xs font-semibold text-emerald-400">
          {trend}
        </div>
      )}
    </div>
  );
}
