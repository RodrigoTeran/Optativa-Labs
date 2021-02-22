import { useLayoutEffect, useCallback } from "react";

export const useAnimationBlocks = (classNameBlocks, intervalFromUser) => {
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const animateBlocks = useCallback(() => {
    const blocks = document.getElementsByClassName(classNameBlocks);
    for (var i = 0; i < blocks.length; i++) {
      const x = randomIntFromInterval(
        -window.innerWidth / 2,
        window.innerWidth / 2
      );
      const y = randomIntFromInterval(
        -window.innerHeight / 2,
        window.innerHeight / 2
      );
      const scale = randomIntFromInterval(1, 6);
      blocks[
        i
      ].style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`;
    }
  });

  useLayoutEffect(() => {
    animateBlocks();
    const interval = setInterval(() => {
      animateBlocks();
    }, intervalFromUser);
    return () => clearInterval(interval);
  }, [animateBlocks, intervalFromUser]);
};
