"use client";

import { MotionConfig, motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import {
  fadeUpVariants,
  headingLineVariants,
  projectsGridVariants,
  projectsHeaderVariants,
} from "./motion";

export default function Projects() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="projects"
        aria-labelledby="projects-title"
        className="section-anchor relative bg-canvas py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
        />

        <div className="container-page">
          <motion.div
            variants={projectsHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center gap-5 border-b border-line pb-10 text-center md:pb-12"
          >
            <motion.p
              variants={fadeUpVariants}
              className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-muted"
            >
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              {projectsData.label}
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
            </motion.p>

            <motion.h2
              id="projects-title"
              className="max-w-3xl font-heading text-[2.45rem] font-extrabold leading-[1.02] tracking-[-0.055em] text-ink sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
            >
              <span aria-hidden="true" className="block overflow-hidden pb-1">
                <motion.span variants={headingLineVariants} className="block">
                  {projectsData.heading}
                </motion.span>
              </span>
              <span className="sr-only">{projectsData.heading}</span>
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="max-w-xl text-sm leading-7 text-muted sm:text-[15px]"
            >
              {projectsData.description}
            </motion.p>
          </motion.div>

          <motion.div
            variants={projectsGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-12 lg:gap-8"
          >
            {projectsData.projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
