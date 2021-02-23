export const containerHeaderVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { type: "tween", duration: 0.3 },
  },
  hover: {
    opacity: 1,
  },
};

export const elementsHeaderVariants = {
  hidden: {
    scaleY: 0,
    originY: "100%",
  },
  visible: {
    scaleY: 1,
    originY: "100%",
    transition: { type: "spring", stiffness: 200 },
  },
  exit: {
    opacity: 0,
    transition: { type: "tween", duration: 0.3 },
  },
  hover: {
    opacity: 1,
  },
};
export const buttonHeaderVariants = {
  hidden: {
    scaleY: 0,
    originY: "100%",
  },
  visible: {
    scaleY: 1,
    originY: "100%",
    transition: { type: "spring", stiffness: 200, delay: .75 },
  },
  exit: {
    opacity: 0,
    transition: { type: "tween", duration: 0.3 },
  },
  hover: {
    rotateZ: 90,
    originY: "50%",
    scale: 1.2,
    transition: { type: "spring", stiffness: 200 },
  },
};
