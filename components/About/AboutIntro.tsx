"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/data/about";
import {
  aboutIntroVariants,
  fadeUpVariants,
  headingLineVariants,
} from "./motion";

export default function AboutIntro() {
  return (
    <motion.div variants={aboutIntroVariants}>
      <motion.p
        variants={fadeUpVariants}
        className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-muted"
      >
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        {aboutData.label}
      </motion.p>

      <motion.h2
        id="about-title"
        className="mt-6 font-heading text-[2.45rem] font-extrabold leading-[1.02] tracking-[-0.055em] text-ink sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
      >
        <span className="sr-only">{aboutData.heading.accessible}</span>

        <span aria-hidden="true" className="block overflow-hidden pb-1">
          <motion.span variants={headingLineVariants} className="block">
            {aboutData.heading.lead}
          </motion.span>
        </span>

        <span aria-hidden="true" className="block overflow-hidden pb-1">
          <motion.span
            variants={headingLineVariants}
            className="block text-accent"
          >
            {aboutData.heading.accent}
          </motion.span>
        </span>
      </motion.h2>

      <motion.div
        variants={fadeUpVariants}
        className="mt-8 max-w-xl space-y-4 border-l border-line pl-5 text-sm leading-7 text-muted sm:pl-6 sm:text-[15px] sm:leading-8"
      >
        {aboutData.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className={
              index === 0
                ? "text-base font-medium leading-8 text-ink/80 sm:text-[17px]"
                : undefined
            }
          >
            {paragraph}
          </p>
        ))}
      </motion.div>
    </motion.div>
  );
}
