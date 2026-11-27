"use client";

import { useEffect, useState } from "react";
import useInView from "./useInView";

// Counts each statistic from 0 when the row scrolls into view.
export default function JourneyStats({ stats }) {
  const [ref, isInView] = useInView(0.4);
  const [counts, setCounts] = useState(() => stats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Defer the update so it does not run during the effect body.
      const timer = window.setTimeout(() => {
        setCounts(stats.map((stat) => stat.value));
      }, 0);

      return () => window.clearTimeout(timer);
    }

    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / 1000, 1);

      setCounts(stats.map((stat) => Math.round(stat.value * progress)));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [isInView, stats]);

  return (
    <div
      ref={ref}
      className="mt-14 grid grid-cols-3 gap-3 border-t border-line pt-8 sm:mt-16 sm:gap-6"
    >
      {stats.map((stat, index) => (
        <div key={stat.label} className="text-center">
          <p className="journey-stat-value">{counts[index]}</p>
          <p className="journey-stat-label mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
