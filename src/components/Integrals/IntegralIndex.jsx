// React
import React from "react";

// Framer motion
import { motion } from "framer-motion";

// Components
import BackGround from "./BackGround";
import Rules from "./Rules";

const IntegralIndex = () => {
  return (
    <motion.div
      exit={{ opacity: 0, y: 30, transition: { type: "tween", duration: 0.3 } }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.3 },
      }}
      initial={{
        opacity: 0,
        y: 30,
        transition: { type: "tween", duration: 0.3 },
      }}
    >
      <BackGround></BackGround>
      <Rules></Rules>
    </motion.div>
  );
};

export default IntegralIndex;
