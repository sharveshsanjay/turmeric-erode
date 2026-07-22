import React from 'react';
import * as THREE from 'three';

export function Atmosphere() {
  return (
    <mesh scale={[1.05, 1.05, 1.05]}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshBasicMaterial
        color="#89b8ff"
        transparent
        opacity={0.18}
        depthWrite={false}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}
