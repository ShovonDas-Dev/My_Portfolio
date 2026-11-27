// Every Framer Motion variant for the Featured Projects section.
// Only opacity and transform (y / scale) are animated.

// Generic fade + slide used for the header, list items and buttons.
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

// Parent that reveals its children one after another.
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// Cross-fade with a slight slide — used by AnimatePresence (mode="wait")
// so the screenshot and details swap smoothly when the selection changes.
export const swapContent = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// Gentle up/down float for the browser mockup.
// "rest" is used when the user prefers reduced motion (no loop).
export const floatLoop = {
  rest: { y: 0 },
  float: {
    y: [0, -10, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

// Button micro-interaction: slight scale up on hover, down on press.
export const buttonPress = {
  hover: { scale: 1.05 },
  tap: { scale: 0.97 },
};
