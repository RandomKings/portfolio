import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf"); // Use optimized GLB file

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 0.5 : 1} // Reduce light intensity for mobile
        castShadow={!isMobile} // Disable shadows for mobile
        shadow-mapSize={isMobile ? 512 : 1024} // Lower shadow quality for mobile
      />
      <pointLight intensity={0.5} /> {/* Reduce intensity */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75} // Adjust scale for mobile
        position={isMobile ? [0, -3, -2.5] : [0, -3.25, -1.5]} // Adjust position for mobile
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Check for WebGL support
    if (!window.WebGLRenderingContext || !document.createElement("canvas").getContext("webgl")) {
      setWebglSupported(false);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (!webglSupported) {
    return <div>WebGL is not supported on this device or browser.</div>;
  }

  if (isMobile) {
    return null; // Do not render anything on mobile
  }

  return (
    <Canvas
      frameloop='demand'
      shadows={false} // Disable shadows for better compatibility
      dpr={[1, 2]} // Higher DPR for non-mobile devices
      camera={{ position: [20, 3, 5], fov: 30 }} // Adjust camera for better performance
      gl={{
        antialias: false, // Disable antialiasing for performance
        alpha: true,
        preserveDrawingBuffer: false, // Disable for better performance
        onContextLost: (e) => console.error("WebGL Context Lost", e),
        onError: (error) => console.error("WebGL Error", error),
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
