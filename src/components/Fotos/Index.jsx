// React
import React from "react";

// Framer motion
import { motion } from "framer-motion";
import { gridContainerVariants, cardVariants } from "./Variants";

const FotosIndex = () => {
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
      className="fotosContainer"
    >
      <h1>Galería de fotos</h1>
      <motion.div
        className="fotosContainer__grid"
        variants={gridContainerVariants}
        animate="visible"
        initial="hidden"
        exit="exit"
      >
        <motion.div
          className="fotosContainer__grid__card"
          variants={cardVariants}
        >
          <div className="fotosContainer__grid__card__content">
            <img src="images/galeria_%20(1).jpeg" alt="Foto de galería" />
            <span>Yo en una cabaña</span>
          </div>
        </motion.div>
        <motion.div
          className="fotosContainer__grid__card"
          variants={cardVariants}
        >
          <div className="fotosContainer__grid__card__content">
            <img src="images/galeria_%20(1).JPG" alt="Foto de galería" />
            <span>En el stanley park</span>
          </div>
        </motion.div>
        <motion.div
          className="fotosContainer__grid__card"
          variants={cardVariants}
        >
          <div className="fotosContainer__grid__card__content">
            <img src="images/galeria_%20(2).jpeg" alt="Foto de galería" />
            <span>Mi familia en Vancouver</span>
          </div>
        </motion.div>
        <motion.div
          className="fotosContainer__grid__card"
          variants={cardVariants}
        >
          <div className="fotosContainer__grid__card__content">
            <img src="images/galeria_%20(2).jpg" alt="Foto de galería" />
            <span>Stanley park</span>
          </div>
        </motion.div>
        <motion.div
          className="fotosContainer__grid__card"
          variants={cardVariants}
        >
          <div className="fotosContainer__grid__card__content">
            <img src="images/galeria_%20(3).jpeg" alt="Foto de galería" />
            <span>Mi papá y yo</span>
          </div>
        </motion.div>
        <motion.div
          className="fotosContainer__grid__card"
          variants={cardVariants}
        >
          <div className="fotosContainer__grid__card__content">
            <img src="images/galeria_%20(3).jpg" alt="Foto de galería" />
            <span>Yo en Vancouver</span>
          </div>
        </motion.div>
        <motion.div
          className="fotosContainer__grid__card"
          variants={cardVariants}
        >
          <div className="fotosContainer__grid__card__content">
            <img src="images/galeria_%20(4).jpeg" alt="Foto de galería" />
            <span>El crucero</span>
          </div>
        </motion.div>
        <motion.div
          className="fotosContainer__grid__card"
          variants={cardVariants}
        >
          <div className="fotosContainer__grid__card__content">
            <img src="images/galeria_%20(5).jpeg" alt="Foto de galería" />
            <span>Una lancha</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FotosIndex;
