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
                className="relative pl-16 lg:pl-0 reveal flex flex-col justify-between"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div>
                  {/* Step Circle Node */}
                  <div className="absolute left-0 top-0 lg:relative lg:mb-8 flex h-12 w-12 items-center justify-center rounded-full glass-panel border border-[var(--glass-border-bright)] bg-[var(--bg-surface-elevated)] font-mono text-sm font-bold text-[var(--accent)] shadow-md">
                    {step.number}
                  </div>

                  <h3 className="mb-4 text-h3 font-semibold text-[var(--text-primary)]">
                    {step.title}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-caption font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-1">
                        Client Concern
                      </p>
                      <p className="text-sm italic leading-relaxed text-[var(--text-secondary)]">
                        &ldquo;{step.concern}&rdquo;
                      </p>
                    </div>

                    <div>
                      <p className="text-caption font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-1">
                        Key Activity
                      </p>
                      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                        {step.activity}
                      </p>
                    </div>

                    <div>
                      <p className="text-caption font-semibold text-[var(--accent)] uppercase tracking-wider mb-1">
                        Deliverable
                      </p>
                      <p className="text-sm font-medium leading-relaxed text-[var(--text-primary)]">
                        {step.deliverable}
                      </p>
                    </div>
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
