import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";

// lucide-react no longer ships brand icons, so the GitHub logo is a tiny inline SVG.
function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.43 9.79 8.21 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// Description, features, tech tags and action buttons for the selected project.
export default function ProjectDetails({ project }) {
  return (
    <div>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
        {project.type}
      </p>

      <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-[-0.04em] text-ink sm:text-3xl">
        {project.tagline}
      </h3>

      <p className="mt-3 text-sm leading-7 text-muted sm:text-[15px]">
        {project.description}
      </p>

      {/* Feature points */}
      <ul className="mt-5 space-y-2.5">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
            <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      {/* Action buttons */}
      <div className="mt-6 flex flex-wrap gap-3">
        <motion.a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Live Demo
          <ExternalLink aria-hidden="true" className="size-4" />
        </motion.a>

        {/* GitHub button is hidden when there is no link (never "unavailable") */}
        {project.githubLink ? (
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            GitHub
            <GithubIcon className="size-4" />
          </motion.a>
        ) : null}
      </div>
    </div>
  );
}
