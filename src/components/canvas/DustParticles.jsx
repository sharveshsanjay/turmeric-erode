import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function DustParticles({ count = 80 }) {
  const pointsRef = useRef();

  // Generate random positions, sizes, and float velocities
  const [positions, scales] = useMemo(() => {
    const posArr = new Float32Array(count * 3);
    const scaleArr = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      posArr[i * 3] = (Math.random() - 0.5) * 12;
      posArr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      posArr[i * 3 + 2] = (Math.random() - 0.5) * 10;

      scaleArr[i] = Math.random() * 0.08 + 0.02;
    }
    return [posArr, scaleArr];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.rotation.x += delta * 0.01;

    const pos = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.002;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#E5A93C"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
