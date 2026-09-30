import posthog from "posthog-js";

// Non-sensitive acquisition context for the contact form. First-touch values are
// kept in sessionStorage for the current browser session only: no cookies, no
// fingerprinting, no IP, no identify(). Only campaign tags, page paths (no query
// string) and the referring hostname are stored.
export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  landing_page?: string;
  current_page?: string;
  referrer_domain?: string;
  first_touch_at?: string;
  posthog_session_id?: string;
};

const KEY = "ft_attribution";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const UTM_OK = /^[A-Za-z0-9 _.\-~+:/]{1,100}$/;

export function captureFirstTouch(): void {
  try {
    if (typeof window === "undefined" || window.sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const stored: Attribution = { landing_page: window.location.pathname, first_touch_at: new Date().toISOString() };
    for (const key of UTM_KEYS) {
      const value = params.get(key)?.trim();
      if (value && UTM_OK.test(value)) stored[key] = value;
    }
    if (document.referrer) {
      const host = new URL(document.referrer).hostname.toLowerCase();
      if (host && host !== window.location.hostname) stored.referrer_domain = host;
    }
    window.sessionStorage.setItem(KEY, JSON.stringify(stored));
  } catch {
    // Attribution is best-effort and must never affect the page.
  }
}

export function getAttribution(): Attribution {
  let base: Attribution = {};
  try {
    base = JSON.parse(window.sessionStorage.getItem(KEY) ?? "{}") as Attribution;
  } catch {
    base = {};
  }
  const result: Attribution = { ...base, current_page: window.location.pathname };
  try {
    // Anonymous PostHog session id, only used to find the replay later.
    const id = typeof posthog?.get_session_id === "function" ? posthog.get_session_id() : "";
    if (id) result.posthog_session_id = id;
  } catch {
    // ignore
  }
  return result;
}
