import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "./animations";

// One list for both layouts:
// - mobile/tablet: horizontal scrollable pill tabs (top of the section)
// - desktop (>=1024px): large numbered list on the left
// The active item gets a layoutId indicator that slides between items.
export default function ProjectList({ projects, selectedId, onSelect }) {
  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex min-w-0 gap-2.5 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
    >
      {projects.map((project) => {
        const isActive = project.id === selectedId;

        return (
          <motion.li key={project.id} variants={fadeUp} className="shrink-0 lg:w-full lg:shrink">
            <button
              type="button"
              onClick={() => onSelect(project.id)}
              // onMouseEnter={() => onSelect(project.id)}
              aria-current={isActive ? "true" : undefined}
              className={`relative flex w-full items-center gap-3 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2.5 text-left transition-colors lg:w-full lg:gap-4 lg:whitespace-normal lg:rounded-none lg:border-x-0 lg:border-t-0 lg:border-b lg:bg-transparent lg:px-3 lg:py-4 ${
                isActive ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {/* Moving accent indicator: pill fill on mobile, left bar on desktop */}
              {isActive ? (
                <motion.span
                  layoutId="featured-project-indicator"
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-px rounded-full border border-accent/50 bg-accent-soft lg:top-1 lg:bottom-1 lg:left-0 lg:right-auto lg:w-1 lg:rounded-full lg:border-0 lg:bg-accent"
                />
              ) : null}

              <span
                className={`relative font-mono text-xs font-medium ${
                  isActive ? "text-accent" : ""
                }`}
              >
                {project.number}
              </span>
              <span className="relative font-heading text-sm font-bold tracking-[-0.02em] lg:text-xl lg:font-extrabold lg:tracking-[-0.04em]">
                {project.title}
              </span>
              {isActive ? (
                <ArrowRight
                  aria-hidden="true"
                  className="relative ml-auto hidden size-4 shrink-0 text-accent lg:block"
                />
              ) : null}
            </button>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
