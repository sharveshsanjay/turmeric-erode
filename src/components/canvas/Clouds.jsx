import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { useTextureWithFallback } from '../../utils/textureLoader';

export function Clouds() {
  const cloudMap = useTextureWithFallback(['/textures/clouds.png', '/textures/clouds.jpg'], 'cloud');
  const cloudGroupRef = useRef(null);

  useFrame((state, delta) => {
    if (!cloudGroupRef.current) {
      return;
    }

    cloudGroupRef.current.rotation.y += delta * 0.12;
    cloudGroupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.012;
  });

  const isProceduralCloud = !!(cloudMap && cloudMap.image && cloudMap.image.nodeName === 'CANVAS');

  if (cloudMap && 'colorSpace' in cloudMap) {
    cloudMap.colorSpace = THREE.SRGBColorSpace;
  }

  return (
    <group ref={cloudGroupRef} scale={[1.01, 1.01, 1.01]}>
      <mesh>
        <sphereGeometry args={[3, 64, 64]} />
        <meshStandardMaterial
          map={cloudMap}
          transparent
          opacity={isProceduralCloud ? 0.28 : 0.42}
          depthWrite={false}
          color="#ffffff"
          blending={THREE.NormalBlending}
        />
      </mesh>
    </group>
  );
}
