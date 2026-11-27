// Decorative line on the left of the timeline; its filled part follows scroll.
export default function JourneyProgressLine({ progress }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-[11px] top-2 w-px -translate-x-1/2 bg-line lg:left-1/2"
    >
      <div
        className="w-full bg-accent transition-[height] duration-150"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}
