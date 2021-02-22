import { PRIMARY_COLOR } from "../../../config";

export const buttonHeaderVariants = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 200,
      type: "spring",
      mass: 0.4,
      damping: 8,
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { type: "tween", duration: 0.3 },
  },
};
export const sentenceVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { type: "tween", duration: 0.3 },
  },
};

export const buttonsContainerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { type: "tween", duration: 0.3 },
  },
};

export const letterVariants = {
  hidden: {
    scaleY: 0,
    originY: "100%",
    color: PRIMARY_COLOR,
  },
  visible: {
    scaleY: 1,
    originY: "100%",
    color: "#fff",
    transition: { type: "spring", stiffness: 200 },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { type: "tween", duration: 0.3 },
  },
};

export const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { type: "tween", delay: 0.5, duration: 1.2 },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { type: "tween", duration: 0.3 },
  },
};
