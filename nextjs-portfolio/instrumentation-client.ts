import posthog from "posthog-js";
import { isInternalHost } from "@/lib/internal-traffic";

/**
 * Stable client-side PostHog init (official posthog-js, not @posthog/next).
 * Sources: https://posthog.com/docs/libraries/next-js,
 * https://posthog.com/docs/advanced/proxy/nextjs,
 * https://posthog.com/docs/advanced/proxy/netlify,
 * https://posthog.com/docs/session-replay/privacy
 *
 * Privacy: anonymous distinct_id only (no posthog.identify call in this repo),
 * maskAllInputs:true, contact form blocked via blockSelector, no network body
 * capture, no console capture. GA4 stays untouched (see src/components/Analytics.tsx).
 */

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "/ingest";
const uiHost =
  process.env.NEXT_PUBLIC_POSTHOG_UI_HOST ?? "https://us.posthog.com";
const forceEnabled = process.env.NEXT_PUBLIC_POSTHOG_ENABLED === "true";

// localhost, previews and automation are internal: PostHog is never initialised
// there, so no flags/config/script fetches or events leave the browser.
// Set NEXT_PUBLIC_POSTHOG_ENABLED=true to test PostHog on a non-production host.
const internal =
  typeof window === "undefined" ||
  isInternalHost(window.location.hostname, forceEnabled);

// No token or internal host -> no-op. Never fabricate a token; set NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
// in Netlify env + .env.local (see .env.example).
if (token && !internal) {
  posthog.init(token, {
    api_host: host,
    ui_host: uiHost,
    defaults: "2026-05-30",
    // Web Analytics: pageviews, pageleave, autocapture, sessions, referrer/UTM,
    // scroll, Core Web Vitals (where supported by posthog-js defaults).
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    capture_exceptions: true,
    capture_performance: true,
    save_referrer: true,
    save_campaign_params: true,
    session_recording: {
      // Conservative privacy defaults for a portfolio with a contact form.
      maskAllInputs: true,
      // Extra text masking inside the contact section (inputs are already masked;
      // this covers labels/status text near the form if replay ever includes it).
      maskTextSelector: "#contact .ph-mask",
      blockSelector: ".ph-no-capture",
      // Never record request/response bodies or headers (contact PII, Resend key).
      recordHeaders: false,
      recordBody: false,
      // Redact tokens/emails that might appear in the replay URL bar.
      maskCapturedNetworkRequestFn: (request) => {
        if (request?.name) {
          request.name = request.name.replace(
            /([?&](token|auth|email|code)=)[^&]+/gi,
            "$1[REDACTED]",
          );
        }
        return request;
      },
    },
    // Safety net: drop obvious PII if a future call site ever passes it.
    before_send: (event) => {
      if (!event?.properties) return event;
      const p = event.properties as Record<string, unknown>;
      for (const k of [
        "name",
        "email",
        "message",
        "problem",
        "company",
        "phone",
      ]) {
        if (k in p && typeof p[k] === "string" && (p[k] as string).length > 0) {
          // Allowlist: only known-safe enum-like fields survive; free text is dropped.
          if (k === "company") continue;
          delete p[k];
        }
      }
      return event;
    },
    // Never identify anonymous portfolio visitors. Keep PostHog's anonymous
    // distinct_id unless a real stable ID becomes necessary later.
  });
}

// Re-export for call sites: `import { posthog } from "@/instrumentation-client"` is
// NOT used; call sites import "posthog-js" directly plus helpers in src/lib/analytics.
// This module exists so Next.js loads it automatically as instrumentation-client.
export default posthog;
