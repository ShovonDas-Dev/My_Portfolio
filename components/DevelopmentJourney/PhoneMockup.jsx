// CSS-only phone with short lines that appear as if they are being typed.
export default function PhoneMockup({ lines, tag }) {
  return (
    <div className="w-full max-w-[230px]">
      <div
        aria-hidden="true"
        className="rounded-[2rem] border-[6px] border-surface-soft bg-surface p-3 shadow-[var(--shadow)]"
      >
        <div className="mx-auto mb-3 h-2 w-12 rounded-full bg-surface-soft" />
        <div className="journey-mockup-text flex flex-col gap-2 rounded-xl border border-line bg-canvas p-3">
          {lines.map((line) => (
            <span key={line} className="journey-code-line">
              {line}
            </span>
          ))}
        </div>
      </div>

      <p className="journey-tag mt-3 text-center">{tag}</p>
    </div>
  );
}
