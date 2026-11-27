"use client";

import useInView from "./useInView";
import PhoneMockup from "./PhoneMockup";
import LaptopMockup from "./LaptopMockup";
import BrowserMockup from "./BrowserMockup";
import JourneyStack from "./JourneyStack";

// One timeline entry: year, copy, badges and its visual.
export default function JourneyStep({
  step,
  index,
  projects,
  contactHref,
  contactButtonLabel,
}) {
  const [ref, isInView] = useInView(0.18);
  const isReversed = index % 2 === 1;

  // Pick the visual described by the data file.
  let visual;

  if (step.visual === "phone") {
    visual = <PhoneMockup lines={step.phone.lines} tag={step.tag} />;
  } else if (step.visual === "laptop") {
    visual = <LaptopMockup />;
  } else if (step.visual === "browser") {
    visual = <BrowserMockup browser={step.browser} />;
  } else if (step.visual === "stack") {
    visual = (
      <JourneyStack
        layers={step.stack}
        projects={projects}
        isVisible={isInView}
      />
    );
  } else {
    visual = (
      <div className="w-full max-w-[300px] rounded-lg border border-line bg-surface p-5">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="journey-status-dot size-2.5 shrink-0 rounded-full"
          />
          <p className="journey-body">{step.now.statusText}</p>
        </div>
        <a
          href={contactHref}
          className="journey-button mt-5 inline-flex min-h-10 items-center justify-center rounded border border-transparent bg-accent px-4 text-white transition-opacity hover:opacity-90"
        >
          {contactButtonLabel}
        </a>
      </div>
    );
  }

  return (
    <li
      ref={ref}
      className={`journey-step relative pb-14 pl-10 transition-[opacity,transform] duration-700 ease-out last:pb-0 lg:pb-20 lg:pl-0 ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute left-[11px] top-3 size-3 -translate-x-1/2 rounded-full border border-accent bg-canvas transition-colors duration-300 lg:left-1/2 ${
          isInView ? "bg-accent shadow-[0_0_0_5px_var(--accent-soft)]" : ""
        }`}
      />

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
        <div className={`min-w-0 ${isReversed ? "lg:order-2" : ""}`}>
          <p className="journey-year">{step.year}</p>
          <h3
            id={`journey-step-${step.id}`}
            className="journey-step-title mt-3"
          >
            {step.title}
          </h3>
          <p className="journey-body mt-4">{step.text}</p>

          {step.badges.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {step.badges.map((badge) => (
                <li key={badge} className="journey-badge">
                  {badge}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={`flex min-w-0 justify-center ${isReversed ? "lg:order-1" : ""}`}>
          {visual}
        </div>
      </div>
    </li>
  );
}
