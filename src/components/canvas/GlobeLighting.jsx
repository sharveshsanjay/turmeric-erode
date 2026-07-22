import React from 'react';
import { Environment } from '@react-three/drei';

export function GlobeLighting() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.75} />
      <hemisphereLight args={['#f4f7ff', '#1a2433', 0.95]} />
      <directionalLight
        position={[4, 6, 5]}
        intensity={2.2}
        color="#ffffff"
        castShadow={false}
      />
      <directionalLight
        position={[-6, -2, -4]}
        intensity={1.4}
        color="#e6b347"
      />
    </>
  );
}
