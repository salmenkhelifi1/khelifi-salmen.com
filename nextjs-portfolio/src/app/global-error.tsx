"use client";

import NextError from "next/error";
import posthog from "posthog-js";
import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    try {
      // error is a runtime Error (message + stack). No form values attached.
      posthog.captureException(error, { $host: "www.khelifi-salmen.com" });
    } catch {
      // Reporting must never break the error page.
    }
  }, [error]);

  return (
    <html lang="en">
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
