// React
import React from "react";

// Components
import WebGL from "./WebGL";

const Rules = () => {
  return (
    <div className="integralsRules">
      <div className="integralsRules__card">
        <h1>Calcular volumen de Sólidos de Revolución</h1>
        <h3>
          Algunas aplicaciones de la integral, relacionadas con los volúmenes
          contenidos al rotar la gráfica de una función definida en un intervalo
          cerrado [a,b], alrededor de uno de los ejes obtenemos los llamados
          <span>sólidos de revolución.</span>
        </h3>
      </div>
      <WebGL></WebGL>
      <div className="integralsRules__card">
        <h3>
          Hay tres casos principales que surgen mientras tratamos con los
          problemas de encontrar los volúmenes:
        </h3>
        <ul>
          <li>Cuando la función rotativa es función del eje x.</li>
          <li>Cuando la función rotativa es función del eje y.</li>
          <li>Método de Arandelas</li>
        </ul>
        <h3>Vamos a analizar el caso 1</h3>
        <div>
          <span>La fórmula del área de solo un punto x</span>
          <h3>
            A(x) = &#928;f(x)<sup>2</sup>
          </h3>
          La sumatoria de las áreas desde (A) a (B)
          <h3 className="integralsRules__symbols">V = &#8747; A(x) dx</h3>
        </div>
        <div>De esta manera se obtiene el volumen</div>
      </div>
      <div className="integralsRules__card">
        <h3>Un Ejemplo:</h3>
        <div>Nuestra función, de x = 0, x = 6:</div>
        <h3>
          y = x<sup>2</sup>
        </h3>
        <div>El área en un punto x</div>
        <h3>
          A(x) = &#928;x<sup>4</sup>
        </h3>
        <div>Integral definida</div>
        <h3 className="integralsRules__symbols__2">
          V = &#928;&#8747; x<sup>4</sup> dx
        </h3>
        <div>Evaluando la integral obtenemos:</div>
        <h3
          style={{
            color: "rgba(58, 54, 242, 1)",
          }}
        >
          V = 4885.8 u<sup>3</sup>
        </h3>
      </div>
      <div className="integralsRules__card">
        <h3 style={{ textAlign: "left", fontSize: "1.85rem" }}>Referencias:</h3>
        <ul style={{ paddingLeft: "5px" }}>
          <li style={{ marginTop: "30px" }}>
            Talamo, J. (n.d.). “What is a solid of revolution?”. Retrieved from:
            https://ximera.osu.edu/mooculus/calculus2/solidsOfRevolution/digInWhatIsASolidOfRevolution
          </li>
          <li style={{ marginTop: "30px" }}>
            Tutorial Math Lamar. (n.d.). “Volumes of Solids of Revolution”.
            Retrieved from:
            https://tutorial.math.lamar.edu/classes/calci/volumewithrings.aspx
          </li>
          <li style={{ marginTop: "30px" }}>
            Volume of a Solid of Revolution: Disks and Washers. (n.d.).
            Retrieved from:
            https://www.math24.net/volume-solid-of-revolution-disks-washers/
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Rules;
