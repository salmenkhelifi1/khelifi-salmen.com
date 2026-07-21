import React from "react";
import { Cpu, Layers, Database, Server, ShieldCheck, Zap } from "lucide-react";

export type ArchItem = {
  name: string;
  tech: string;
  role: string;
  type?: "api" | "db" | "queue" | "ui" | "security" | "core";
};

interface MdxArchitectureNoteProps {
  title?: string;
  subtitle?: string;
  components?: ArchItem[];
  children?: React.ReactNode;
}

function getIcon(type?: string) {
  switch (type) {
    case "db":
      return <Database className="w-5 h-5 text-[var(--accent)]" />;
    case "queue":
      return <Cpu className="w-5 h-5 text-[var(--accent)]" />;
    case "security":
      return <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />;
    case "ui":
      return <Layers className="w-5 h-5 text-[var(--accent)]" />;
    case "api":
      return <Server className="w-5 h-5 text-[var(--accent)]" />;
    default:
      return <Zap className="w-5 h-5 text-[var(--accent)]" />;
  }
}

export default function MdxArchitectureNote({
  title = "Architecture Overview",
  subtitle = "Static Component Topology",
  components,
  children,
}: MdxArchitectureNoteProps) {
  return (
    <div className="my-8 modern-card rounded-[var(--radius-xl)] p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-h3 text-[var(--text-primary)]">{title}</h3>
        {subtitle && (
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mt-1">
            {subtitle}
          </p>
        )}
      </div>

      {components && components.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {components.map((comp) => (
            <div
              key={comp.name}
              className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5 shadow-[var(--glass-shadow)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--glass-border)]">
                  {getIcon(comp.type)}
                </div>
                <h4 className="text-sm font-bold text-[var(--text-primary)]">
                  {comp.name}
                </h4>
              </div>
              <div className="text-xs font-mono font-medium text-[var(--accent)] mb-2">
                {comp.tech}
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {comp.role}
              </p>
            </div>
          ))}
        </div>
      )}

      {children && (
        <div className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-2">
          {children}
        </div>
      )}
    </div>
  );
}
