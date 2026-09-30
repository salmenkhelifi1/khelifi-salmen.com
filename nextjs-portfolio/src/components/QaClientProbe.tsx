"use client";

// TEMPORARY QA probe for client-side $exception + source-map validation.
// Remove immediately after one verified trigger. Never fires without the
// explicit ?qa_client_probe=1 query param, so normal visitors are unaffected.
import posthog from "posthog-js";
import { useEffect } from "react";

export default function QaClientProbe() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("qa_client_probe") !== "1") return;
      params.delete("qa_client_probe");
      window.history.replaceState(null, "", `${window.location.pathname}#qa`);
      posthog.captureException(new Error("qa-client-probe-001"), {
        qa: "client-probe",
      });
    } catch {
      // Probe must never break the page.
    }
  }, []);
  return null;
}
