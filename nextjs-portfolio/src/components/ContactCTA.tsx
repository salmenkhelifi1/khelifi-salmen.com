import { bookingUrl } from "@/data/schema";
import SectionContainer from "./SectionContainer";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 md:py-40 border-t border-[var(--border-subtle)]"
    >
      {/* Controlled ambient background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,128,237,0.15)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <SectionContainer>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="reveal mb-6 text-h2 md:text-h1">
            Have a product, workflow, or platform that needs to be built?
          </h2>

          <p className="reveal mb-10 text-body-large text-[var(--text-secondary)]">
            Tell me what you are trying to improve, automate, or launch. I will help define the right product and technical approach.
          </p>

          <div className="reveal flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <PrimaryButton
              href={bookingUrl}
              className="w-full sm:w-auto min-h-11"
            >
              Start a Project
            </PrimaryButton>
            <SecondaryButton
              href={bookingUrl}
              className="w-full sm:w-auto min-h-11"
            >
              Book a Call
            </SecondaryButton>
            <SecondaryButton
              href="mailto:hello@khelifi-salmen.com"
              className="w-full sm:w-auto min-h-11"
            >
              Email Me
            </SecondaryButton>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
