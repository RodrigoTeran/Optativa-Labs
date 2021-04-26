import React from "react";

const CardImage = ({
  srcImage,
  deleteImage,
  index,
  setArrayElements,
  arrayElements,
  rerender,
}) => {
  const modifyCanvas = () => {
    var old = arrayElements;
    old.push({
      type: "image",
      info: srcImage,
      zIndex: 0,
      open: false,
      x: 0,
      y: 0,
      color: "#000",
    });
    setArrayElements(old);
    rerender();
  };

  return (
    <div className={`cardImageMeme`}>
      <img onClick={modifyCanvas} src={srcImage} alt="Imagen Meme" />
      <button
        onClick={() => {
          deleteImage(index);
        }}
      >
        {" "}
        <svg
          width="20px"
          height="20px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
        >
          <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
        </svg>
      </button>
    </div>
  );
};
export default CardImage;
