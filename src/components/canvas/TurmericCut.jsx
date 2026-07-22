import { useRef } from 'react';

export function TurmericCut({ geometry, material, position = [0, 1.62, 0], rotation = [-Math.PI / 2, 0, 0] }) {
  const meshRef = useRef(null);

  return (
    <group position={position} rotation={rotation}>
      <mesh ref={meshRef} geometry={geometry} material={material} castShadow receiveShadow />
    </group>
  );
}
