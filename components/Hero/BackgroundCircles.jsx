"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  circleOneAnimation,
  circleThreeAnimation,
  circleTwoAnimation,
} from "./animations";

export default function BackgroundCircles() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(mouseX, { stiffness: 55, damping: 18 });
  const parallaxY = useSpring(mouseY, { stiffness: 55, damping: 18 });

  // Move the circles a few pixels opposite the pointer on mouse devices only.
  useEffect(() => {
    const canUseParallax =
      !shouldReduceMotion && window.matchMedia("(pointer: fine)").matches;

    if (!canUseParallax) {
      mouseX.set(0);
      mouseY.set(0);
      return;
    }

    const handlePointerMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 18;

      mouseX.set(-x);
      mouseY.set(-y);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  // Return motion props only when looping animations are allowed.
  const floatingProps = (animation) =>
    shouldReduceMotion
      ? {}
      : { animate: animation.animate, transition: animation.transition };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute -left-24 top-24 h-64 w-64 sm:h-80 sm:w-80 lg:-left-24 lg:top-28 lg:h-[26rem] lg:w-[26rem]"
      >
        <motion.div
          {...floatingProps(circleOneAnimation)}
          className="h-full w-full rounded-full bg-gradient-to-br from-[#c04a8f]/60 via-[#7b2d6e]/35 to-transparent blur-2xl will-change-transform sm:blur-3xl lg:blur-[90px]"
        />
      </motion.div>

      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute -left-16 bottom-16 h-52 w-52 sm:h-64 sm:w-64 lg:left-24 lg:bottom-20 lg:h-80 lg:w-80"
      >
        <motion.div
          {...floatingProps(circleTwoAnimation)}
          className="h-full w-full rounded-full bg-gradient-to-tr from-[#4a1d4f]/70 via-[#c04a8f]/25 to-transparent blur-2xl will-change-transform sm:blur-3xl lg:blur-[100px]"
        />
      </motion.div>

      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute -right-24 top-1/3 h-72 w-72 sm:h-96 sm:w-96 lg:-right-16 lg:top-[30%] lg:h-[34rem] lg:w-[34rem]"
      >
        <motion.div
          {...floatingProps(circleThreeAnimation)}
          className="h-full w-full rounded-full bg-gradient-to-br from-[#7b2d6e]/45 via-[#c04a8f]/20 to-transparent blur-2xl will-change-transform sm:blur-3xl lg:blur-[110px]"
        />
      </motion.div>
    </div>
  );
}
