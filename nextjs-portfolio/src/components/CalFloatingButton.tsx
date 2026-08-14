"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { usePathname } from "next/navigation";

export default function CalFloatingButton() {
  const pathname = usePathname();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      (async function () {
        try {
          const cal = await getCalApi({ namespace: "30min" });
          cal("ui", {
            hideEventTypeDetails: false,
            layout: "month_view",
          });

          if (pathname !== "/") {
            cal("floatingButton", {
              calLink: "salmen-khelifi/30min",
              config: {
                layout: "month_view",
                useSlotsViewOnSmallScreen: "true",
              },
            });
          }
        } catch (error) {
          console.error("Failed to initialize Cal.com embed:", error);
        }
      })();
    }, 3500); // Defer to let LCP finish and avoid blocking main thread

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
