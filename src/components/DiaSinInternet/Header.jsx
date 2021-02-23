// React
import React from "react";

// Framer motion
import { motion } from "framer-motion";

// Variants
import {
  containerHeaderVariants,
  elementsHeaderVariants,
  buttonHeaderVariants,
} from "./Variants";

const Header = () => {
  return (
    <motion.div
      variants={containerHeaderVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
      className="dayWithoutComputer__header"
    >
      <motion.div
        variants={elementsHeaderVariants}
        className="dayWithoutComputer__header__svgContainer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z" />
        </svg>
      </motion.div>
      <motion.h1 variants={elementsHeaderVariants}>
        Mi día de descanso de la tecnología
      </motion.h1>
      <motion.h2 variants={elementsHeaderVariants}>
        Por Rodrigo Terán Hernández
      </motion.h2>
      <motion.button
        animate="visible"
        initial="hidden"
        exit="exit"
        whileHover="hover"
        variants={buttonHeaderVariants}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
        </svg>
      </motion.button>
      <motion.span variants={elementsHeaderVariants}>Continuar</motion.span>
    </motion.div>
  );
};
export default Header;
