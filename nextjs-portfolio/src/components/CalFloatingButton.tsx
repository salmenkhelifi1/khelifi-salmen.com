"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { usePathname } from "next/navigation";

export default function CalFloatingButton() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") return;

    (async function () {
      try {
        const cal = await getCalApi({ namespace: "30min" });
        cal("floatingButton", {
          calLink: "salmen-khelifi/30min",
          config: {
            layout: "month_view",
            useSlotsViewOnSmallScreen: "true",
          },
        });
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (error) {
        console.error("Failed to initialize Cal.com embed:", error);
      }
    })();
  }, [pathname]);

  return null;
}
