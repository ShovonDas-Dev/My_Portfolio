// Three small, keyboard-accessible cards linking to the live project demos.
export default function JourneyProjectCards({ projects }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-3">
      {projects.map((project) => (
        <li key={project.id}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full rounded-md border border-line bg-surface p-3 transition-colors hover:border-accent"
          >
            <span className="journey-card-title block">{project.title}</span>
            <span className="journey-card-meta mt-1 block">{project.type}</span>
            <span className="journey-card-link mt-2 block">
              {project.linkLabel}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
