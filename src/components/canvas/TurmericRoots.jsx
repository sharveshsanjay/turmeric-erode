import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const rootCount = 30;

export function TurmericRoots() {
  const groupRef = useRef(null);

  const roots = useMemo(() => {
    return Array.from({ length: rootCount }, (_, index) => ({
      id: index,
      position: [
        (Math.random() - 0.5) * 1.18,
        (-0.95 - Math.random() * 0.4),
        (Math.random() - 0.5) * 0.75,
      ],
      length: 0.82 + Math.random() * 0.48,
      rotation: [0.06 + Math.random() * 0.2, Math.random() * 2.3 - 1.15, (Math.random() - 0.5) * 0.35],
      radius: 0.008 + Math.random() * 0.005,
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.z = Math.sin(time * 0.25) * 0.02;
    groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.015;
  });

  return (
    <group ref={groupRef} position={[0, -1.62, 0]}>
      {roots.map((root) => (
        <mesh
          key={root.id}
          position={root.position}
          rotation={root.rotation}
          castShadow
        >
          <cylinderGeometry args={[root.radius, root.radius * 0.58, root.length, 8]} />
          <meshPhysicalMaterial
            color="#4e2a10"
            roughness={0.95}
            metalness={0.02}
            clearcoat={0.05}
            clearcoatRoughness={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}
