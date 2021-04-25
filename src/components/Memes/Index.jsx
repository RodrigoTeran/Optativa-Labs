import React, { useRef, useState, useEffect } from "react";

import { motion } from "framer-motion";

// Components
import CroppImages from "./CroppImages";
import CardImage from "./CardImage";
import Canvas from "./Canvas";

const MemesIndex = () => {
  // CARD IMAGE
  const InputImage = useRef(null);
  const [imageSrc, setImageSrc] = useState("");
  const [srcImageYes, setSrcImageYes] = useState(false);

  const [imageDestination, setImageDestination] = useState("");
  const [isResponse, setIsResponse] = useState(false);

  const [imagesToMeme, setImagesToMeme] = useState([]);

  const [isRendering, setIsRendering] = useState(false);

  const onSubmitInput = () => {
    setSrcImageYes(false);
    var oldArray = imagesToMeme;

    oldArray.push(imageDestination);

    setImagesToMeme(oldArray);
    setImageSrc("");
    setSrcImageYes(false);
    InputImage.current.value = "";
    rerender();
  };

  const deleteImageToMeme = (index) => {
    var oldArray2 = imagesToMeme;
    oldArray2.splice(index, 1);
    setImagesToMeme(oldArray2);
    setImageSrc("");
    setSrcImageYes(false);
    InputImage.current.value = "";
    rerender();
  };

  useEffect(() => {
    rerender();
  }, []);

  const rerender = () => {
    setIsRendering(!isRendering);
  };

  const changeFunction = (e) => {
    try {
      let urlImage = undefined;
      urlImage = URL.createObjectURL(e.target.files[0]);
      var allowedExtensions = /(.jpg|.jpeg|.png)$/i;
      if (!allowedExtensions.exec(e.target.value)) {
        setSrcImageYes(false);
        setImageSrc("");
      } else {
        setImageSrc(urlImage);
        setSrcImageYes(true);
      }
    } catch {
      setSrcImageYes(false);
      setImageSrc("");
    }
  };

  return (
    <motion.div
      exit={{
        opacity: 0,
        y: 30,
        transition: { type: "tween", duration: 0.3 },
      }}
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
      className="memesContainer"
    >
      {isRendering ? <div></div> : null}
      <h1>Creador de memes</h1>
      <input
        ref={InputImage}
        onChange={changeFunction}
        type="file"
        name="file"
        id="file"
      />
      <label htmlFor="file" className="memesContainer__input-special">
        Subir imagen
      </label>
      <div className="memesContainer__row">
        <div className="memesContainer__row__col__1">
          <h2>Imágenes</h2>
          {imagesToMeme.map((imageMeme, index) => {
            return (
              <div key={index}>
                <CardImage
                  srcImage={imageMeme}
                  deleteImage={(index) => {
                    deleteImageToMeme(index);
                  }}
                  index={index}
                ></CardImage>
              </div>
            );
          })}
        </div>
        <Canvas></Canvas>
      </div>
      <CroppImages
        imageSrc={imageSrc}
        setImageSrc={() => {
          setImageSrc("");
          setSrcImageYes(false);
          InputImage.current.value = "";
        }}
        srcImageYes={srcImageYes}
        onSubmitInput={() => {
          onSubmitInput();
        }}
        setImageDestination={setImageDestination}
        imageDestination={imageDestination}
        isResponse={isResponse}
        setIsResponse={setIsResponse}
      ></CroppImages>
    </motion.div>
  );
};
export default MemesIndex;
