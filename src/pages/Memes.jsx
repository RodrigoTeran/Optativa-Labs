// React
import React from "react";
import { Helmet } from "react-helmet";

// Components
import MemesIndex from "../components/Memes/Index";
const Memes = () => {
  return (
    <>
      <Helmet>
        <title>Memes - Creador de memes</title>
        <meta
          name="description"
          content={`Creador de memes con JS`}
        />
      </Helmet>
      <MemesIndex></MemesIndex>
    </>
  );
};
export default Memes;
