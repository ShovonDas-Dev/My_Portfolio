"use client";

import { useState } from "react";

// CSS-only browser window with a small click counter button.
export default function BrowserMockup({ browser }) {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full max-w-[300px] overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow)]">
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 border-b border-line bg-surface-soft px-3 py-2"
      >
        <span className="size-2 rounded-full bg-accent/60" />
        <span className="size-2 rounded-full bg-accent/30" />
        <span className="size-2 rounded-full bg-accent/15" />
        <span className="journey-mockup-text ml-2 truncate">{browser.url}</span>
      </div>

      <div className="journey-mockup-text flex flex-col items-center gap-3 p-6 text-center">
        <button
          type="button"
          onClick={() => setCount((current) => current + 1)}
          className="journey-button rounded border border-transparent bg-accent px-4 py-2 text-white transition-opacity hover:opacity-90"
        >
          {browser.buttonLabel}
        </button>
        <span aria-live="polite">
          {count} {browser.counterLabel}
        </span>
      </div>
    </div>
  );
}
