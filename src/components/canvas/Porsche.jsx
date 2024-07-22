import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Porsche = ({ isMobile }) => {
  const porscheModel = useGLTF("./porsche_gt3_rs/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />
      <spotLight
        position={[20, 50, 10]}
        angle={180}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={6} />
      <primitive
        object={porscheModel.scene}
        scale={isMobile ? 1 : 2}
        position={isMobile ? [0, -1.5, 0] : [0, -2.55, 0]}
        rotation={[-0.03, 2, 0.03]}
      />
    </mesh>
  );
};

const PorsheCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Porsche isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PorsheCanvas;
