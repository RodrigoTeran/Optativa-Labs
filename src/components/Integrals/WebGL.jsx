// React
import React, { useState, useRef, useEffect } from "react";

// Three js
import { Canvas, useFrame } from "react-three-fiber";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);

  return (
    <mesh
      {...props}
      ref={mesh}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={hovered ? "rgba(58, 54, 242, 1)" : "#333"} />
    </mesh>
  );
}

const WebGL = () => {
  const [stateForRender, setRender] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const handleResize = () => {
    setRender(!stateForRender);
  };
  return (
    <div className="integralsWebGL">
      {stateForRender ? null : null}
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box
          position={[0, 0, 0]}
          scale={
            window.innerWidth > 1000
              ? [1, 1, 1]
              : window.innerWidth > 420
              ? [0.7, 0.7, 0.7]
              : [0.5, 0.5, 0.5]
          }
        />
        <Box
          position={[
            window.innerWidth > 1000 ? 5 : window.innerWidth > 420 ? 2 : 1.5,
            1,
            0,
          ]}
          scale={
            window.innerWidth > 1000
              ? [0.6, 0.6, 0.6]
              : window.innerWidth > 420
              ? [0.4, 0.4, 0.4]
              : [0.3, 0.3, 0.3]
          }
        />
        <Box
          position={[
            window.innerWidth > 1000 ? -5 : window.innerWidth > 420 ? -2 : -1.5,
            1,
            0,
          ]}
          scale={
            window.innerWidth > 1000
              ? [0.6, 0.6, 0.6]
              : window.innerWidth > 420
              ? [0.4, 0.4, 0.4]
              : [0.3, 0.3, 0.3]
          }
        />
      </Canvas>
    </div>
  );
};

export default WebGL;
