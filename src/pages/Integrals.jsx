// React
import React from "react";
import { Helmet } from "react-helmet";

// Components
import IntegralIndex from "../components/Integrals/IntegralIndex";
const Integrals = () => {
  return (
    <>
      <Helmet>
        <title>Integrales - Sólidos de Revolución</title>
        <meta
          name="description"
          content={`Uso de las integrales en los sólidos de revolución`}
        />
      </Helmet>
      <IntegralIndex></IntegralIndex>
    </>
  );
};
export default Integrals;
