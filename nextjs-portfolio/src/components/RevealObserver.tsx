"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    // IntersectionObserver instead of a scroll listener: fires reliably on
    // anchor jumps, fast scrolling, and filter changes (scroll events don't).
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px" }
    );

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.active)")
        .forEach((element) => observer.observe(element));
    };

    observeAll();
    // Re-observe when the work filter swaps the project list in/out.
    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
