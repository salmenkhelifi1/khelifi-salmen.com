"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";
import { bookingUrl } from "@/data/schema";
import { BUDGETS, validateContact, type ContactErrors } from "@/lib/contact";
import {
  trackBookCall,
  trackContactFormFailed,
  trackContactFormStarted,
  trackLeadGenerated,
  trackOutboundLink,
} from "@/lib/analytics";
import { getAttribution } from "@/lib/attribution";
import SectionContainer from "./SectionContainer";

type FormStatus = "idle" | "sending" | "success" | "error";

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  problem: "What do you need?",
};
const EMAIL = "hello@khelifi-salmen.com";

export default function ContactCTA() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [fallbackHref, setFallbackHref] = useState<string>(`mailto:${EMAIL}`);

  function mailtoFor(values: Record<string, string>) {
    const subject = encodeURIComponent(`Portfolio enquiry — ${values.name || ""}`.trim());
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nCompany / website: ${values.company || "Not specified"}\nBudget: ${values.budget || "Not specified"}\nTimeline: ${values.timeline || "Not specified"}\n\nWhat I need:\n${values.problem}`,
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form)) as Record<string, string>;
    values.source = window.location.pathname;
    setFallbackHref(mailtoFor(values));

    const result = validateContact(values);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("error");
      trackContactFormFailed({ error_type: "validation" });
      const first = Object.keys(result.errors).find((key) => FIELD_LABELS[key]);
      if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, attribution: getAttribution() }),
      });
      const payload = await response.json().catch(() => ({}));
      if (response.status === 422 && payload.fields) {
        setErrors(payload.fields);
        setStatus("error");
        trackContactFormFailed({ error_type: "validation", status_code: 422 });
        return;
      }
      if (!response.ok || !payload.ok) throw new Error(payload.error ?? "send_failed");

      sendGAEvent("event", "generate_lead", { form_id: "contact", page_path: values.source });
      // PRIMARY conversion: same success condition as GA4 generate_lead, no PII.
      trackLeadGenerated({ source_page: values.source, form_type: "contact" });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      trackContactFormFailed({ error_type: "send_failed" });
    }
  }

  const fieldErrors = Object.entries(errors).filter(([key]) => FIELD_LABELS[key]);
  const invalid = (key: keyof ContactErrors) => (errors[key] ? true : undefined);
  const describedBy = (key: keyof ContactErrors) => (errors[key] ? `${key}-error` : undefined);

  return (
    <section id="contact" aria-labelledby="contact-heading" className="contact-section border-t border-[var(--border-subtle)] py-24 md:py-32">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-5">
            <p className="mb-3 text-caption text-[var(--accent)]">Start with context</p>
            <h2 id="contact-heading" className="mb-6 text-h2 md:text-h1">Tell me about your project</h2>
            <p className="mb-8 text-body-large text-[var(--text-secondary)]">
              Share the problem, current situation, and what a useful outcome looks like. I read every message and reply by email.
            </p>

            <div className="contact-alternative">
              <p className="font-semibold text-[var(--text-primary)]">Prefer a conversation first?</p>
              <a
                href={bookingUrl}
                data-cal-namespace="30min"
                data-cal-link="salmen-khelifi/30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                data-ph-capture="contact-book-call"
                onClick={() => trackBookCall({ placement: "contact" })}
                className="project-link mt-2 inline-flex min-h-11 items-center font-semibold text-[var(--text-secondary)]"
              >
                Book a 30-minute call <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Or email{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  data-ph-capture="contact-email"
                  onClick={() =>
                    trackOutboundLink({
                      destination_type: "email",
                      href: `mailto:${EMAIL}`,
                      placement: "contact",
                    })
                  }
                  className="underline underline-offset-4"
                >
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>

          <form
            ref={formRef}
            className="project-brief reveal lg:col-span-7 ph-no-capture"
            onSubmit={handleSubmit}
            onFocus={() => trackContactFormStarted()}
            onChange={() => trackContactFormStarted()}
            noValidate
          >
            {status === "error" && fieldErrors.length > 0 && (
              <div role="alert" className="mb-5 text-sm text-[var(--text-primary)]">
                <p className="font-semibold">Please fix the following:</p>
                <ul className="mt-1 list-disc pl-5">
                  {fieldErrors.map(([key, message]) => (
                    <li key={key}><a href={`#${key}-field`} className="underline">{FIELD_LABELS[key]}</a>: {message}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field">
                <span>Name <span aria-hidden="true">*</span></span>
                <input id="name-field" name="name" autoComplete="name" required aria-required="true" maxLength={100} aria-invalid={invalid("name")} aria-describedby={describedBy("name")} />
                {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
              </label>
              <label className="form-field">
                <span>Email <span aria-hidden="true">*</span></span>
                <input id="email-field" name="email" type="email" autoComplete="email" required aria-required="true" maxLength={200} aria-invalid={invalid("email")} aria-describedby={describedBy("email")} />
                {errors.email && <span id="email-error" className="form-error">{errors.email}</span>}
              </label>
            </div>

            <label className="form-field mt-5">
              <span>Company / website <span className="form-optional">Optional</span></span>
              <input name="company" autoComplete="organization" maxLength={200} />
            </label>

            <label className="form-field mt-5">
              <span>What do you need? <span aria-hidden="true">*</span></span>
              <textarea id="problem-field" name="problem" rows={5} required aria-required="true" maxLength={4000} aria-invalid={invalid("problem")} aria-describedby={describedBy("problem")} placeholder="The product, workflow, or system you want to build or improve…" />
              {errors.problem && <span id="problem-error" className="form-error">{errors.problem}</span>}
            </label>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="form-field">
                <span>Budget <span className="form-optional">Optional</span></span>
                <select name="budget" defaultValue="">
                  <option value="">Select a range</option>
                  {BUDGETS.map((budget) => <option key={budget}>{budget}</option>)}
                </select>
              </label>
              <label className="form-field">
                <span>Timeline <span className="form-optional">Optional</span></span>
                <input name="timeline" maxLength={120} placeholder="For example: within 6 weeks" />
              </label>
            </div>

            <label className="form-honeypot" aria-hidden="true">
              Leave this field empty
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                data-ph-capture="contact-submit"
                className="cta-button cta-primary"
                disabled={status === "sending"} aria-disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send project brief"} <Send className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="text-sm text-[var(--text-secondary)]" role="status" aria-live="polite">
                {status === "idle" && "Required fields are marked with an asterisk."}
                {status === "sending" && "Sending your message…"}
                {status === "success" && "Thanks, your message is on its way. I'll reply by email."}
                {status === "error" && fieldErrors.length === 0 && (
                  <>
                    Sorry, that did not send. Please try again, or{" "}
                    <a href={fallbackHref} className="underline underline-offset-4">email me directly</a>.
                  </>
                )}
              </p>
            </div>
          </form>
        </div>
      </SectionContainer>
    </section>
  );
}
