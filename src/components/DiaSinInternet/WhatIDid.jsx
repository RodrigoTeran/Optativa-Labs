// React
import React from "react";

// Components
import Street from "./Street";

const WhatIDid = ({ whatIDid }) => {
  return (
    <div className="whatIDid" ref={whatIDid}>
      <h2>¿Qué hice en este día?</h2>
      <div className="whatIDid__info">
        <Street></Street>
        <div className="whatIDid__info__svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z" />
          </svg>
        </div>
      </div>
      <div className="whatIDid__info__dog">
        <img src="/images/freda.jpeg" alt="Fredita" />
        <div className="whatIDid__info__dog__content">
          <h2>Sacar a pasear a mi perrita</h2>
          <p>
            Este día desde temprano sabía qué quería hacer... sacar a pasear a
            mi perrita. Mi perrita se llama Freda, es un Border Collie mediano.
          </p>
          <p>
            Generalmente los fines de semana acostumbro a sacarla a pasear, pero
            este día quería tomarme el tiempo de disfrutarlo. No solo hacerlo
            por rutina...
          </p>
          <p>
            Aproveché para irme por otros lugares que no conocía, aproveché para
            disfrutar más a mi perrita.
          </p>
          <p>
            Pude ver cómo miraba hacia todos lados, con esa fascinación tan
            grande, se parece a mí. Me fascina todo a mí alrededor, pero cuando
            me doy el tiempo de observarlo.
          </p>
          <p>
            Cuando no me doy el tiempo de ver las cosas, no disfruto mi vida.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhatIDid;
