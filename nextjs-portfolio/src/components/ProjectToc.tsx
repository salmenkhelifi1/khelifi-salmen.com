"use client";

import { useState, useEffect } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";

export type TocSection = {
  id: string;
  label: string;
};

interface ProjectTocProps {
  sections: TocSection[];
}

export default function ProjectToc({ sections }: ProjectTocProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <aside className="w-full lg:w-64 lg:shrink-0">
      {/* Mobile Collapsible TOC */}
      <div className="lg:hidden mb-8">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-toc-list"
          className="flex w-full min-h-11 items-center justify-between gap-2 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] backdrop-blur-xl transition-colors hover:border-[var(--border-active)] hover:bg-[var(--glass-bg-elevated)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
        >
          <span className="flex items-center gap-2">
            <List className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
            Table of Contents
          </span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-[var(--text-secondary)]" aria-hidden="true" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[var(--text-secondary)]" aria-hidden="true" />
          )}
        </button>

        {isOpen && (
          <nav
            id="mobile-toc-list"
            className="mt-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-surface-elevated)] p-4 shadow-[var(--glass-shadow)]"
            aria-label="Mobile table of contents"
          >
            <ul className="space-y-1">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block min-h-11 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] ${
                      activeId === sec.id
                        ? "bg-[var(--accent-dim)] text-[var(--accent)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--glass-bg)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {sec.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <nav
        className="hidden lg:block sticky top-28 p-5 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)]"
        aria-label="Table of contents"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[var(--border-subtle)] text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
          <List className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
          On this page
        </div>
        <ul className="space-y-1 text-sm">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={`group flex items-center min-h-9 gap-2.5 rounded-lg px-3 py-1.5 transition-all focus-visible:outline-2 focus-visible:outline-[var(--accent)] ${
                  activeId === sec.id
                    ? "bg-[var(--accent-dim)] font-semibold text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--glass-bg)] hover:text-[var(--text-primary)]"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    activeId === sec.id ? "bg-[var(--accent)]" : "bg-transparent group-hover:bg-[var(--border-active)]"
                  }`}
                  aria-hidden="true"
                />
                {sec.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
