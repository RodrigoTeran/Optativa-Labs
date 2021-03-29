// React
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Framer motion
import { AnimatePresence } from "framer-motion";

// Functions
import { goto } from "../../functions/goTo";

// Hooks
import { useAnimatedNav } from "../../hooks/useAnimatedNav";

// Navs
import PortfolioNav from "./Navs/PortfolioNav";
import DiaSinInternetNav from "./Navs/DiaSinInternetNav";
import IntegralesNav from "./Navs/IntegralesNav";
import MCRNav from "./Navs/MCRNav";

const Nav = ({ aboutRef, workRef, contactRef, whyThisDayRef, whatIDid }) => {
  const [responsiveNav, setResponsiveNav] = useState(false);
  const openNav = useAnimatedNav(10, 50);

  // Location hook to know background layout
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const handleResize = () => {
    if (window.innerWidth > 960) {
      setResponsiveNav(false);
    }
  };
  const _goto = (where) => {
    goto(where);
    setResponsiveNav(false);
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {location.pathname === "/" ? null : location.pathname ===
        "/portafolio" ? (
        <PortfolioNav
          openNav={openNav}
          aboutRef={aboutRef}
          workRef={workRef}
          contactRef={contactRef}
          responsiveNav={responsiveNav}
          _goto={_goto}
          setResponsiveNav={setResponsiveNav}
        ></PortfolioNav>
      ) : location.pathname === "/dia-sin-internet" ? (
        <DiaSinInternetNav
          openNav={openNav}
          whyThisDayRef={whyThisDayRef}
          whatIDid={whatIDid}
          responsiveNav={responsiveNav}
          _goto={_goto}
          setResponsiveNav={setResponsiveNav}
        ></DiaSinInternetNav>
      ) : location.pathname === "/integrales" ||
        location.pathname === "/fotos" ||
        location.pathname === "/javascript" ? (
        <IntegralesNav
          openNav={openNav}
          responsiveNav={responsiveNav}
          setResponsiveNav={setResponsiveNav}
        ></IntegralesNav>
      ) : location.pathname === "/my-chemical-romance" ? (
        <MCRNav
          openNav={openNav}
          responsiveNav={responsiveNav}
          setResponsiveNav={setResponsiveNav}
        ></MCRNav>
      ) : null}
    </AnimatePresence>
  );
};
export default Nav;
