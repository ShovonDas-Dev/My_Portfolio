// CSS-only laptop. The page preview narrows to show a mobile layout.
export default function LaptopMockup() {
  return (
    <div aria-hidden="true" className="w-full max-w-[290px]">
      <div className="rounded-t-xl border border-line bg-surface p-2 shadow-[var(--shadow)]">
        <div className="journey-preview-window mx-auto h-32 overflow-hidden rounded-md border border-line bg-canvas p-2">
          <div className="h-3 w-2/3 rounded bg-surface-soft" />
          <div className="mt-2 flex gap-1">
            <span className="h-2 w-8 rounded bg-accent/60" />
            <span className="h-2 w-5 rounded bg-surface-soft" />
            <span className="h-2 w-6 rounded bg-surface-soft" />
          </div>
          <div className="journey-preview-cards mt-3 grid gap-2">
            <span className="h-8 rounded bg-surface-soft" />
            <span className="h-8 rounded bg-surface-soft" />
            <span className="h-8 rounded bg-surface-soft" />
          </div>
        </div>
      </div>

      <div className="-mx-3 h-2 rounded-b-xl bg-surface-soft" />
      <div className="mx-auto h-1 w-16 rounded-b-lg bg-line" />
    </div>
  );
}
