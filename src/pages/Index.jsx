// React
import React from "react";
import { Helmet } from "react-helmet";

// Framer motion
import { motion } from "framer-motion";

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
      <motion.div exit={{ opacity: 0, transition: { duration: 0 } }}>
        <IndexComponent></IndexComponent>
      </motion.div>
    </>
  );
};
export default Index;
