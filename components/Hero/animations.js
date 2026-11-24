// Shared variants and looping animations used across the hero section.
export const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const textStaggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const profileRevealVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

export const circleOneAnimation = {
  animate: {
    y: [0, -18, 0],
    x: [0, 10, 0],
    opacity: [0.55, 0.8, 0.55],
  },
  transition: {
    duration: 6,
    delay: 0.1,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
};

export const circleTwoAnimation = {
  animate: {
    y: [0, 22, 0],
    x: [0, -14, 0],
    opacity: [0.4, 0.68, 0.4],
  },
  transition: {
    duration: 8,
    delay: 1.1,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
};

export const circleThreeAnimation = {
  animate: {
    y: [0, -24, 0],
    scale: [1, 1.1, 1],
    opacity: [0.4, 0.72, 0.4],
  },
  transition: {
    duration: 10,
    delay: 0.6,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
};

export const floatingBadgeAnimation = {
  animate: { y: [0, -8, 0] },
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
};

export const scrollArrowAnimation = {
  animate: { y: [0, 7, 0] },
  transition: {
    duration: 1.6,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
};
