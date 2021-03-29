// React
import React, { useState, useRef } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

// Framer motion
import { AnimatePresence } from "framer-motion";

// Components App
import Layout from "./components/Layout/Layout";
import Nav from "./components/Layout/Nav";
import LayoutMsg from "./components/Layout/LayoutMsg";
import LayoutLoader from "./components/Layout/LayoutLoader";

// Pages
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import DiaSinInternet from "./pages/DiaSinInternet";
import Integrals from "./pages/Integrals";
import MCR from "./pages/MCR";
import Fotos from "./pages/Fotos";
import UsoDeJavaScript from "./pages/UsoDeJavaScript";

const App = () => {
  // LayoutMsg
  const [isLayoutMsgInLayout, setIsLayoutMsgInLayout] = useState(false);
  const [backgroundColorLayoutMsg, setBackgroundColorLayoutMsg] = useState("");
  const [textColorLayoutMsg, setTextColorLayoutMsg] = useState("");
  const [titleLayoutMsg, setTitleLayoutMsg] = useState("");
  const [textLayoutMsg, setTextLayoutMsg] = useState("");

  // LayoutLoader
  const [isInLayoutLoader, setIsInLayoutLoader] = useState(false);

  // Location hook for AnimatePresence animations
  const location = useLocation();

  // Portfolio page
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  // Lab 2 page
  const whyThisDayRef = useRef(null);
  const whatIDid = useRef(null);

  return (
    <>
      <Layout></Layout>
      <Nav
        // Refs
        aboutRef={aboutRef}
        workRef={workRef}
        contactRef={contactRef}
        whyThisDayRef={whyThisDayRef}
        whatIDid={whatIDid}
      ></Nav>
      <LayoutMsg
        isInLayout={isLayoutMsgInLayout}
        backgroundColor={backgroundColorLayoutMsg}
        textColor={textColorLayoutMsg}
        title={titleLayoutMsg}
        text={textLayoutMsg}
        setIsInLayout={setIsLayoutMsgInLayout}
      ></LayoutMsg>
      <LayoutLoader isInLayout={isInLayoutLoader}></LayoutLoader>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Index></Index>
          </Route>

          <Route exact path="/portafolio">
            <Portfolio
              // Layout MSG
              setIsInLayout={setIsLayoutMsgInLayout}
              setBackgroundColor={setBackgroundColorLayoutMsg}
              setTextColor={setTextColorLayoutMsg}
              setTitle={setTitleLayoutMsg}
              setText={setTextLayoutMsg}
              setIsInLayoutLoader={setIsInLayoutLoader}
              // Refs
              aboutRef={aboutRef}
              workRef={workRef}
              contactRef={contactRef}
            ></Portfolio>
          </Route>

          <Route exact path="/dia-sin-internet">
            <DiaSinInternet
              // Refs
              whyThisDayRef={whyThisDayRef}
              whatIDid={whatIDid}
            ></DiaSinInternet>
          </Route>

          <Route exact path="/my-chemical-romance">
            <MCR></MCR>
          </Route>

          <Route exact path="/integrales">
            <Integrals></Integrals>
          </Route>

          <Route exact path="/fotos">
            <Fotos></Fotos>
          </Route>

          <Route exact path="/javascript">
            <UsoDeJavaScript></UsoDeJavaScript>
          </Route>

          <Route path="/">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};
export default App;
