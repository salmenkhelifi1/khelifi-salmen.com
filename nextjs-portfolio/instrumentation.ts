export async function register() {
  // Server init stays lazy inside getPostHogServer; nothing to do here.
}

export const onRequestError = async (
  err: unknown,
  request: { headers?: { cookie?: string | string[] } },
): Promise<void> => {
  try {
    if (process.env.NEXT_RUNTIME !== "nodejs") return;
    if (!(err instanceof Error)) return;
    const { getPostHogServer } = await import("./src/lib/posthog-server");
    const client = getPostHogServer();
    if (!client) return;
    let distinctId: string | undefined;
    const cookie = request.headers?.cookie;
    const cookieString = Array.isArray(cookie) ? cookie.join("; ") : cookie;
    const match = cookieString?.match(/ph_phc_.*?_posthog=([^;]+)/);
    if (match?.[1]) {
      try {
        distinctId = JSON.parse(decodeURIComponent(match[1])).distinct_id;
      } catch {
        distinctId = undefined;
      }
    }
    // err comes from Next runtime (message + stack only, no request bodies).
    client.captureException(err, distinctId || undefined);
    await client.shutdown();
  } catch {
    // Never break request handling from the error hook.
  }
};
