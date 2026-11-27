// Section title and subtitle, styled like the other portfolio sections.
export default function JourneyHeader({ content }) {
  return (
    <header>
      <p className="journey-label flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        {content.label}
      </p>

      <h2 id="journey-title" className="journey-heading mt-6">
        {content.title}
      </h2>

      <p className="journey-subtitle mt-6 max-w-xl border-l border-line pl-5 sm:pl-6">
        {content.subtitle}
      </p>
    </header>
  );
}
