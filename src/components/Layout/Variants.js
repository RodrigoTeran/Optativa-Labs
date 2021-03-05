export const containerNavbarVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.1,
      when: "beforeChildren",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { type: "tween", duration: 0.3 },
  },
};
export const containerNavbarBlurVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.9,
    transition: {
      delay: 0.3,
      staggerChildren: 0.1,
      when: "beforeChildren",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { type: "tween", duration: 0.3 },
  },
};
export const containerNavbarBlurWhiteVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.5,
    transition: {
      delay: 0.3,
      staggerChildren: 0.1,
      when: "beforeChildren",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { type: "tween", duration: 0.3 },
  },
};
export const elementNavbarVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200 },
  },
  exit: {
    opacity: 0,
    transition: { type: "tween", duration: 0.3 },
  },
};
