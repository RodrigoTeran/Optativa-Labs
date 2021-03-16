// React
import React from "react";

// framer motion
import { motion } from "framer-motion";

const MCRBiografia = ({ returnInfo }) => {
  const infoMap = [
    {
      name: "Gerard Way",
      foto: "images/mcr_1.jpg",
    },
    {
      name: "Ray Toro",
      foto: "images/mcr_5.jpg",
    },
    {
      name: "Pete parada",
      foto: "images/mcr_4.jpg",
    },
    {
      name: "Frank lero",
      foto: "images/mcr_3.png",
    },
    {
      name: "Bob Bryar",
      foto: "images/mcr_2.jpg",
    },
  ];
  return (
    <motion.div
      exit={{
        opacity: 0,
        y: 30,
        transition: { type: "tween", duration: 0.3 },
      }}
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
      className="headerMCR__bio"
      key="1"
    >
      <div className="headerMCR__bio__header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          onClick={returnInfo}
        >
          <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
        </svg>
        <h2>Biografía</h2>
      </div>

      <p>
        My Chemical Romance es una banda estadounidense de rock, formada en el
        año 2001 en el estado de Nueva Jersey,
      </p>
      <p>
        Su estilo musical ha sido asociado a los géneros rock, punk, pop punk,
        post-hardcore.
      </p>
      <div className="headerMCR__bio__integrants">
        <h3>Integrantes</h3>
        <div className="headerMCR__bio__integrants__fotos">
          {infoMap.map((person, index) => {
            return (
              <div key={index} className="headerMCR__bio__integrants__fotos__card">
                <img src={person.foto} alt="" />
                <div>{person.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
export default MCRBiografia;
