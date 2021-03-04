// React
import React from "react";

// Framer motion
import { motion } from "framer-motion";

const IntegralIndex = () => {
  return (
    <motion.div
      className=""
      exit={{ opacity: 0, y: 30, transition: { type: "tween", duration: 0.3 } }}
    >
      integrales
      <div>xd</div>
    </motion.div>
  );
};

export default IntegralIndex;
