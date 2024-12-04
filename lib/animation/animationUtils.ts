export const staggerParent = {
  variants: {
    onscreen: {
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  },
  initial: "offscreen",
  whileInView: "onscreen",
  viewport: { once: true },
};

export const leftToRightAnimation = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      bounce: 0.4,
      type: "spring",
      duration: 0.8,
    },
  },
};

export const rightToLeftAnimation = {
  offscreen: {
    x: 100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      bounce: 0.4,
      type: "spring",
      duration: 0.8,
    },
  },
};

export const topToBottomAnimation = {
  offscreen: {
    y: -100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      bounce: 0.4,
      type: "spring",
      duration: 0.8,
    },
  },
};

export const blurAnimation = {
  offscreen: {
    filter: "blur(10px)",
    opacity: 0,
  },
  onscreen: {
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.9,
    },
  },
};
