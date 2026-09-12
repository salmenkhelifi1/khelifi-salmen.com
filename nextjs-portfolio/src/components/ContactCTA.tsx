"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { bookingUrl } from "@/data/schema";
import SectionContainer from "./SectionContainer";

type FormStatus = "idle" | "error" | "ready";

export default function ContactCTA() {
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) {
      setStatus("error");
      return;
    }

    const data = new FormData(form);
    if (data.get("company")) return;

    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const problem = String(data.get("problem"));
    const budget = String(data.get("budget") || "Not specified");
    const timeline = String(data.get("timeline") || "Not specified");
    const subject = encodeURIComponent(`Project brief from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\nTimeline: ${timeline}\n\nWhat I need help with:\n${problem}`,
    );

    setStatus("ready");
    window.location.href = `mailto:hello@khelifi-salmen.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="contact-section border-t border-[var(--border-subtle)] py-24 md:py-32">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-5">
            <p className="mb-3 text-caption text-[var(--accent)]">Start with context</p>
            <h2 id="contact-heading" className="mb-6 text-h2 md:text-h1">Tell me about your project</h2>
            <p className="mb-8 text-body-large text-[var(--text-secondary)]">
              Share the problem, current situation, and what a useful outcome looks like. The form prepares an email in your own mail app, so you can review it before sending.
            </p>

            <div className="contact-alternative">
              <p className="font-semibold text-[var(--text-primary)]">Prefer a conversation first?</p>
              <a
                href={bookingUrl}
                data-cal-namespace="30min"
                data-cal-link="salmen-khelifi/30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="project-link mt-2 inline-flex min-h-11 items-center font-semibold text-[var(--text-secondary)]"
              >
                Book a 30-minute call <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <form className="project-brief reveal lg:col-span-7" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field">
                <span>Name <span aria-hidden="true">*</span></span>
                <input name="name" autoComplete="name" required />
              </label>
              <label className="form-field">
                <span>Email <span aria-hidden="true">*</span></span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>

            <label className="form-field mt-5">
              <span>What do you need help with? <span aria-hidden="true">*</span></span>
              <textarea name="problem" rows={5} minLength={20} required placeholder="The product, workflow, or system you want to build or improve…" />
            </label>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="form-field">
                <span>Budget <span className="form-optional">Optional</span></span>
                <select name="budget" defaultValue="">
                  <option value="">Select a range</option>
                  <option>Under $2,000</option>
                  <option>$2,000–$5,000</option>
                  <option>$5,000–$10,000</option>
                  <option>$10,000+</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="form-field">
                <span>Timeline <span className="form-optional">Optional</span></span>
                <input name="timeline" placeholder="For example: within 6 weeks" />
              </label>
            </div>

            <label className="form-honeypot" aria-hidden="true">
              Company website
              <input name="company" tabIndex={-1} autoComplete="off" />
            </label>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button type="submit" className="cta-button cta-primary">
                Prepare project email <Mail className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="text-sm text-[var(--text-secondary)]" aria-live="polite">
                {status === "error" && "Please complete the required fields and use a valid email address."}
                {status === "ready" && "Your email app is opening with the project brief ready to review."}
                {status === "idle" && "Required fields are marked with an asterisk."}
              </p>
            </div>
          </form>
        </div>
      </SectionContainer>
    </section>
  );
}
