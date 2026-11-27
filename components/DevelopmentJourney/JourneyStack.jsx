import JourneyProjectCards from "./JourneyProjectCards";

// MERN layers slide in one by one, followed by the three project cards.
export default function JourneyStack({ layers, projects, isVisible }) {
  return (
    <div className="w-full max-w-[320px]">
      <div
        aria-hidden="true"
        className={`flex flex-col gap-2 ${isVisible ? "journey-stack-visible" : ""}`}
      >
        {layers.map((layer) => (
          <div
            key={layer.id}
            className="journey-layer flex items-center justify-between rounded-md border border-line bg-surface px-3 py-2"
          >
            <span className="journey-mockup-title">{layer.name}</span>
            <span className="size-2 rounded-full bg-accent/70" />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <JourneyProjectCards projects={projects} />
      </div>
    </div>
  );
}
