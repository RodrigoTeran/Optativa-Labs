// React
import React from "react";
import { Helmet } from "react-helmet";

// Components
import DiaSinInternetComponent from "../components/DiaSinInternet/DiaSinInternet";

const DiaSinInternet = ({ whyThisDayRef, whatIDid }) => {
  return (
    <>
      <Helmet>
        <title>Un día sin usar la computadora - Rodrigo Terán</title>
        <meta
          name="description"
          content={`Un día sin usar la computadora por Rodrigo Terán`}
        />
      </Helmet>
      <DiaSinInternetComponent
        whyThisDayRef={whyThisDayRef}
        whatIDid={whatIDid}
      ></DiaSinInternetComponent>
    </>
  );
};
export default DiaSinInternet;
