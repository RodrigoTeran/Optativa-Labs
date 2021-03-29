// React
import { motion } from "framer-motion";
import React, { useState } from "react";

import WebGL from "./WebGL";
import WebGL2 from "./WebGL2";
import WebGL3 from "./WebGL3";

const Index = () => {
  const [number, setNumber] = useState(0);

  return (
    <motion.div
      exit={{
        opacity: 0,
        y: 30,
        transition: { type: "tween", duration: 0.3 },
      }}
      className="usoJavascript"
    >
      <div className="usoJavascript__animationsContainer">
        {number === 0 ? (
          <WebGL></WebGL>
        ) : number === 1 ? (
          <WebGL2></WebGL2>
        ) : (
          <WebGL3></WebGL3>
        )}
      </div>
      <div className="usoJavascript__sectionsContainer">
        <button
          onClick={() => {
            setNumber(0);
          }}
        >
          Efecto 1
        </button>
        <button
          onClick={() => {
            setNumber(1);
          }}
        >
          Efecto 2
        </button>{" "}
        <button
          onClick={() => {
            setNumber(2);
          }}
        >
          Efecto 3
        </button>
      </div>
    </motion.div>
  );
};
export default Index;
