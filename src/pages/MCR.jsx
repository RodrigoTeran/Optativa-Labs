// React
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

// Components
import IndexComponent from "../components/MCR/IndexComponent";

const MCR = () => {
  useEffect(() => {
    document.querySelector("body").style.overflowY = "hidden";
    return () => {
      document.querySelector("body").style.overflowY = "visible";
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>My Chemical Romance</title>
        <meta name="description" content={`My Chemical Romance`} />
      </Helmet>
      <IndexComponent></IndexComponent>
    </>
  );
};
export default MCR;
