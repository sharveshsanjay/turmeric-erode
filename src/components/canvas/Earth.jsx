import React from 'react';
import * as THREE from 'three';

import { useTextureWithFallback } from '../../utils/textureLoader';

export function Earth() {
  // load textures but tolerate missing files via the fallback loader
  const colorMap = useTextureWithFallback(['/textures/earth_day.png', '/textures/earth_day.jpg'], 'day');
  const normalMap = useTextureWithFallback(['/textures/earth_normal.png', '/textures/earth_normal.jpg'], 'normal');
  const roughnessMap = useTextureWithFallback(['/textures/earth_roughness.png', '/textures/earth_roughness.jpg'], 'roughness');
  const aoMap = useTextureWithFallback(['/textures/earth_ao.png', '/textures/earth_ao.jpg'], 'ao');

  // detect whether the loader returned a procedural CanvasTexture (fallback)
  const isProcedural = !!(colorMap && colorMap.image && colorMap.image.nodeName === 'CANVAS');

  if (colorMap) {
    // keep color in sRGB for accurate display
    if ('colorSpace' in colorMap) colorMap.colorSpace = THREE.SRGBColorSpace;
    colorMap.anisotropy = 8;
  }

  if (normalMap && 'colorSpace' in normalMap) {
    normalMap.colorSpace = THREE.NoColorSpace;
  }

  if (roughnessMap && 'colorSpace' in roughnessMap) {
    roughnessMap.colorSpace = THREE.NoColorSpace;
  }

  if (aoMap && 'colorSpace' in aoMap) {
    aoMap.colorSpace = THREE.NoColorSpace;
  }

  // When procedural fallback is used, reduce the influence of detail maps
  // to avoid the visible circular artifacts and keep the globe elegant.
  return (
    <mesh castShadow receiveShadow>
      <sphereGeometry args={[3, 128, 128]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={isProcedural ? null : normalMap}
        roughnessMap={isProcedural ? null : roughnessMap}
        aoMap={isProcedural ? null : aoMap}
        roughness={isProcedural ? 0.92 : 0.85}
        metalness={isProcedural ? 0.02 : 0.08}
        envMapIntensity={0.9}
      />
    </mesh>
  );
}
