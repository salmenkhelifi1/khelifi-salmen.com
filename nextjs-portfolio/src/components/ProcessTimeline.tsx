import { processSteps } from "@/data/homepage";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 py-24 md:py-32"
    >
      <SectionContainer>
        <SectionHeading className="mb-16 text-center">How I Work</SectionHeading>

        <div className="relative">
          {/* Desktop horizontal connector line */}
          <div
            className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-[var(--border-active)]"
            aria-hidden="true"
          />

          {/* Mobile vertical connector line */}
          <div
            className="lg:hidden absolute left-6 top-6 bottom-6 w-[2px] bg-[var(--border-active)]"
            aria-hidden="true"
          />

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative pl-16 lg:pl-0 reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Step Circle Node */}
                <div className="absolute left-0 top-0 lg:relative lg:mb-8 flex h-12 w-12 items-center justify-center rounded-full glass-panel border border-[var(--glass-border-bright)] bg-[var(--bg-surface-elevated)] font-mono text-sm font-bold text-[var(--accent)] shadow-md">
                  {step.number}
                </div>

                <h3 className="mb-4 text-h3 font-semibold text-[var(--text-primary)]">
                  {step.title}
                </h3>

                <div className="space-y-3">
                  <div>
                    <p className="text-caption text-[var(--text-tertiary)] mb-1 font-semibold">
                      What I do
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {step.whatIDo}
                    </p>
                  </div>
                  <div>
                    <p className="text-caption text-[var(--accent)] mb-1 font-semibold">
                      What you get
                    </p>
                    <p className="text-sm font-medium leading-relaxed text-[var(--text-primary)]">
                      {step.whatYouGet}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
