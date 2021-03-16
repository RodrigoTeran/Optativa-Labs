// React
import React from "react";

// Framer motion
import { motion } from "framer-motion";

const MCRHeader = ({ children }) => {
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
      className="headerMCR"
      style={{
        backgroundImage: "url(images/mcr.jpg)",
      }}
    >
      {children}
    </motion.div>
  );
};
export default MCRHeader;
