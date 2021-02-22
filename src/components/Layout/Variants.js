export const containerNavbarVariants = {
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
    transition: { type: "tween", duration: .3 },
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
    transition: { type: "tween", duration: .3 },
  },
};
