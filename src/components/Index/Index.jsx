// React
import { Link } from "react-router-dom";
import React from "react";

// Framer motion
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      className="indexPage"
      initial={{
        y: 30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { type: "string", duration: 0.5, stiffness: 200 },
      }}
      exit={{ opacity: 0, y: 30, transition: { type: "tween", duration: 0.3 } }}
    >
      <h1>LABORATORIOS DE OPTATIVA</h1>
      <ul>
        <li>
          <h2>
            <Link to="/portafolio">
              <div>Lab 1: Portafolio</div>
            </Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/dia-sin-internet">
              <div>Lab 2: Un día sin Internet</div>
            </Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/integrales">
              <div>Lab 3: Sólidos de Revolución</div>
            </Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/my-chemical-romance">
              <div>Lab 4: My Chemical Romance</div>
            </Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/fotos">
              <div>Lab 5: Galería de Fotos</div>
            </Link>
          </h2>
        </li>
      </ul>
    </motion.div>
  );
};
export default Index;
