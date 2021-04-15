// React
import React from "react";
import { Helmet } from "react-helmet";

// Components
import CalculadoraComponent from "../components/Calculadora/Index";

const Calculadora = () => {
  return (
    <>
      <Helmet>
        <title>Calculadora con Javascript - Rodrigo Terán</title>
        <meta
          name="description"
          content={`Calculadora con Javascript`}
        />
      </Helmet>
      <CalculadoraComponent></CalculadoraComponent>
    </>
  );
};
export default Calculadora;
