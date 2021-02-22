// React
import { useLayoutEffect } from "react";

// Functions
import { getTop } from "../functions/goTo";

export const useAnimationsScroll = (
  listaComponentes,
  whereScreen,
  notAppearClass
) => {
  useLayoutEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const handleScroll = () => {
    try {
      for (var i = 0; i < listaComponentes.length; i++) {
        const top = getTop(listaComponentes[i].current);
        if (
          document.scrollingElement.scrollTop >=
          top - window.innerHeight / (whereScreen + 1)
        ) {
          // Remove class notAppear
          const htmlElement = listaComponentes[i].current;
          htmlElement.classList.remove(notAppearClass);
        }
      }
    } catch {}
  };
};
