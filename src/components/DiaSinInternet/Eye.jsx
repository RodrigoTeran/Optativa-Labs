// React
import React, { useEffect, useRef, useState } from "react";

// Functions
import {
  calculateDistance,
  calculateDistanceX,
  calculateDistanceY,
} from "../../functions/distances";

// Hooks
import { useAnimationsScroll } from "../../hooks/useAnimationsScroll";

const Eye = () => {
  // Ref of pupile
  const eye = useRef(null);
  const pupile = useRef(null);

  // Pupiles state
  const [pupileX, setPupileX] = useState(0);
  const [pupileY, setPupileY] = useState(0);

  useAnimationsScroll([eye], 0.5, "notAppear");

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const handlePupileMovement = (elem, mouseX, mouseY, hypothenuse) => {
    var x = calculateDistanceX(elem, mouseX);
    var y = calculateDistanceY(elem, mouseY);
    var radio = window.innerWidth < 440 ? 5 : 13;

    if (hypothenuse <= radio) {
      radio = 0;
    }

    var xRatio = (radio / hypothenuse) * x;
    var yRatio = (radio / hypothenuse) * y;
    setPupileX(xRatio);
    setPupileY(yRatio);
  };
  const handleMouseMove = (e) => {
    var mX = e.pageX;
    var mY = e.pageY;
    var distance = calculateDistance(pupile.current, mX, mY);
    handlePupileMovement(pupile.current, mX, mY, distance);
  };
  return (
    <div ref={eye} className="whyThisDay__eye__relative notAppear">
      <div className="whyThisDay__eye"></div>
      <div
        className="whyThisDay__eye__pupile"
        style={{
          transform: `translateX(${pupileX}px) translateY(${pupileY}px) rotate(-45deg)`,
        }}
        ref={pupile}
      ></div>
    </div>
  );
};
export default Eye;
