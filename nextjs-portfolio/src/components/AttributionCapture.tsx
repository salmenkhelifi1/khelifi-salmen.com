"use client";

import { useEffect } from "react";
import { captureFirstTouch } from "@/lib/attribution";

// Records first-touch acquisition context (campaign tags, landing path,
// referring host) once per browser session. Renders nothing.
export default function AttributionCapture() {
  useEffect(() => {
    captureFirstTouch();
  }, []);
  return null;
}
