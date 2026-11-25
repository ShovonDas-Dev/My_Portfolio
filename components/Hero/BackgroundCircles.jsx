
"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export default function BackgroundCircles() {
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useSpring(mouseX, {
    stiffness: 55,
    damping: 18,
  });

  const parallaxY = useSpring(mouseY, {
    stiffness: 55,
    damping: 18,
  });

  useEffect(() => {
    const canUseParallax =
      !shouldReduceMotion &&
      window.matchMedia("(pointer: fine)").matches;

    if (!canUseParallax) {
      mouseX.set(0);
      mouseY.set(0);
      return;
    }

    const handlePointerMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 14;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 14;

      mouseX.set(-x);
      mouseY.set(-y);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () =>
      window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  const circles = [
    {
      size: 360,
      duration: 9,
      delay: 0,
    },
    {
      size: 480,
      duration: 12,
      delay: 1,
    },
    {
      size: 600,
      duration: 15,
      delay: 2,
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <motion.div
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
        className="absolute left-[-60px] top-[45%]"
      >
        {circles.map((circle, index) => (
          <motion.div
            key={circle.size}
            className="absolute rounded-full border border-white/[0.12]"
            style={{
              width: circle.size,
              height: circle.size,
              left: -circle.size / 2,
              top: -circle.size / 2,
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.025, 1],
                    opacity: [0.55, 1, 0.55],
                  }
            }
            transition={{
              duration: circle.duration,
              delay: circle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
