import { PostHog } from "posthog-node";

// Server-side PostHog singleton for Error Tracking only (no business events here).
// Uses an absolute API host: the relative /ingest proxy is browser-only.
let instance: PostHog | null = null;

export function getPostHogServer(): PostHog | null {
  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  if (!token) return null;
  if (!instance) {
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
    instance = new PostHog(token, {
      host:
        host && host.startsWith("http")
          ? host
          : "https://us.i.posthog.com",
      flushAt: 1,
      flushInterval: 0,
    });
  }
  return instance;
}

// Report an unexpected server failure. Never pass contact values, request
// bodies, or provider response text — code + status only.
export async function reportServerError(
  code: string,
  properties?: Record<string, string | number>,
): Promise<void> {
  try {
    const client = getPostHogServer();
    if (!client) return;
    client.captureException(new Error(code), undefined, {
      $host: "www.khelifi-salmen.com",
      ...properties,
    });
    await client.shutdown();
  } catch {
    // Error reporting must never break request handling.
  }
}
