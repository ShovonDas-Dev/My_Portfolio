"use client";

import { useEffect, useRef, useState } from "react";

// Watches one element and reports when it first enters the viewport.
// Reduced-motion users (and browsers without IntersectionObserver) see it immediately.
export default function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const shouldShowImmediately =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined";

    if (shouldShowImmediately) {
      // Defer the update so it does not run during the effect body.
      const timer = window.setTimeout(() => setIsInView(true), 0);

      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Animate only once.
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
}
