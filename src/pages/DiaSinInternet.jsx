// React
import React from "react";
import { Helmet } from "react-helmet";

// Components
import DiaSinInternetComponent from "../components/DiaSinInternet/DiaSinInternet";

const DiaSinInternet = () => {
  return (
    <>
      <Helmet>
        <title>Un día sin usar la computadora - Rodrigo Terán</title>
        <meta
          name="description"
          content={`Un día sin usar la computadora por Rodrigo Terán`}
        />
      </Helmet>
      <DiaSinInternetComponent></DiaSinInternetComponent>
    </>
  );
};
export default DiaSinInternet;
