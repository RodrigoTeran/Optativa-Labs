import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import ButtonWhiteRectangle from "./ButtonWhiteRectangle";

const Canvas = ({ arrayElements, setArrayElements, rerender }) => {
  const canvasRef = useRef(null);
  const downloadLink = useRef(null);
  const [canvasImg, setCanvasImg] = useState(null);
  const [isWithSelection, setIsWithSelection] = useState(false);
  const xCoordenateMovingElement = useRef(0);
  const yCoordenateMovingElement = useRef(0);

  const xCoordenateToAddMovingElement = useRef(0);
  const yCoordenateToAddMovingElement = useRef(0);

  // Text
  const [isTextOpen, setIsTextOpen] = useState(false);

  const getImage = () => {
    window.scrollTo(0, 0);
    html2canvas(canvasRef.current).then(function (canvas) {
      setCanvasImg(canvas.toDataURL("image/png"));
      downloadLink.current.click();
    });
  };

  const deselectAll = () => {
    var old = [];
    for (var i = 0; i < arrayElements.length; i++) {
      old.push({
        type: arrayElements[i].type,
        info: arrayElements[i].info,
        zIndex: arrayElements[i].zIndex,
        open: false,
        x: arrayElements[i].x,
        y: arrayElements[i].y,
        color: arrayElements[i].color,
      });
    }
    setArrayElements(old);
    setIsWithSelection(false);
  };

  const writeText = (text) => {
    var old = arrayElements;
    old.push({
      type: "text",
      info: text,
      zIndex: 0,
      open: false,
      x: 0,
      y: 0,
      color: "#000",
    });
    setArrayElements(old);
    rerender();
  };

  const selectElement = (index) => {
    var old = [];
    for (var i = 0; i < arrayElements.length; i++) {
      old.push({
        type: arrayElements[i].type,
        info: arrayElements[i].info,
        zIndex: arrayElements[i].zIndex,
        open: index === i ? true : false,
        x: arrayElements[i].x,
        y: arrayElements[i].y,
        color: arrayElements[i].color,
      });
    }
    setArrayElements(old);
    setIsWithSelection(true);
  };

  const whoIsSelected = () => {
    var myIndex = 0;
    for (var i = 0; i < arrayElements.length; i++) {
      if (arrayElements[i].open) {
        myIndex = i;
        break;
      }
    }
    return myIndex;
  };

  const dragElementStart = (e, elementID) => {
    var elementRect = document
      .querySelector(`#${elementID}`)
      .getBoundingClientRect();
    var xToAdd = e.clientX - elementRect.left; // x position within the element.
    var yToAdd = e.clientY - elementRect.top; // y position within the element.
    if (xToAdd >= 0 || yToAdd >= 0) {
      xCoordenateToAddMovingElement.current = xToAdd;
      yCoordenateToAddMovingElement.current = yToAdd;
    }
  };

  const changeColor = (e) => {
    var old = [];
    var index = whoIsSelected();
    for (var i = 0; i < arrayElements.length; i++) {
      old.push({
        type: arrayElements[i].type,
        info: arrayElements[i].info,
        zIndex: arrayElements[i].zIndex,
        open: arrayElements[i].open,
        x: arrayElements[i].x,
        y: arrayElements[i].y,
        color: index === i ? e.target.value : arrayElements[i].color,
      });
    }
    setArrayElements(old);
    setIsWithSelection(false);
  };

  const dragElement = (e) => {
    var rect = canvasRef.current.getBoundingClientRect();
    var newX = e.clientX - rect.left; // x position within the element.
    var newY = e.clientY - rect.top; // y position within the element.

    if (newX >= 0 || newY >= 0) {
      xCoordenateMovingElement.current = newX;
      yCoordenateMovingElement.current = newY;
    }
  };

  const dragElementEnd = (index) => {
    moveElement(
      index,
      xCoordenateMovingElement.current - xCoordenateToAddMovingElement.current,
      yCoordenateMovingElement.current - yCoordenateToAddMovingElement.current
    );
  };

  const moveElement = (index, x, y) => {
    var old = [];
    for (var i = 0; i < arrayElements.length; i++) {
      old.push({
        type: arrayElements[i].type,
        info: arrayElements[i].info,
        zIndex: arrayElements[i].zIndex,
        open: arrayElements[i].open,
        x: index === i ? x : arrayElements[i].x,
        y: index === i ? y : arrayElements[i].y,
        color: arrayElements[i].color,
      });
    }
    setArrayElements(old);
    setIsWithSelection(false);
    rerender();
  };

  const removeElement = () => {
    var old = [];
    var index = whoIsSelected();
    for (var i = 0; i < arrayElements.length; i++) {
      if (index === i) {
        continue;
      }
      old.push({
        type: arrayElements[i].type,
        info: arrayElements[i].info,
        zIndex: arrayElements[i].zIndex,
        open: arrayElements[i].open,
        x: arrayElements[i].x,
        y: arrayElements[i].y,
        color: arrayElements[i].color,
      });
    }
    setArrayElements(old);
    setIsWithSelection(false);
  };

  const onClickElement = (type, index) => {
    if (type === "canvas") {
      deselectAll();
      setIsWithSelection(true);
      rerender();
    } else if (type === "image") {
      deselectAll();
      selectElement(index);
      rerender();
    } else if (type === "text") {
      deselectAll();
      selectElement(index);
      rerender();
    }
  };

  return (
    <div className="memesContainer__row__col__2">
      <div
        className={`memesContainer__row__col__2__writeText ${
          isTextOpen ? "open" : ""
        }`}
      >
        <h2>Escribe el texto del meme</h2>
        <input type="text" name="" id="text__for__memes" />
        <div className="memesContainer__row__col__2__writeText__buttons">
          <ButtonWhiteRectangle
            text="Cancelar"
            width="100%"
            height="50px"
            red="redColor"
            clickFunctionAnotherOne={() => {
              setIsTextOpen(false);
            }}
          >
            <svg
              width="20px"
              height="20px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
            >
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
            </svg>
          </ButtonWhiteRectangle>
          <ButtonWhiteRectangle
            text="Guardar"
            width="100%"
            height="50px"
            green="greenColor"
            clickFunctionAnotherOne={() => {
              writeText(document.querySelector(`#text__for__memes`).value);
              setIsTextOpen(false);
            }}
          >
            <svg
              width="20px"
              height="20px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z" />
            </svg>
          </ButtonWhiteRectangle>
        </div>
      </div>
      <div className="memesCanvas__nav">
        <h3>Canvas</h3>
        <button
          onClick={() => {
            setIsTextOpen(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z" />
          </svg>
          <div className="memesCanvas__msg">Poner Texto</div>
        </button>
        <button>
          <label htmlFor="color__memes">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
            </svg>
            <div className="memesCanvas__msg">Color</div>
          </label>
        </button>
        <input type="color" name="" id="color__memes" onChange={changeColor} />
        <button onClick={removeElement}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          </svg>
          <div className="memesCanvas__msg">Eliminar objeto</div>
        </button>
        {isWithSelection ? (
          <button onClick={deselectAll}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M336 416h-11.17l9.26-27.77L267 336.4 240.49 416H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm297.82 42.1L377 259.59 426.17 112H544v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16H176a16 16 0 0 0-16 16v43.9L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.46a16 16 0 0 0 2.81 22.45l588.36 454.72a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zM309.91 207.76L224 141.36V112h117.83z" />
            </svg>
            <div className="memesCanvas__msg">Deseleccionar</div>
          </button>
        ) : null}
        <button onClick={getImage}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" />
          </svg>
          <div className="memesCanvas__msg">Descargar</div>
        </button>
      </div>
      <div className="memesCanvas__canvas">
        <div className="memesCanvas__canvas__container">
          <div
            style={{
              backgroundColor: "#FFF",
            }}
            ref={canvasRef}
            className={`memesCanvas__canvas__container__real`}
          >
            {arrayElements.map((element, index) => {
              if (element.type === "text") {
                // Text
                return (
                  <div
                    key={index}
                    id={`span__canvas__${index}`}
                    onClick={() => {
                      onClickElement("text", index);
                    }}
                    draggable="true"
                    onDrag={(e) => {
                      dragElement(e);
                    }}
                    onDragEnd={() => {
                      dragElementEnd(index);
                    }}
                    onDragStart={(e) => {
                      dragElementStart(e, `span__canvas__${index}`);
                    }}
                    style={{
                      zIndex: element.zIndex,
                      left: element.x,
                      top: element.y,
                      color: element.color,
                    }}
                    className={`${element.open ? "withBorder" : ""}`}
                  >
                    {element.info}
                  </div>
                );
              } else {
                // Image
                return (
                  <img
                    src={element.info}
                    alt="Image meme"
                    id={`image__canvas__${index}`}
                    key={index}
                    style={{
                      zIndex: element.zIndex,
                      left: element.x,
                      top: element.y,
                    }}
                    onDragEnd={() => {
                      dragElementEnd(index);
                    }}
                    draggable="true"
                    onDrag={(e) => {
                      dragElement(e);
                    }}
                    onDragStart={(e) => {
                      dragElementStart(e, `image__canvas__${index}`);
                    }}
                    className={`${element.open ? "withBorder" : ""}`}
                    onClick={() => {
                      onClickElement("image", index);
                    }}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      <a ref={downloadLink} href={canvasImg} download></a>
    </div>
  );
};
export default Canvas;
