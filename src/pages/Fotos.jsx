// React
import React from "react";
import { Helmet } from "react-helmet";

// Components
import FotosIndex from "../components/Fotos/Index";

const Fotos = () => {
  return (
    <>
      <Helmet>
        <title>Galería de fotos - Rodrigo Terán</title>
        <meta
          name="description"
          content={`Galería de Fotos por Rodrigo Terán`}
        />
      </Helmet>
      <FotosIndex></FotosIndex>
    </>
  );
};
export default Fotos;
