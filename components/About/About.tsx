"use client";

import { MotionConfig, motion } from "framer-motion";
import { aboutSectionVariants } from "./motion";
import AboutHighlights from "./AboutHighlights";
import AboutIntro from "./AboutIntro";
import AboutProfile from "./AboutProfile";

export default function About() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="about"
        aria-labelledby="about-title"
        className="section-anchor relative overflow-hidden bg-canvas py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
        />

        <div className="container-page">
          <motion.div
            variants={aboutSectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20"
          >
            <AboutIntro />
            <AboutProfile />
          </motion.div>

          <AboutHighlights />
        </div>
      </section>
    </MotionConfig>
  );
}
