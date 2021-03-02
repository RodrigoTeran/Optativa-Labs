// React
import React, { useRef } from "react";

// Components
import Street from "./Street";

// Utils for webp support
import { isWebpSupported } from "react-image-webp/dist/utils";

// Hooks
import { useAnimationsScroll } from "../../hooks/useAnimationsScroll";

const WhatIDid = ({ whatIDid }) => {
  // Refs
  const h2Ref = useRef(null);
  const streetRef = useRef(null);
  const fredaRef = useRef(null);
  const fredaHeaderRef = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);
  const p4Ref = useRef(null);
  const p5Ref = useRef(null);

  useAnimationsScroll(
    [h2Ref, streetRef, fredaRef, fredaHeaderRef, p1Ref, p2Ref],
    0.5,
    "notAppear"
  );

  useAnimationsScroll([p3Ref, p4Ref], 0.3, "notAppear");
  useAnimationsScroll([p5Ref], 0.15, "notAppear");

  return (
    <div className="whatIDid" ref={whatIDid}>
      <h2 className="notAppear" ref={h2Ref}>
        ¿Qué hice en este día?
      </h2>
      <div ref={streetRef} className="whatIDid__info notAppear">
        <Street></Street>
        <div className="whatIDid__info__svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z" />
          </svg>
        </div>
      </div>
      <div className="whatIDid__info__dog">
        <img
          className="notAppear"
          ref={fredaRef}
          src={isWebpSupported ? "/images/freda.webp" : "/images/freda.jpeg"}
          alt="Fredita"
        />
        <div className="whatIDid__info__dog__content">
          <div
            ref={fredaHeaderRef}
            className="whatIDid__info__dog__content__header notAppear"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
            </svg>
            <h2>Sacar a pasear a mi perrita</h2>
          </div>
          <p ref={p1Ref} className="notAppear">
            Este día desde temprano sabía qué quería hacer... sacar a pasear a
            mi perrita. Mi perrita se llama Freda, es un Border Collie mediano.
          </p>
          <p ref={p2Ref} className="notAppear">
            Generalmente los fines de semana acostumbro a sacarla a pasear, pero
            este día quería tomarme el tiempo de disfrutarlo. No solo hacerlo
            por rutina...
          </p>
          <p ref={p3Ref} className="notAppear">
            Aproveché para irme por otros lugares que no conocía, aproveché para
            disfrutar más a mi perrita.
          </p>
          <p ref={p4Ref} className="notAppear">
            Pude ver cómo miraba hacia todos lados, con esa fascinación tan
            grande, se parece a mí. Me fascina todo a mí alrededor, pero cuando
            me doy el tiempo de observarlo.
          </p>
          <p ref={p5Ref} className="notAppear">
            Cuando no me doy el tiempo de ver las cosas, no disfruto mi vida.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhatIDid;
