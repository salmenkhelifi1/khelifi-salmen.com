import { NextResponse } from "next/server";

// TEMPORARY error-tracking probe. Remove immediately after one QA trigger.
// Throws an unexpected error so Next's onRequestError captures it server-side.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  throw new Error("qa-error-tracking-probe");
}

export async function POST() {
  return NextResponse.json(
    { ok: false, error: "probe_removed" },
    { status: 410 },
  );
}
