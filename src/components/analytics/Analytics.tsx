"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function Analytics() {
  useEffect(() => {
    function trackClick(event: MouseEvent) {
      const element = (event.target as Element | null)?.closest<HTMLElement>("[data-analytics-event]");
      if (!element) return;

      const eventName = element.dataset.analyticsEvent;
      const label = element.dataset.analyticsLabel;
      if (!eventName) return;

      const props = label ? { label } : undefined;
      window.gtag?.("event", eventName, props);
    }

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return null;
}
