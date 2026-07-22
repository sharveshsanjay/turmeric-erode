import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function TurmericAnimation({ children, visible = true }) {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!visible || !groupRef.current) {
      return;
    }

    const time = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(time * 0.8) * 0.08;
    groupRef.current.rotation.y = Math.sin(time * 0.35) * 0.12 + 0.08;
    groupRef.current.rotation.x = Math.sin(time * 0.26) * 0.035;
    groupRef.current.rotation.z = Math.sin(time * 0.18) * 0.025;
  });

  return <group ref={groupRef}>{children}</group>;
}
