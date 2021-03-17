export const gridContainerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { type: "tween", duration: 0.3 },
  },
};

export const cardVariants = {
  hidden: {
    scaleY: 0,
    originY: "100%",
  },
  visible: {
    scaleY: 1,
    originY: "100%",
    transition: { type: "spring", stiffness: 100 },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { type: "tween", duration: 0.3 },
  },
};