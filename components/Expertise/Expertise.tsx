"use client";

import { MotionConfig, motion } from "framer-motion";
import { expertiseData } from "@/data/expertise";
import ExpertiseShowcase from "./ExpertiseShowcase";
import {
  expertiseHeaderVariants,
  fadeUpVariants,
  headingLineVariants,
} from "./motion";

export default function Expertise() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="expertise"
        aria-labelledby="expertise-title"
        className="section-anchor relative bg-canvas py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
        />

        <div className="container-page">
          <motion.div
            variants={expertiseHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col gap-7 border-b border-line pb-10 md:flex-row md:items-end md:justify-between md:gap-12 lg:pb-12"
          >
            <div>
              <motion.p
                variants={fadeUpVariants}
                className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-muted"
              >
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                {expertiseData.label}
              </motion.p>

              <motion.h2
                id="expertise-title"
                className="mt-6 font-heading text-[2.45rem] font-extrabold leading-[1.02] tracking-[-0.055em] text-ink sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
              >
                <span aria-hidden="true" className="block overflow-hidden pb-1">
                  <motion.span variants={headingLineVariants} className="block">
                    {expertiseData.heading}
                  </motion.span>
                </span>
                <span className="sr-only">{expertiseData.heading}</span>
              </motion.h2>
            </div>

            <motion.p
              variants={fadeUpVariants}
              className="max-w-[430px] border-t border-line pt-6 text-sm leading-7 text-muted sm:text-[15px] md:border-t-0 md:pt-0"
            >
              {expertiseData.subtitle}
            </motion.p>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:mt-12 lg:gap-8">
            {expertiseData.categories.map((category) => (
              <ExpertiseShowcase key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
