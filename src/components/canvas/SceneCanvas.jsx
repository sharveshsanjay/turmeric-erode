import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

import { TurmericModel } from './TurmericModel';
import { DustParticles } from './DustParticles';
import { GlobalTradeGlobe } from './GlobalTradeGlobe';

// Smooth Camera Controller listening to narrative stage
function CameraRig({ stage = 0, scrollProgress = 0 }) {
  useFrame((state) => {
    const camera = state.camera;
    const target = new THREE.Vector3(0, 0, 0);

    // Dynamic Camera Positions per Documentary Scene:
    // Scene 0: Hero (Floating, slight angle, distance 6.5)
    // Scene 1: Where it Begins (Zoom in, lower angle)
    // Scene 2: Cultivation (Gentle orbit)
    // Scene 3: Harvest (Macro close up)
    // Scene 4: Processing (Side tracking shot)
    // Scene 5: Market (Wide shot)
    // Scene 6: Global Journey (Zoom out into Globe, distance 9.0)
    // Scene 7: Uses (Center spin angle)
    // Scene 8: Why Erode (Clean studio)
    // Scene 9: Ending (Return to hero composition)

    let posX = 0;
    let posY = 0;
    let posZ = 6.5;

    switch (stage) {
      case 0: // Hero
        posX = Math.sin(scrollProgress * Math.PI) * 0.5;
        posY = 0;
        posZ = 6.2;
        break;
      case 1: // Begins (Underground roots)
        posX = 0;
        posY = -0.8;
        posZ = 4.8;
        break;
      case 2: // Cultivation
        posX = Math.cos(scrollProgress * Math.PI * 2) * 1.5;
        posY = 0.5;
        posZ = 5.5;
        break;
      case 3: // Harvest Macro
        posX = 0;
        posY = 0.1;
        posZ = 3.5; // Extreme close up macro photography feel
        break;
      case 4: // Processing
        posX = 1;
        posY = 0.2;
        posZ = 5.0;
        break;
      case 5: // Market
        posX = 0;
        posY = 0.8;
        posZ = 7.0;
        break;
      case 6: // Global Globe
        posX = 1.5;
        posY = 0.5;
        posZ = 8.5; // Zoom out to encompass Earth globe
        break;
      case 7: // Uses
        posX = Math.sin(scrollProgress * Math.PI) * 1.0;
        posY = 0.0;
        posZ = 5.8;
        break;
      case 8: // Why Erode
        posX = -0.8;
        posY = 0.2;
        posZ = 6.0;
        break;
      case 9: // Ending
      default:
        posX = 0;
        posY = 0.2;
        posZ = 6.2;
        break;
    }

    // Smooth lerp for fluid uninterrupted documentary movement
    camera.position.lerp(new THREE.Vector3(posX, posY, posZ), 0.15);
    camera.lookAt(target);
  });

  return null;
}

export function SceneCanvas({ stage = 0, scrollProgress = 0 }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-white">
      <Canvas
        camera={{ position: [0, 0.2, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        {/* Lightweight studio lighting */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={1.45} />
        <directionalLight position={[-6, -2, -4]} intensity={1.15} color="#E5A93C" />
        <directionalLight position={[0, -5, 4]} intensity={0.45} color="#FFFFFF" />

        <CameraRig stage={stage} scrollProgress={scrollProgress} />

        {/* Dust Particles floating ambiently */}
        <DustParticles count={60} />

        {/* Main 3D Turmeric Rhizome Model */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <TurmericModel scrollProgress={scrollProgress} stage={stage} />
        </Float>

        {/* Interactive 3D Globe for Export Scene: start mid scene 5 (55%) and
          remain through end of scene 6, disappearing halfway into scene 7 */}
        <GlobalTradeGlobe visible={scrollProgress >= 0.55 && scrollProgress < 0.75} />

        {/* Ultra-soft shadow on pure white studio floor */}
        <ContactShadows
          position={[0, -2.2, 0]}
          opacity={0.24}
          scale={8}
          blur={1.2}
          far={3.4}
          color="#291E14"
        />
      </Canvas>
    </div>
  );
}
