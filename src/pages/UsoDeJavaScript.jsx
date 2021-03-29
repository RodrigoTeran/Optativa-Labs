// React
import React from "react";
import { Helmet } from "react-helmet";

// Components
import Index from "../components/UsoJavascript/Index";

const UsoDeJavaScript = () => {
  return (
    <>
      <Helmet>
        <title>Uso de Javascript</title>
        <meta name="description" content={`Uso de Javascript`} />
      </Helmet>
      <Index></Index>
    </>
  );
};
export default UsoDeJavaScript;
