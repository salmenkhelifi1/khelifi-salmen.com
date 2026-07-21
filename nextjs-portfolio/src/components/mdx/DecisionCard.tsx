import React from "react";
import { Zap, CheckCircle2 } from "lucide-react";

interface DecisionCardProps {
  title?: string;
  subtitle?: string;
  problem: string;
  decision?: string;
  solution?: string;
  result: string;
}

export default function DecisionCard({
  title,
  subtitle,
  problem,
  decision,
  solution,
  result,
}: DecisionCardProps) {
  const decisionText = decision || solution || "";

  return (
    <div className="challenge-flow-card my-6">
      <div className="flex items-center justify-between mb-4 border-b border-[var(--border-subtle)] pb-3">
        <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider font-mono">
          {title || "Engineering Story"}
        </span>
        {subtitle && (
          <span className="text-xs font-semibold text-[var(--text-tertiary)]">
            {subtitle}
          </span>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 items-start">
        {/* Problem */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-400" aria-hidden="true" />
            Problem / Constraint
          </div>
          <p className="text-sm font-bold text-[var(--text-primary)]">
            {problem}
          </p>
        </div>

        {/* Decision / Solution */}
        <div className="space-y-2 lg:border-l lg:border-[var(--border-subtle)] lg:pl-6">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" aria-hidden="true" />
            Architectural Decision
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            {decisionText}
          </p>
        </div>

        {/* Result */}
        <div className="space-y-2 lg:border-l lg:border-[var(--border-subtle)] lg:pl-6">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
            Architectural Outcome
          </div>
          <p className="text-xs font-semibold text-emerald-400/90 leading-relaxed bg-emerald-950/30 border border-emerald-800/40 rounded-xl p-3">
            {result}
          </p>
        </div>
      </div>
    </div>
  );
}
