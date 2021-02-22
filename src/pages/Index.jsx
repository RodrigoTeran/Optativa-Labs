// React
import React from "react";
import { Helmet } from "react-helmet";

// Components
import IndexComponent from "../components/Index/Index";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Optativa Labs</title>
        <meta
          name="description"
          content={`Laboratorios de Optativa Prepa Tec`}
        />
      </Helmet>
      <IndexComponent></IndexComponent>
    </>
  );
};
export default Index;
