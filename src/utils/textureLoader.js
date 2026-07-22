import { useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';

function createProceduralTexture(type) {
  if (typeof window === 'undefined') {
    return null;
  }

  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const context = canvas.getContext('2d');

  if (!context) {
    return null;
  }

  if (type === 'day') {
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#071b33');
    gradient.addColorStop(0.35, '#113a62');
    gradient.addColorStop(0.65, '#1f7b52');
    gradient.addColorStop(1, '#4dc4a3');
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const landShapes = [
      { x: 420, y: 340, r: 200 },
      { x: 720, y: 430, r: 180 },
      { x: 1240, y: 360, r: 220 },
      { x: 1540, y: 420, r: 200 },
      { x: 980, y: 620, r: 140 },
      { x: 250, y: 590, r: 120 },
    ];

    landShapes.forEach((shape) => {
      const landGradient = context.createRadialGradient(shape.x, shape.y, 20, shape.x, shape.y, shape.r);
      landGradient.addColorStop(0, '#6a9a59');
      landGradient.addColorStop(0.7, '#3d6b3d');
      landGradient.addColorStop(1, '#24492b');
      context.fillStyle = landGradient;
      context.beginPath();
      context.arc(shape.x, shape.y, shape.r, 0, Math.PI * 2);
      context.fill();
    });
  }

  if (type === 'normal') {
    context.fillStyle = '#7f7f7f';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 0.45;
    context.fillStyle = '#ffffff';
    context.beginPath();
    context.arc(420, 340, 180, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.arc(1240, 360, 220, 0, Math.PI * 2);
    context.fill();
  }

  if (type === 'roughness') {
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 0.34;
    for (let i = 0; i < 2500; i += 1) {
      const x = (i * 29) % canvas.width;
      const y = (i * 17) % canvas.height;
      context.fillStyle = `rgba(0, 0, 0, ${0.1 + ((i % 11) / 80)})`;
      context.fillRect(x, y, 1, 1);
    }
  }

  if (type === 'ao') {
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    const shadowGradient = context.createRadialGradient(canvas.width * 0.5, canvas.height * 0.5, 160, canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.7);
    shadowGradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
    shadowGradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
    context.fillStyle = shadowGradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  if (type === 'cloud') {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#ffffff';
    for (let i = 0; i < 220; i += 1) {
      const x = (i * 73) % canvas.width;
      const y = (i * 53) % canvas.height;
      const radius = 60 + (i % 8) * 12;
      context.globalAlpha = 0.08 + (i % 7) * 0.02;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function useTextureWithFallback(urls, type) {
  // urls may be a string or an array of candidate urls
  const candidates = Array.isArray(urls) ? urls : [urls];
  const fallbackTexture = useMemo(() => createProceduralTexture(type), [type]);
  const [texture, setTexture] = useState(fallbackTexture);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const loader = new THREE.TextureLoader();
    const fallback = createProceduralTexture(type);

    let cancelled = false;

    const tryLoad = (index) => {
      if (cancelled) return;
      if (index >= candidates.length) {
        if (fallback) {
          fallback.colorSpace = type === 'day' ? THREE.SRGBColorSpace : THREE.NoColorSpace;
          fallback.anisotropy = 8;
          fallback.needsUpdate = true;
          setTexture(fallback);
        }
        return;
      }

      loader.load(
        candidates[index],
        (loadedTexture) => {
          if (cancelled) return;
          loadedTexture.colorSpace = type === 'day' ? THREE.SRGBColorSpace : THREE.NoColorSpace;
          loadedTexture.anisotropy = 8;
          loadedTexture.needsUpdate = true;
          setTexture(loadedTexture);
        },
        undefined,
        () => {
          // try next candidate
          tryLoad(index + 1);
        }
      );
    };

    tryLoad(0);

    return () => {
      cancelled = true;
      if (fallback) fallback.dispose();
    };
  }, [type, JSON.stringify(candidates)]);

  return texture;
}
