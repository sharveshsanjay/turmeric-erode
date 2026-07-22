import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { buildTradeRoutes } from '../../utils/globeUtils';

function createParticleTrail(route, count = 18) {
  const points = route.points;
  const trail = [];

  for (let i = 0; i < count; i += 1) {
    const t = i / count;
    const point = points[Math.floor(t * (points.length - 1))];
    trail.push(point.clone());
  }

  return trail;
}

export function MovingParticles() {
  const routes = useMemo(() => buildTradeRoutes(3), []);
  const groupRef = useRef(null);

  const particles = useMemo(() => {
    return routes.map((route, index) => ({
      key: `${route.name}-${index}`,
      route,
      trail: createParticleTrail(route, 18),
      speed: 0.001 + index * 0.00018,
    }));
  }, [routes]);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;
    groupRef.current.children.forEach((child, index) => {
      const particle = particles[index];
      if (!particle) return;
      const trail = particle.trail;
      const progress = (time * particle.speed * 1000) % trail.length;
      const indexA = Math.floor(progress);
      const indexB = (indexA + 1) % trail.length;
      const t = progress - indexA;
      const point = trail[indexA].clone().lerp(trail[indexB], t);
      child.position.copy(point);
      child.material.opacity = 0.8 + Math.sin(time * 2.3 + index * 0.7) * 0.15;
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => (
        <mesh key={particle.key}>
          <sphereGeometry args={[0.012, 12, 12]} />
          <meshBasicMaterial color="#ffd36a" transparent opacity={0.85} />
        </mesh>
      ))}
    </group>
  );
}
