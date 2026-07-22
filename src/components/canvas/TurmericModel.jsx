import React, { Suspense, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

import { createBranchGeometry, createRhizomeGeometry } from './turmericUtils';
import { TurmericBody } from './TurmericBody';
import { TurmericBranches } from './TurmericBranches';
import { TurmericCut } from './TurmericCut';
import { TurmericRoots } from './TurmericRoots';
import { FloatingParticles } from './FloatingParticles';
import { TurmericLighting } from './TurmericLighting';
import { TurmericAnimation } from './TurmericAnimation';

function configureTexture(texture, sRGB = false) {
  if (!texture) {
    return;
  }

  texture.anisotropy = 8;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(1, 1);

  if (sRGB) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
}

export function TurmericModel({ visible = true, stage = 0, scrollProgress = 0 }) {
  const groupRef = useRef(null);

  const [albedoMap, normalMap, roughnessMap, aoMap, heightMap] = useTexture([
    '/textures/main_preview.png',
    '/textures/turmeric_normal.jpg',
    '/textures/turmeric_roughness.jpg',
    '/textures/turmeric_ao.jpg',
    '/textures/turmeric_height.jpg',
  ]);
  const cutMap = useTexture('/textures/turmeric_cut.jpg');

  const rhizomeGeometry = useMemo(() => createRhizomeGeometry(), []);
  const branchGeometry = useMemo(() => createBranchGeometry(), []);
  const cutGeometry = useMemo(() => new THREE.CircleGeometry(0.72, 64), []);

  const bodyMaterial = useMemo(() => {
    const material = new THREE.MeshPhysicalMaterial({
      map: albedoMap,
      normalMap,
      roughnessMap,
      aoMap,
      displacementMap: heightMap,
      color: new THREE.Color('#d6972f'),
      roughness: 0.72,
      metalness: 0.04,
      clearcoat: 0.14,
      clearcoatRoughness: 0.48,
      displacementScale: 0.024,
      side: THREE.DoubleSide,
    });

    material.ior = 1.46;
    material.flatShading = false;

    configureTexture(albedoMap, true);
    configureTexture(normalMap);
    configureTexture(roughnessMap);
    configureTexture(aoMap);
    configureTexture(heightMap);

    return material;
  }, [albedoMap, normalMap, roughnessMap, aoMap, heightMap]);

  const cutMaterial = useMemo(() => {
    const material = new THREE.MeshPhysicalMaterial({
      map: cutMap,
      color: new THREE.Color('#d96f00'),
      roughness: 0.32,
      metalness: 0.02,
      emissive: new THREE.Color('#ffb347'),
      emissiveIntensity: 0.12,
      clearcoat: 0.16,
      clearcoatRoughness: 0.28,
    });

    configureTexture(cutMap, true);

    return material;
  }, [cutMap]);

  useFrame((state) => {
    if (!visible || !groupRef.current) {
      return;
    }

    const time = state.clock.getElapsedTime();
    const drift = Math.sin(time * 0.8 + scrollProgress * 0.6) * 0.06;
    groupRef.current.position.y = drift;
    groupRef.current.rotation.y = scrollProgress * Math.PI * 2 + Math.sin(time * 0.34 + stage * 0.2) * 0.045;
    groupRef.current.rotation.x = Math.sin(time * 0.22) * 0.03;
    groupRef.current.rotation.z = Math.sin(time * 0.18 + scrollProgress * 0.2) * 0.018;
  });

  if (!visible) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <group ref={groupRef} position={[0, 0, 0]}>
        <TurmericLighting />
        <TurmericAnimation visible={visible}>
          <TurmericBody geometry={rhizomeGeometry} material={bodyMaterial} />
          <TurmericBranches geometry={branchGeometry} material={bodyMaterial} />
          <TurmericCut geometry={cutGeometry} material={cutMaterial} position={[0, 1.82, 0]} />
          <TurmericRoots />
          <FloatingParticles />
        </TurmericAnimation>
      </group>
    </Suspense>
  );
}

export default TurmericModel;