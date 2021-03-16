// React
import React from "react";

// framer motion
import { motion } from "framer-motion";

const MCRDiscografia = ({ returnInfo }) => {
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
      className="headerMCR__dis"
      key="1"
    >
      <div className="headerMCR__dis__header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          onClick={returnInfo}
        >
          <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
        </svg>
        <h2>Discografía</h2>
      </div>
      <div className="headerMCR__dis__header__columns">
        <div className="headerMCR__dis__header__columns__1">
          <div className="headerMCR__dis__principal">
            <h3>Álbumes de estudio principales</h3>
            <ul>
              <li>2002: I brought you my bullets, you brought me your love</li>
              <li>2004: Three cheers for sweet revenge</li>
              <li>2006: The Black Parade</li>
              <li>
                2010: Danger days: the true lives of the Fabulous Killjoys
              </li>
            </ul>
          </div>
          <div className="headerMCR__dis__principal">
            <h3>Otros álbumes de estudio</h3>
            <ul>
              <li>2013: Conventional weapons</li>
            </ul>
          </div>
        </div>
        <div className="headerMCR__dis__header__columns__2">
          <img src="images/gerard.png" alt="Gerard Way" />
        </div>
      </div>
    </motion.div>
  );
};
export default MCRDiscografia;
