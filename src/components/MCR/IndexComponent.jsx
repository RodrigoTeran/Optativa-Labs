// React
import React, { useState } from "react";

// Framer motion
import { motion, AnimatePresence } from "framer-motion";

// Components
import MCRHeader from "./MCRHeader";
import MCRBiografia from "./MCRBiografia";
import MCRDiscografia from "./MCRDiscografia";

const IndexComponent = () => {
  const [whatView, setWHatView] = useState(0);
  return (
    <div>
      <MCRHeader>
        <div className="headerMCR__info">
          <AnimatePresence exitBeforeEnter>
            {whatView === 0 ? (
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
                className="headerMCR__info__1"
                key="0"
              >
                <div>
                  <img
                    src="images/My_Chemical_Romance_logo.png"
                    alt="My_Chemical_Romance_logo"
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      setWHatView(1);
                    }}
                  >
                    Biografía
                  </button>
                  <button
                    onClick={() => {
                      setWHatView(2);
                    }}
                  >
                    Discografía
                  </button>
                  <button
                    onClick={() => {
                      setWHatView(3);
                    }}
                  >
                    Giras
                  </button>
                </div>
              </motion.div>
            ) : whatView === 1 ? (
              <MCRBiografia
                returnInfo={() => {
                  setWHatView(0);
                }}
              ></MCRBiografia>
            ) : whatView === 2 ? (
              <MCRDiscografia
                returnInfo={() => {
                  setWHatView(0);
                }}
              ></MCRDiscografia>
            ) : whatView === 3 ? (
              <MCRBiografia></MCRBiografia>
            ) : null}
          </AnimatePresence>
        </div>
      </MCRHeader>
    </div>
  );
};
export default IndexComponent;
