import posthog from "posthog-js";

/**
 * Single source of truth for custom conversion events.
 * Full schema: ANALYTICS_EVENTS.md
 *
 * Rules:
 * - snake_case names, flat allowed properties only (see EVENTS below).
 * - NO PII ever (no name/email/message/problem/phone/token).
 * - lead_generated fires ONLY after /api/contact returns { ok: true }
 *   (same success condition as GA4 `generate_lead`).
 * - All helpers no-op when PostHog is not initialised (no token / opted out).
 */

export const ANALYTICS_EVENTS = {
  portfolio_cta_clicked: ["cta_name", "placement", "source_page", "destination"],
  project_card_clicked: ["project_slug", "project_name", "source_page"],
  resume_opened: ["placement", "source_page"],
  contact_cta_clicked: ["placement", "source_page"],
  contact_form_started: ["source_page"],
  lead_generated: ["source_page", "form_type"],
  contact_form_failed: ["error_type", "status_code"],
  outbound_link_clicked: ["destination_type", "destination_domain", "placement"],
} as const;

export type AnalyticsEventName = keyof typeof ANALYTICS_EVENTS;

function sourcePage(explicit?: string): string {
  if (explicit) return explicit;
  if (typeof window !== "undefined") return window.location.pathname;
  return "unknown";
}

function safeCapture(
  event: AnalyticsEventName,
  properties: Record<string, string | number | undefined>,
) {
  try {
    if (typeof window === "undefined") return;
    // posthog-js exposes isFeatureEnabled/opted-out helpers; guard on capture.
    if (typeof posthog?.capture !== "function") return;
    if (typeof posthog?.has_opted_out_capturing === "function") {
      if (posthog.has_opted_out_capturing()) return;
    }
    const clean: Record<string, string | number> = {};
    for (const [k, v] of Object.entries(properties)) {
      if (v !== undefined && v !== "") clean[k] = v;
    }
    posthog.capture(event, clean);
  } catch {
    // Analytics must never break UX.
  }
}

export function destinationDomain(href: string): string {
  try {
    const u = new URL(href, "https://www.khelifi-salmen.com");
    if (href.startsWith("mailto:")) return "mailto";
    return u.hostname.replace(/^www\./, "");
  } catch {
    return "unknown";
  }
}

/** Generic CTA (hero/nav/footer/work/project-page). */
export function trackCta(params: {
  cta_name: string;
  placement: string;
  destination?: string;
  source_page?: string;
}) {
  const dest = params.destination ?? "";
  // Contact-directed CTAs also fire the dedicated contact_cta_clicked event
  // (keeps funnels simple; dashboards can use either).
  const isContact =
    dest.startsWith("#contact") ||
    dest === "/#contact" ||
    params.cta_name === "contact_me";
  safeCapture("portfolio_cta_clicked", {
    cta_name: params.cta_name,
    placement: params.placement,
    source_page: sourcePage(params.source_page),
    destination: dest || undefined,
  });
  if (isContact) {
    safeCapture("contact_cta_clicked", {
      placement: params.placement,
      source_page: sourcePage(params.source_page),
    });
  }
}

/** Project card -> case study click. */
export function trackProjectCard(params: {
  project_slug: string;
  project_name?: string;
  source_page?: string;
}) {
  safeCapture("project_card_clicked", {
    project_slug: params.project_slug,
    project_name: params.project_name,
    source_page: sourcePage(params.source_page),
  });
}

/** Resume opens (page nav, hero button, PDF download). */
export function trackResumeOpened(params: {
  placement: string;
  source_page?: string;
}) {
  safeCapture("resume_opened", {
    placement: params.placement,
    source_page: sourcePage(params.source_page),
  });
}

/** Book-a-call / Cal.com intent. */
export function trackBookCall(params: {
  placement: string;
  source_page?: string;
}) {
  safeCapture("portfolio_cta_clicked", {
    cta_name: "book_call",
    placement: params.placement,
    source_page: sourcePage(params.source_page),
    destination: "https://cal.com/salmen-khelifi/30min",
  });
}

/** First meaningful interaction with the contact form (fires once per mount). */
let formStartedFired = false;
export function resetContactFormStarted() {
  formStartedFired = false;
}
export function trackContactFormStarted(source_page?: string) {
  if (formStartedFired) return;
  formStartedFired = true;
  safeCapture("contact_form_started", {
    source_page: sourcePage(source_page),
  });
}

/** PRIMARY conversion. Call only after contact API returns { ok: true }. */
export function trackLeadGenerated(params: {
  source_page?: string;
  form_type?: string;
}) {
  safeCapture("lead_generated", {
    source_page: sourcePage(params.source_page),
    form_type: params.form_type ?? "contact",
  });
}

/** Contact failures (validation / API). Never include field values. */
export function trackContactFormFailed(params: {
  error_type: string;
  status_code?: number;
}) {
  safeCapture("contact_form_failed", {
    error_type: params.error_type,
    status_code: params.status_code,
  });
}

/** Professional outbound links (linkedin/github/freelancer/email/...). */
export function trackOutboundLink(params: {
  destination_type: string;
  href: string;
  placement: string;
}) {
  safeCapture("outbound_link_clicked", {
    destination_type: params.destination_type,
    destination_domain: destinationDomain(params.href),
    placement: params.placement,
  });
}
