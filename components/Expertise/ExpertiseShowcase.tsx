"use client";

import { motion } from "framer-motion";
import type { ExpertiseCategory, Technology } from "@/data/expertise";
import TechnologyIcon from "./TechnologyIcon";
import TechnologyItem from "./TechnologyItem";
import {
  fadeUpVariants,
  headingLineVariants,
  showcaseVariants,
  techItemVariants,
} from "./motion";

type ExpertiseShowcaseProps = {
  category: ExpertiseCategory;
};

type ShowcaseVisualProps = {
  technologies: Technology[];
};

const primaryHeadlineSize =
  "text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[3rem]";

const standardHeadlineSize =
  "text-xl sm:text-2xl md:text-[1.75rem] lg:text-[2.1rem] xl:text-[2.35rem]";

const tileHoverClasses =
  "transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_10px_28px_rgba(192,74,143,0.14)]";

export default function ExpertiseShowcase({
  category,
}: ExpertiseShowcaseProps) {
  const isPrimary = category.id === "frontend";
  const isReversed = Number(category.number) % 2 === 0;

  return (
    <motion.article
      variants={showcaseVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      aria-labelledby={`${category.id}-title`}
      className="group border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow)]"
    >
      <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
        <div
          aria-hidden="true"
          className={`relative overflow-hidden border-b border-line bg-surface-soft lg:border-b-0 ${
            isReversed ? "lg:order-2 lg:border-l" : "lg:order-1 lg:border-r"
          }`}
        >
          <ShowcaseVisual category={category} />
        </div>

        <div
          className={`flex flex-col justify-center gap-4 p-6 sm:gap-5 sm:p-8 lg:p-10 xl:p-12 ${
            isReversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <motion.div
            variants={techItemVariants}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-[11px] font-medium text-accent">
              {category.number}
            </span>
            <span aria-hidden="true" className="h-px w-7 bg-line" />
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
              {category.title}
            </p>
          </motion.div>

          <h3
            id={`${category.id}-title`}
            className={`font-heading font-extrabold leading-[1.08] tracking-[-0.05em] text-ink ${
              isPrimary ? primaryHeadlineSize : standardHeadlineSize
            }`}
          >
            <span aria-hidden="true" className="block overflow-hidden pb-1">
              <motion.span variants={headingLineVariants} className="block">
                {category.headline}
              </motion.span>
            </span>
            <span className="sr-only">{category.headline}</span>
          </h3>

          <motion.p
            variants={fadeUpVariants}
            className="max-w-lg text-sm leading-7 text-muted sm:text-[15px]"
          >
            {category.description}
          </motion.p>

          <ul className="flex flex-wrap gap-x-5 gap-y-4 border-t border-line pt-5">
            {category.technologies.map((technology) => (
              <motion.li key={technology.id} variants={techItemVariants}>
                <TechnologyItem
                  technology={technology}
                  size={isPrimary ? "md" : "lg"}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

function ShowcaseVisual({ category }: { category: ExpertiseCategory }) {
  switch (category.id) {
    case "frontend":
      return <FrontendVisual technologies={category.technologies} />;
    case "backend":
      return <BackendVisual technologies={category.technologies} />;
    case "animation":
      return <AnimationVisual technologies={category.technologies} />;
    case "workflow":
      return <WorkflowVisual technologies={category.technologies} />;
    default:
      return null;
  }
}

function FrontendVisual({ technologies }: ShowcaseVisualProps) {
  const [hero, ...others] = technologies;

  if (!hero) {
    return null;
  }

  return (
    <div
      className="relative flex min-h-[300px] flex-col p-4 sm:min-h-[340px] sm:p-6 lg:min-h-[440px] lg:p-7"
      style={{
        backgroundImage:
          "radial-gradient(60% 50% at 85% 10%, var(--accent-soft), transparent 70%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      <div className="relative grid flex-1 grid-cols-4 grid-rows-3 gap-2.5 sm:gap-3">
        <motion.div
          variants={techItemVariants}
          className={`col-span-2 row-span-3 flex flex-col items-center justify-center gap-4 border border-line bg-canvas/85 ${tileHoverClasses} hover:-translate-y-1`}
        >
          <TechnologyIcon
            id={hero.icon}
            className="size-14 sm:size-16 lg:size-20"
          />
          <span className="text-center font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-muted sm:text-[10px]">
            {hero.name}
          </span>
        </motion.div>

        {others.map((technology) => (
          <motion.div
            key={technology.id}
            variants={techItemVariants}
            className={`grid place-items-center border border-line bg-canvas/85 ${tileHoverClasses}`}
          >
            <TechnologyIcon
              id={technology.icon}
              className="size-6 transition-transform duration-300 group-hover:scale-105 sm:size-7"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BackendVisual({ technologies }: ShowcaseVisualProps) {
  return (
    <div
      className="relative flex min-h-[260px] items-center justify-center px-6 py-8 sm:min-h-[300px] sm:px-8 lg:min-h-[360px]"
      style={{
        backgroundImage:
          "radial-gradient(85% 70% at 50% 125%, var(--accent-soft), transparent 70%)",
      }}
    >
      <span className="pointer-events-none absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line sm:size-56" />
      <span className="pointer-events-none absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-line sm:size-80" />

      <div className="relative grid w-full max-w-[320px] gap-3 sm:gap-4">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.id}
            variants={techItemVariants}
            className={`flex items-center gap-3.5 border border-line bg-canvas px-4 py-4 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 sm:px-5 ${
              index % 2 === 1 ? "translate-x-5 sm:translate-x-8" : ""
            }`}
          >
            <span className="grid size-11 shrink-0 place-items-center border border-line bg-surface text-ink">
              <TechnologyIcon
                id={technology.icon}
                className="size-5 sm:size-6"
              />
            </span>
            <span className="font-heading text-sm font-bold tracking-[-0.02em] text-ink sm:text-base">
              {technology.name}
            </span>
            <span className="ml-auto font-mono text-[10px] font-medium text-accent">
              0{index + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AnimationVisual({ technologies }: ShowcaseVisualProps) {
  return (
    <div
      className="relative flex min-h-[260px] items-center justify-center px-6 py-8 sm:min-h-[300px] lg:min-h-[360px]"
      style={{
        backgroundImage:
          "radial-gradient(75% 65% at 25% 12%, var(--accent-soft), transparent 70%)",
      }}
    >
      <svg
        viewBox="0 0 420 260"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <path
          d="M8 230 C 110 230, 130 70, 220 70 S 340 210, 412 30"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeDasharray="9 11"
        />
        <circle
          cx="220"
          cy="70"
          r="5.5"
          fill="var(--accent)"
          opacity="0.75"
        />
        <circle
          cx="220"
          cy="70"
          r="15"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.35"
        />
        <rect
          x="112"
          y="146"
          width="9"
          height="9"
          fill="var(--accent)"
          opacity="0.5"
        />
        <rect
          x="319"
          y="114"
          width="9"
          height="9"
          fill="var(--accent)"
          opacity="0.4"
        />
      </svg>

      <div className="relative flex flex-col items-center gap-4">
        {technologies.map((technology) => (
          <motion.div
            key={technology.id}
            variants={techItemVariants}
            className="flex flex-col items-center gap-4"
          >
            <span className="grid size-20 place-items-center border border-line bg-canvas shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 sm:size-24">
              <TechnologyIcon
                id={technology.icon}
                className="size-10 sm:size-12"
              />
            </span>
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
              {technology.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WorkflowVisual({ technologies }: ShowcaseVisualProps) {
  return (
    <div
      className="relative flex min-h-[260px] flex-col items-center justify-center gap-5 px-6 py-8 sm:min-h-[300px] sm:gap-6 sm:px-8 lg:min-h-[360px]"
      style={{
        backgroundImage:
          "radial-gradient(80% 65% at 75% 0%, var(--accent-soft), transparent 70%)",
      }}
    >
      <div className="flex items-center gap-3">
        {technologies.map((technology) => (
          <motion.span
            key={technology.id}
            variants={techItemVariants}
            className={`grid size-12 place-items-center border border-line bg-canvas sm:size-14 ${tileHoverClasses}`}
          >
            <TechnologyIcon
              id={technology.icon}
              className="size-6 sm:size-7"
            />
          </motion.span>
        ))}
      </div>

      <motion.div
        variants={techItemVariants}
        className="w-full max-w-[400px] border border-line bg-canvas shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:scale-[1.02]"
      >
        <div className="flex h-7 items-center gap-1.5 border-b border-line bg-surface px-3">
          <span className="size-[5px] rounded-full bg-muted/40" />
          <span className="size-[5px] rounded-full bg-muted/40" />
          <span className="size-[5px] rounded-full bg-muted/40" />
          <span className="ml-auto font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
            main
          </span>
        </div>
        <div className="space-y-1.5 px-4 py-3.5 font-mono text-[10px] leading-relaxed text-muted sm:text-[11px]">
          <p>
            <span className="text-accent">$</span> git add .
          </p>
          <p>
            <span className="text-accent">$</span> git commit -m
            &quot;ship features&quot;
          </p>
          <p className="text-ink/70">[main 9f3ac21] ship features</p>
          <p>
            <span className="text-accent">$</span> git push
          </p>
          <p className="text-ink/70">To github.com:ShovonDas-Dev/portfolio.git</p>
        </div>
      </motion.div>
    </div>
  );
}
