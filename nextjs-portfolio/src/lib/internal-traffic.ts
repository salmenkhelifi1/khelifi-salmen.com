/**
 * Single internal-traffic gate for GA4 and PostHog.
 *
 * Only the real production hosts count as visitor traffic. Everything else —
 * localhost, 127.0.0.1, LAN IPs, *.netlify.app / *.vercel.app previews,
 * automation — is internal and must never reach the production analytics
 * properties.
 */
export const PRODUCTION_HOSTS = ["www.khelifi-salmen.com", "khelifi-salmen.com"];

/** `forceEnabled` lets a developer opt a non-production host in on purpose. */
export function isInternalHost(hostname: string, forceEnabled = false): boolean {
  if (forceEnabled) return false;
  return !PRODUCTION_HOSTS.includes(hostname);
}
