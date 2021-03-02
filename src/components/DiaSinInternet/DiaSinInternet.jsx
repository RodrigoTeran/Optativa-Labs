// React
import React from "react";

// Framer motion
import { motion } from "framer-motion";

// Components
import Header from "./Header";
import WhyThisDay from "./WhyThisDay";

const DiaSinInternet = ({ whyThisDayRef }) => {
  return (
    <motion.div
      exit={{ opacity: 0, y: 30, transition: { type: "tween", duration: 0.3 } }}
      className="dayWithoutComputer"
    >
      <Header
        // Refs
        whyThisDayRef={whyThisDayRef}
      ></Header>
      <WhyThisDay
        // Refs
        whyThisDayRef={whyThisDayRef}
      ></WhyThisDay>
    </motion.div>
  );
};
export default DiaSinInternet;
