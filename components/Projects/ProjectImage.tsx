"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectImageProps = {
  project: Project;
  isLarge: boolean;
};

export default function ProjectImage({ project, isLarge }: ProjectImageProps) {
  const aspectClasses = isLarge ? "aspect-[16/10]" : "aspect-[4/3]";
  const imageSizes = isLarge
    ? "(min-width: 768px) 58vw, 100vw"
    : "(min-width: 768px) 42vw, 100vw";

  return (
    <div
      className={`relative overflow-hidden border-b border-line bg-surface-soft ${aspectClasses}`}
    >
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        fill
        sizes={imageSizes}
        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
      />

      {project.featured ? (
        <span className="absolute left-4 top-4 border border-accent/40 bg-surface/90 px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-accent backdrop-blur-sm">
          Featured
        </span>
      ) : null}

      <span
        aria-hidden="true"
        className="absolute bottom-4 right-4 grid size-10 translate-y-1 place-items-center rounded-full border border-line bg-surface/90 text-ink opacity-100 shadow-sm transition-all duration-300 ease-out motion-reduce:translate-y-0 motion-reduce:transition-none md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
      >
        <ArrowUpRight className="size-4" />
      </span>
    </div>
  );
}
