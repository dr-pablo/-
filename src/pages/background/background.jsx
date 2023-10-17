import React, { useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";
import { Plane } from "@react-three/drei";
import i from "../../assets/sh.gif";
import SunModel from "./SunGL";
export const Background = () => {
  const [isLoading, setLoading] = useState(true);
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loadTexture = async () => {
      const loadedTexture = await new Promise((resolve, reject) => {
        new TextureLoader().load(i, resolve, undefined, reject);
      });

      loadedTexture.wrapS = loadedTexture.wrapT = RepeatWrapping;
      loadedTexture.repeat.set(2, 2);
      console.log(loadedTexture);
      setTexture(loadedTexture);
      setTimeout(() => {
        console.log("sleeping");
      }, 3000);
      //setLoading(false);
    };

    loadTexture();
  }, []);

  return (
    <div className="background">
      {isLoading && (
        <div className="wrapper">
          <h1>We Trippy Mane</h1>
          <div className="sun">
            <SunModel />
          </div>
        </div>
      )}
      {!isLoading && (
        <Canvas style={{ background: "beige" }}>
          <ambientLight intensity={0.5} />
          {texture && (
            <Plane args={[2, 2]} rotation-x={-Math.PI / 2}>
              <meshBasicMaterial attach="material" map={texture} />
            </Plane>
          )}
        </Canvas>
      )}
    </div>
  );
};

export default Background;
