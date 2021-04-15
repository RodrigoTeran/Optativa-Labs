// React
import React, { useState } from "react";

// Framer motion
import { motion } from "framer-motion";

const IndexCalculadora = () => {
  const [srcImage, setSrcImage] = useState(undefined);
  const handleInput = (e) => {
    try {
      let urlImage = undefined;
      urlImage = URL.createObjectURL(e.target.files[0]);
      var allowedExtensions = /(.jpg|.jpeg|.png)$/i;
      if (!allowedExtensions.exec(e.target.value)) {
        alert("Solo se aceptan imágenes");
      } else {
        setSrcImage(urlImage);
        sessionStorage.setItem("calcu", "true");
      }
    } catch {
      console.log("error");
    }
  };
  return (
    <motion.div
      exit={{ opacity: 0, y: 30, transition: { type: "tween", duration: 0.3 } }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.3 },
      }}
      initial={{
        opacity: 0,
        y: 30,
        transition: { type: "tween", duration: 0.3 },
      }}
      className="fotosContainer"
    >
      <h1 style={{ margin: 0 }}>Analizador de Textos</h1>
      <div className="calculadoraPage">
        <h4>
          Sube una imagen que contenga texto
          <br />Y la Inteligencia Artificial extraerá el texo por ti
        </h4>
        <a
          download="ejemploAnalizadorDeTextos.jpg"
          href="FkLGnxH.png"
          title="ImageName"
        >
          Descargar imagen de ejemplo
        </a>
        {srcImage ? (
          <img id="superImage" src={srcImage} alt="Imagen a analizar" />
        ) : null}
        <input onChange={handleInput} type="file" name="file" id="file" />
        <label htmlFor="file" className="calculadoraPage__input-special">
          Subir imagen
        </label>
        <p id="resultCalculadora">Aquí estará el texto de la imagen</p>
      </div>
    </motion.div>
  );
};

export default IndexCalculadora;
