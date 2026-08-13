/**
 * Delivery state of a single phase.
 *
 * `shipped` and `building` describe work that exists. `next` and `blocked`
 * describe work that does not — they must never be styled to read as done.
 */
export type BuildPhaseStatus = "shipped" | "building" | "next" | "blocked";

export type BuildPhase = {
  /** Human date range, e.g. "10-12 Jul 2026" or "Q4 2026". */
  date: string;
  title: string;
  status: BuildPhaseStatus;
  /** One line of context above the bullets. Optional. */
  summary?: string;
  items: string[];
  /**
   * The measurable condition that closes this phase. Renders as a distinct
   * row so a reader can tell a promise from a proof.
   */
  gate?: string;
};

const statusLabel: Record<BuildPhaseStatus, string> = {
  shipped: "Shipped",
  building: "Building",
  next: "Next",
  blocked: "Blocked",
};

const statusChip: Record<BuildPhaseStatus, string> = {
  shipped:
    "bg-[var(--color-success-dim)] text-[var(--color-success)] border-transparent",
  building:
    "bg-[var(--color-warning-dim)] text-[var(--color-warning)] border-transparent",
  next: "bg-[var(--bg-surface-elevated)] text-[var(--text-tertiary)] border-[var(--border-muted)]",
  blocked:
    "bg-transparent text-[var(--text-tertiary)] border-[var(--border-muted)] border-dashed",
};

const statusNode: Record<BuildPhaseStatus, string> = {
  shipped: "bg-[var(--color-success)]",
  building: "bg-[var(--accent)] ring-4 ring-[var(--accent-glow)]",
  next: "bg-[var(--bg-surface)] border border-[var(--text-tertiary)]",
  blocked: "bg-[var(--bg-surface)] border border-dashed border-[var(--text-tertiary)]",
};

interface BuildLogProps {
  phases: BuildPhase[];
  /** Optional line above the timeline, e.g. "Six phases, 10 July to 10 August 2026." */
  caption?: string;
}

/**
 * A dated delivery timeline: what was built, when, and what is still a plan.
 *
 * Works for three shapes of project and the only thing that changes is which
 * statuses appear — pre-launch work is mostly `shipped` plus `next` with
 * gates, a launched product reads as release history, and client work reads
 * as delivery phases. Keep future phases honest: give them a gate, not a
 * completion.
 */
export default function BuildLog({ phases, caption }: BuildLogProps) {
  if (!phases || phases.length === 0) return null;

  return (
    <div className="my-8">
      {caption && (
        <p className="mb-5 font-mono text-xs text-[var(--text-tertiary)]">
          {caption}
        </p>
      )}

      <ol className="space-y-0">
        {phases.map((phase, index) => {
          const isLast = index === phases.length - 1;
          const unbuilt = phase.status === "next" || phase.status === "blocked";

          return (
            <li
              key={`${phase.date}-${phase.title}`}
              className="grid grid-cols-[1.25rem_1fr] gap-x-4 sm:grid-cols-[6.5rem_1.25rem_1fr] sm:gap-x-4"
            >
              {/* Date — left column on desktop, above the title on mobile */}
              <div className="col-start-2 row-start-1 pb-1 font-mono text-[0.7rem] tracking-wide text-[var(--text-tertiary)] sm:col-start-1 sm:pb-0 sm:pt-1 sm:text-right">
                {phase.date}
              </div>

              {/* Rail */}
              <div className="col-start-1 row-start-1 row-span-2 flex justify-center sm:col-start-2 sm:row-span-1">
                <div className="relative flex w-full justify-center">
                  <span
                    aria-hidden="true"
                    className={`absolute top-3 h-full w-px ${
                      isLast
                        ? "hidden"
                        : unbuilt
                          ? "bg-gradient-to-b from-[var(--border-muted)] to-transparent"
                          : "bg-[var(--border-active)]"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`relative mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${statusNode[phase.status]}`}
                  />
                </div>
              </div>

              {/* Body */}
              <div className="col-start-2 row-start-2 pb-7 sm:col-start-3 sm:row-start-1">
                <div className="mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">
                    {phase.title}
                  </h4>
                  <span
                    className={`rounded border px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider ${statusChip[phase.status]}`}
                  >
                    {statusLabel[phase.status]}
                  </span>
                </div>

                {phase.summary && (
                  <p className="mb-2 text-xs italic leading-relaxed text-[var(--text-tertiary)]">
                    {phase.summary}
                  </p>
                )}

                <ul className="ml-4 list-disc space-y-1 text-xs leading-relaxed text-[var(--text-secondary)] marker:text-[var(--text-tertiary)]">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {phase.gate && (
                  <p className="mt-2.5 border-l-2 border-[var(--accent)] pl-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                    <span className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--accent)]">
                      Gate
                    </span>{" "}
                    {phase.gate}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
