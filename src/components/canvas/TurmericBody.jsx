import { useMemo, useRef } from 'react';
import * as THREE from 'three';

export function TurmericBody({ geometry, material, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] }) {
  const meshRef = useRef(null);

  const outline = useMemo(() => {
    const color = new THREE.Color('#8f4c16');
    return color;
  }, []);

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      position={position}
      rotation={rotation}
      scale={scale}
      castShadow
      receiveShadow
      onBeforeRender={() => {
        if (meshRef.current) {
          meshRef.current.material.emissive = outline;
        }
      }}
    />
  );
}
