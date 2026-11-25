"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/data/about";
import {
  fadeUpVariants,
  highlightsContainerVariants,
} from "./motion";

export default function AboutHighlights() {
  return (
    <motion.div
      variants={highlightsContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-16 sm:mt-20 lg:mt-24"
    >
      <div className="flex items-center gap-4 border-t border-line pt-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          {aboutData.highlightsLabel}
        </p>

        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>

      <ul className="mt-2 grid lg:grid-cols-3">
        {aboutData.highlights.map((highlight) => (
          <motion.li
            key={highlight.id}
            variants={fadeUpVariants}
            className="group relative border-b border-line py-6 last:border-b-0 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-full"
            />

            <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
              <span className="font-mono text-[11px] font-medium text-accent">
                {highlight.number}
              </span>

              <span
                aria-hidden="true"
                className="font-mono text-xs text-line"
              >
                —
              </span>

              <h3 className="font-heading text-base font-bold tracking-[-0.02em] text-ink transition-colors duration-200 group-hover:text-accent">
                {highlight.title}
              </h3>
            </div>

            <p className="mt-2.5 text-sm leading-6 text-muted">
              {highlight.description}
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
