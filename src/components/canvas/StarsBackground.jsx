import React from 'react';
import { Stars } from '@react-three/drei';

export function StarsBackground() {
  return (
    <Stars
      radius={120}
      depth={50}
      count={6000}
      factor={5}
      fade
      saturation={0}
      speed={0.35}
    />
  );
}
