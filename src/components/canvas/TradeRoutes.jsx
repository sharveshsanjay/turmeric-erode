import React, { useMemo } from 'react';
import { Line } from '@react-three/drei';

import { buildTradeRoutes, geoToVector3 } from '../../utils/globeUtils';

export function TradeRoutes() {
  const routes = useMemo(() => buildTradeRoutes(3), []);

  return (
    <group>
      {routes.map((route, index) => (
        <group key={`${route.name}-${index}`}>
          <Line
            points={route.points}
            color="#f2c75b"
            lineWidth={1.5}
            transparent
            opacity={0.92}
            depthWrite={false}
          />
          <mesh position={route.destinationVec}>
            <sphereGeometry args={[0.055, 18, 18]} />
            <meshBasicMaterial color="#f8d46c" />
          </mesh>
        </group>
      ))}

      <mesh position={geoToVector3(11.3410, 77.7172, 3)}>
        <sphereGeometry args={[0.11, 24, 24]} />
        <meshBasicMaterial color="#f6c042" />
      </mesh>
    </group>
  );
}
