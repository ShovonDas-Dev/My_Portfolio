import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { floatLoop } from "./animations";

// Browser-frame mockup that shows the selected project's screenshot.
// The parent remounts this component on selection change, so the
// image error state naturally resets for each project.
export default function ProjectPreview({ project }) {
  const reduceMotion = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Hover lift is desktop-only (matchMedia avoids touch "hover" quirks).
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    // Outer motion: gentle float loop (static when motion is reduced).
    <motion.div
      variants={floatLoop}
      initial={false}
      animate={reduceMotion ? "rest" : "float"}
    >
      {/* Inner motion: subtle lift on desktop hover only. */}
      <motion.div
        whileHover={isDesktop && !reduceMotion ? { y: -6 } : undefined}
        className="rounded-2xl bg-gradient-to-br from-accent/70 via-line to-line/40 p-px shadow-[var(--shadow)]"
      >
        <div className="overflow-hidden rounded-2xl bg-surface">
          {/* Fake browser chrome */}
          <div className="flex items-center gap-2 border-b border-line bg-surface-soft px-4 py-3">
            <span aria-hidden="true" className="size-2.5 rounded-full bg-muted/40" />
            <span aria-hidden="true" className="size-2.5 rounded-full bg-muted/40" />
            <span aria-hidden="true" className="size-2.5 rounded-full bg-muted/40" />
            <span className="ml-2 truncate font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              {project.title}
            </span>
          </div>

          {/* Screenshot (or placeholder if the image file is missing) */}
          <div className="relative aspect-video bg-surface-soft">
            {failed ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-soft via-surface to-accent-soft p-6 text-center">
                <span className="font-heading text-lg font-bold text-muted sm:text-xl">
                  {project.title}
                </span>
              </div>
            ) : (
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-top"
                onError={() => setFailed(true)}
              />
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
