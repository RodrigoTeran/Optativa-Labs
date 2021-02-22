// React
import { Link } from "react-router-dom";
import React from "react";

// Framer motion
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      className="indexPage"
      exit={{ opacity: 0, y: 30, transition: { type: "tween", duration: 0.3 } }}
    >
      <h1>LABORATORIOS DE OPTATIVA</h1>
      <ul>
        <li>
          <h2>
            <Link to="/portafolio">
              <div>Lab - 1: Portafolio</div>
            </Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/portafolio">
              <div>Lab - 2: Un día sin Internet</div>
            </Link>
          </h2>
        </li>
      </ul>
    </motion.div>
  );
};
export default Index;
