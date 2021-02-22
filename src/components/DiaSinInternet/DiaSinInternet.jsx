// React
import React from "react";

// Framer motion
import { motion } from "framer-motion";

const DiaSinInternet = () => {
  return (
    <motion.div
      exit={{ opacity: 0, y: 30, transition: { type: "tween", duration: 0.3 } }}
    >
      xd
    </motion.div>
  );
};
export default DiaSinInternet;
