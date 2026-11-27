"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectImage from "./ProjectImage";
import { projectCardVariants } from "./motion";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Even projects are large showcases, odd ones are compact.
  const isLarge = index % 2 === 0;

  // Stagger alternate cards so rows never line up perfectly.
  const isStaggered = index % 4 === 1 || index % 4 === 2;

  const sizeClasses = isLarge ? "md:col-span-7" : "md:col-span-5";
  const staggerClasses = isStaggered ? "md:mt-12 lg:mt-16" : "";

  return (
    <motion.article
      variants={projectCardVariants}
      aria-labelledby={`${project.id}-title`}
      className={`group flex flex-col border border-line bg-surface transition-[border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-[var(--shadow)] ${sizeClasses} ${staggerClasses}`}
    >
      <ProjectImage project={project} isLarge={isLarge} />

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6 lg:p-7">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] font-medium text-accent">
            {project.number}
          </span>
          <span aria-hidden="true" className="h-px w-7 bg-line" />
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
            {project.category}
          </p>
        </div>

        <h3
          id={`${project.id}-title`}
          className={`font-heading font-extrabold leading-[1.1] tracking-[-0.05em] text-ink transition-colors duration-300 group-hover:text-accent ${
            isLarge
              ? "text-2xl sm:text-3xl lg:text-[2rem]"
              : "text-xl sm:text-2xl lg:text-[1.6rem]"
          }`}
        >
          {project.title}
        </h3>

        <p className="text-sm leading-7 text-muted">{project.description}</p>

        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="border border-line px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted transition-colors duration-300 group-hover:border-accent/40"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the ${project.title} live site in a new tab`}
            className="inline-flex min-h-10 items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink transition-colors duration-200 hover:text-accent"
          >
            Live preview
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the ${project.title} GitHub repository in a new tab`}
            className="inline-flex min-h-10 items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink transition-colors duration-200 hover:text-accent"
          >
            GitHub
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
