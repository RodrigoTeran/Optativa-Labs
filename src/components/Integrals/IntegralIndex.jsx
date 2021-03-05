// React
import React from "react";

// Framer motion
import { motion } from "framer-motion";

const IntegralIndex = () => {
  const arrayImages = [
    "1.png",
    "5.png",
    "2.png",
    "3.png",
    "4.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
    "14.png",
    "13.png",
    "15.png",
    "17.png",
    "18.png",
    "19.png",
    "20.png",
    "16.png",
    "5.png",
    "11.png",
    "12.png",
    "13.png",
    "14.png",
    "15.png",
    "16.png",
    "17.png",
    "18.png",
    "19.png",
    "20.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "0.png",
    "6.png",
    "2.png",
    "19.png",
    "4.png",
    "5.png",
    "17.png",
    "7.png",
    "8.png",
    "16.png",
    "1.png",
    "9.png",
    "3.png",
    "14.png",
    "10.png",
    "12.png",
    "15.png",
    "11.png",
    "13.png",
    "20.png",
    "18.png",
  ];
  return (
    <motion.div
      className="integralsBackGround"
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
    >
      {arrayImages.map((image, index) => {
        return (
          <div
            className="integralsBackGround__imageContainer"
            key={index}
            style={{
              backgroundImage: `url(images/fondo/${image})`,
              animationName: `anima_back_ground_${index}`,
            }}
          ></div>
        );
      })}
    </motion.div>
  );
};

export default IntegralIndex;
