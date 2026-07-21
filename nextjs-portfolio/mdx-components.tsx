import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-8 mb-4 text-h1 text-[var(--text-primary)]">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-4 text-h2 text-[var(--text-primary)]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-3 text-h3 text-[var(--text-primary)]">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-body-regular text-[var(--text-secondary)] leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc text-body-regular text-[var(--text-secondary)] space-y-1">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal text-body-regular text-[var(--text-secondary)] space-y-1">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-[var(--accent)] pl-4 italic text-[var(--text-secondary)] bg-[var(--accent-glow)] py-2 pr-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-[var(--bg-surface-elevated)] px-1.5 py-0.5 font-mono text-sm text-[var(--text-primary)] border border-[var(--border-muted)]">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-6 overflow-x-auto rounded-xl border border-[var(--glass-border)] bg-[var(--bg-surface)] p-4 font-mono text-sm text-[var(--text-primary)]">
        {children}
      </pre>
    ),
    hr: () => <hr className="my-8 border-[var(--border-subtle)]" />,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[var(--accent)] underline underline-offset-4 hover:opacity-80 transition-opacity"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    ...components,
  };
}
