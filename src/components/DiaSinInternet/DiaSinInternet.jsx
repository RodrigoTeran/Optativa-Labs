// React
import React from "react";

// Framer motion
import { motion } from "framer-motion";

// Components
import Header from "./Header";

const DiaSinInternet = () => {
  return (
    <motion.div
      exit={{ opacity: 0, y: 30, transition: { type: "tween", duration: 0.3 } }}
      className="dayWithoutComputer"
    >
      <Header></Header>
    </motion.div>
  );
};
export default DiaSinInternet;
