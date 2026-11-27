"use client";

import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects, sectionContent } from "@/data/featuredProjectsData";
import ProjectList from "./ProjectList";
import ProjectPreview from "./ProjectPreview";
import ProjectDetails from "./ProjectDetails";
import { fadeUp, staggerContainer, swapContent, buttonPress } from "./animations";

// Interactive section: the selected project drives the mockup and the details.
export default function FeaturedProjects() {
  const [selectedId, setSelectedId] = useState(featuredProjects[0].id);
  const selected =
    featuredProjects.find((project) => project.id === selectedId) ??
    featuredProjects[0];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="projects"
        aria-labelledby="featured-projects-title"
        className="section-anchor relative bg-canvas py-20 sm:py-24 lg:py-28"
      >
        {/* Same hairline divider as the other sections */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
        />

        <div className="container-page">
          {/* Section header from sectionContent */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center gap-4 border-b border-line pb-10 text-center md:pb-12"
          >
            <motion.p
              variants={fadeUp}
              className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-muted"
            >
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              {sectionContent.label}
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
            </motion.p>

            <motion.h2
              id="featured-projects-title"
              variants={fadeUp}
              className="max-w-3xl font-heading text-[2.45rem] font-extrabold leading-[1.02] tracking-[-0.055em] text-ink sm:text-5xl md:text-6xl"
            >
              {sectionContent.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-sm leading-7 text-muted sm:text-[15px]"
            >
              {sectionContent.subtitle}
            </motion.p>
          </motion.div>

          {/* Two columns on desktop; stacked single column below lg */}
          <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-12 lg:grid-cols-2 lg:items-start lg:gap-12">
            {/* LEFT: numbered list (pills on mobile) */}
            <div className="min-w-0 lg:sticky lg:top-28">
              <ProjectList
                projects={featuredProjects}
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
            </div>

            {/* RIGHT: glow + browser mockup + details */}
            <div className="relative min-w-0">
              {/* Soft glow whose color follows the active project */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 rounded-[40px] opacity-25 blur-3xl transition-colors duration-700 sm:-inset-10"
                style={{ backgroundColor: selected.glowColor }}
              />

              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected.id}
                    variants={swapContent}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-8"
                  >
                    <ProjectPreview project={selected} />
                    <ProjectDetails project={selected} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Bottom link to the full GitHub profile */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 flex justify-center"
          >
            <motion.a
              href={sectionContent.githubProfileLink}
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonPress}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              More on GitHub
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
