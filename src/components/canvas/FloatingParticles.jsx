import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const particleCount = 24;

export function FloatingParticles() {
  const groupRef = useRef(null);

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, index) => ({
      id: index,
      position: [
        (Math.random() - 0.5) * 3.6,
        (Math.random() - 0.5) * 2.2,
        (Math.random() - 0.5) * 3.2,
      ],
      size: 0.006 + Math.random() * 0.016,
      opacity: 0.2 + Math.random() * 0.3,
      speed: 0.4 + Math.random() * 0.5,
      phase: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.035;
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle) => (
        <mesh key={particle.id} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial color="#f7d37a" transparent opacity={particle.opacity} />
        </mesh>
      ))}
    </group>
  );
}
