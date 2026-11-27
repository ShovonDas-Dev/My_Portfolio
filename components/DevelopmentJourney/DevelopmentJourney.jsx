"use client";

import { useEffect, useRef, useState } from "react";
import {
  journeyContent,
  journeyProjects,
  journeyStats,
  journeySteps,
} from "@/data/journeyData";
import JourneyHeader from "./JourneyHeader";
import JourneyProgressLine from "./JourneyProgressLine";
import JourneyStep from "./JourneyStep";
import JourneyStats from "./JourneyStats";

// Scroll-based "From Phone to Full Stack" timeline.
export default function DevelopmentJourney() {
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const timeline = timelineRef.current;

      if (!timeline) return;

      const rect = timeline.getBoundingClientRect();

      // The line starts filling when the timeline reaches 65% of the screen.
      const filled = ((window.innerHeight * 0.65 - rect.top) / rect.height) * 100;

      setProgress(Math.min(100, Math.max(0, filled)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="section-anchor relative overflow-hidden bg-canvas py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
      />

      <div className="container-page">
        <JourneyHeader content={journeyContent} />

        <div className="relative mt-12 lg:mt-16">
          <JourneyProgressLine progress={progress} />

          <ol ref={timelineRef} aria-label={journeyContent.timelineLabel} className="list-none">
            {journeySteps.map((step, index) => (
              <JourneyStep
                key={step.id}
                step={step}
                index={index}
                projects={journeyProjects}
                contactHref={journeyContent.contactHref}
                contactButtonLabel={journeyContent.contactButtonLabel}
              />
            ))}
          </ol>
        </div>

        <JourneyStats stats={journeyStats} />
      </div>
    </section>
  );
}
