
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Atom, Database, Server } from "lucide-react";
import { heroData } from "@/data/heroData";
import BackgroundCircles from "./BackgroundCircles";
import HeroButtons from "./HeroButtons";
import ProfileImage from "./ProfileImage";
import {
  fadeUpVariants,
  heroContainerVariants,
  profileRevealVariants,
  scrollArrowAnimation,
  textStaggerVariants,
} from "./animations";

const techIcons = {
  atom: Atom,
  server: Server,
  database: Database,
};

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className="size-[18px]"
    >
      <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.92 3.19 9.09 7.62 10.56.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.23-5.07-5.49 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.22 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.27-2.61 5.2-5.09 5.48.4.34.75 1.02.75 2.06v3.05c0 .3.2.65.77.54a11.1 11.1 0 0 0 7.6-10.56C23.1 5.33 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className="size-[18px]"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-x-hidden bg-canvas pb-16 pt-24 sm:pt-28 lg:pt-32"
    >
      <BackgroundCircles />

      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
      >
        {/* Hero Content */}
        <motion.div
          variants={textStaggerVariants}
          className="order-2 mx-auto w-full max-w-2xl text-center lg:order-1 lg:mx-0 lg:max-w-none lg:text-left"
        >
          <motion.div
            variants={fadeUpVariants}
            className="flex items-center justify-center gap-3 lg:justify-start"
          >
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gradient-to-r from-transparent to-accent"
            />
            <p className="text-sm font-medium text-muted">
              {heroData.greeting}
            </p>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={fadeUpVariants}
            className="mt-5 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-ink sm:text-5xl lg:text-7xl"
          >
            <span className="sr-only">{heroData.fullName}</span>

            <span aria-hidden="true" className="block">
              {heroData.firstName}
            </span>

            <span
              aria-hidden="true"
              className="block bg-gradient-to-r from-accent via-accent to-accent bg-clip-text text-transparent"
            >
              {heroData.lastName}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="mt-5 text-sm font-semibold tracking-[0.08em] text-ink/75"
          >
            {heroData.role}
          </motion.p>

          <motion.p
            variants={fadeUpVariants}
            className="mt-5 max-w-2xl text-balance text-xl font-semibold leading-snug text-ink sm:text-2xl"
          >
            {heroData.headline}
          </motion.p>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base lg:mx-0"
          >
            {heroData.description}
          </motion.p>

          {/* Availability */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-6 flex justify-center lg:justify-start"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-ink/80 shadow-sm backdrop-blur">
              <span aria-hidden="true" className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>

              {heroData.availability}
            </span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={fadeUpVariants} className="mt-7">
            <HeroButtons />
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            {heroData.socials.map((social) => {
              const Icon = socialIcons[social.id];
              const opensNewTab = social.href.startsWith("http");

              if (!Icon) return null;

              return (
                <a
                  key={social.id}
                  href={social.href}
                  target={opensNewTab ? "_blank" : undefined}
                  rel={opensNewTab ? "noreferrer" : undefined}
                  aria-label={`${social.label}${opensNewTab ? " (opens in a new tab)" : ""}`}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface/60 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent focus-visible:outline-accent"
                >
                  <Icon />
                </a>
              );
            })}
          </motion.div>

          {/* Technology Chips */}
          <motion.ul
            variants={fadeUpVariants}
            aria-label={heroData.techChipsLabel}
            className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {heroData.techChips.map((chip) => {
              const Icon = techIcons[chip.icon] ?? Atom;

              return (
                <li
                  key={chip.id}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-3.5 text-accent"
                  />
                  {chip.label}
                </li>
              );
            })}
          </motion.ul>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={profileRevealVariants}
          className="order-1 w-full max-w-[280px] justify-self-center sm:max-w-[340px] lg:order-2 lg:max-w-[470px]"
        >
          <ProfileImage />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="relative z-10 mt-12 flex justify-center">
        <a
          href="#about"
          aria-label={heroData.scrollAriaLabel}
          className="group flex flex-col items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-muted transition-colors hover:text-ink focus-visible:outline-accent"
        >
          <span>{heroData.scrollIndicator}</span>

          <motion.span
            animate={
              shouldReduceMotion
                ? undefined
                : scrollArrowAnimation.animate
            }
            transition={scrollArrowAnimation.transition}
            className="grid size-8 place-items-center rounded-full border border-line bg-surface/60 transition-colors group-hover:border-accent/50 group-hover:text-accent"
          >
            <ArrowDown aria-hidden="true" className="size-4" />
          </motion.span>
        </a>
      </div>
    </section>
  );
}
