import { useMemo } from 'react';

const branchDefinitions = [
  { id: 'left', position: [0.78, 0.38, 0.28], rotation: [0.24, 0.32, -0.52], scale: [0.52, 0.52, 0.52] },
  { id: 'right', position: [-0.72, -0.18, -0.32], rotation: [-0.18, 0.64, 0.62], scale: [0.46, 0.46, 0.46] },
  { id: 'upper', position: [0.22, 1.02, 0.1], rotation: [0.16, 0.22, -0.24], scale: [0.36, 0.36, 0.36] },
];

export function TurmericBranches({ geometry, material }) {
  const branches = useMemo(() => branchDefinitions, []);

  return (
    <group>
      {branches.map((branch) => (
        <mesh
          key={branch.id}
          geometry={geometry}
          material={material}
          position={branch.position}
          rotation={branch.rotation}
          scale={branch.scale}
          castShadow
          receiveShadow
        />
      ))}
    </group>
  );
}
