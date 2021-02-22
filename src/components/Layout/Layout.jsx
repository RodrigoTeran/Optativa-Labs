// React
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Hooks
import { useAnimationBlocks } from "../../hooks/useAnimationBlocks";

// Framer motion
import { motion, AnimatePresence } from "framer-motion";

const generateListOfBlocks = (howMany) => {
  var array = new Array([]);
  for (var i = 0; i < howMany; i++) {
    array.push(i);
  }
  return array;
};

const Layout = () => {
  // Location hook to know background layout
  const location = useLocation();

  // Generate List of all blocks
  const [arrayBlocksIndexPage, setArrayBlocksIndexPage] = useState([]);
  useEffect(() => {
    setArrayBlocksIndexPage(generateListOfBlocks(200));
  }, []);

  // Animate Blocks
  useAnimationBlocks("layoutContainer__block", 3000);

  return (
    <div className="layoutContainer">
      <AnimatePresence exitBeforeEnter>
        {location.pathname === "/portafolio" ? (
          <>
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: "tween", duration: 1 },
              }}
              exit={{
                opacity: 0,
                y: 30,
                transition: { type: "tween", duration: 0.3 },
              }}
              className="layoutContainer__svg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" />
              </svg>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: "tween", duration: 1 },
              }}
              exit={{
                opacity: 0,
                y: 30,
                transition: { type: "tween", duration: 0.3 },
              }}
              className="layoutContainer__circle"
            ></motion.div>
          </>
        ) : (
          <>
            {arrayBlocksIndexPage.map((_block, index) => {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: { type: "tween", duration: .3, delay: .3 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { type: "tween", duration: 0.3 },
                  }}
                  key={index}
                  className="layoutContainer__block"
                ></motion.div>
              );
            })}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Layout;
