// React
import React from "react";

// Framer motion
import { motion } from "framer-motion";

// Components
import Header from "./Header";
import WhyThisDay from "./WhyThisDay";
import WhatIDid from "./WhatIDid";

const DiaSinInternet = ({ whyThisDayRef, whatIDid }) => {
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
      <WhatIDid whatIDid={whatIDid}></WhatIDid>
    </motion.div>
  );
};
export default DiaSinInternet;
