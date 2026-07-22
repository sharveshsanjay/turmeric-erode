import React, { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import { Earth } from './Earth';
import { Clouds } from './Clouds';
import { Atmosphere } from './Atmosphere';
import { TradeRoutes } from './TradeRoutes';
import { MovingParticles } from './MovingParticles';
import { StarsBackground } from './StarsBackground';
import { GlobeLighting } from './GlobeLighting';

function GlobeScene() {
  const globeGroupRef = useRef(null);

  useFrame((_, delta) => {
    if (!globeGroupRef.current) {
      return;
    }

    globeGroupRef.current.rotation.y += delta * 0.08;
    globeGroupRef.current.rotation.x = Math.sin(delta * 0.2) * 0.01;
  });

  return (
    <>
      <StarsBackground />
      <GlobeLighting />
      <group ref={globeGroupRef} position={[0, -0.35, 0]}>
        <Earth />
        <Clouds />
        <Atmosphere />
        <TradeRoutes />
        <MovingParticles />
      </group>
    </>
  );
}

export function GlobalTradeGlobe({ visible = true }) {
  if (!visible) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <GlobeScene />
    </Suspense>
  );
}
