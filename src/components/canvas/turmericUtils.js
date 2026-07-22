import * as THREE from 'three';

function createCanvas(width = 1024, height = 1024) {
  if (typeof window === 'undefined') {
    return null;
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function drawTexture(canvas, painter) {
  const context = canvas?.getContext('2d');
  if (!context) {
    return '';
  }

  painter(context, canvas.width, canvas.height);
  return canvas.toDataURL('image/png');
}

export function createProceduralTextureSet() {
  if (typeof window === 'undefined') {
    return {
      albedo: '',
      normal: '',
      roughness: '',
      ao: '',
      height: '',
      cut: '',
    };
  }

  const albedoCanvas = createCanvas(2048, 2048);
  const normalCanvas = createCanvas(1024, 1024);
  const roughnessCanvas = createCanvas(1024, 1024);
  const aoCanvas = createCanvas(1024, 1024);
  const heightCanvas = createCanvas(1024, 1024);
  const cutCanvas = createCanvas(1024, 1024);

  const albedoUrl = drawTexture(albedoCanvas, (context, width, height) => {
    const background = context.createLinearGradient(0, 0, width, height);
    background.addColorStop(0, '#7a4a19');
    background.addColorStop(0.35, '#aa6622');
    background.addColorStop(0.7, '#c77b2b');
    background.addColorStop(1, '#5d2f14');
    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 3800; i += 1) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = 2 + Math.random() * 3;
      const tone = Math.random() > 0.65 ? 'rgba(44, 24, 10, 0.55)' : 'rgba(255, 208, 92, 0.36)';
      context.fillStyle = tone;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }

    context.strokeStyle = 'rgba(73, 40, 18, 0.55)';
    context.lineWidth = 6;
    for (let i = 0; i < 72; i += 1) {
      const y = (i / 72) * height;
      context.beginPath();
      context.moveTo(0, y);
      context.bezierCurveTo(width * 0.28, y + 24 - Math.random() * 48, width * 0.72, y + 24 - Math.random() * 48, width, y + 12);
      context.stroke();
    }
  });

  const normalUrl = drawTexture(normalCanvas, (context, width, height) => {
    context.fillStyle = '#808080';
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 2500; i += 1) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = 1 + Math.random() * 3;
      const shade = 110 + Math.random() * 80;
      context.fillStyle = `rgb(${shade}, ${shade}, ${shade})`;
      context.fillRect(x, y, size, size);
    }

    context.strokeStyle = 'rgba(255, 255, 255, 0.22)';
    context.lineWidth = 2;
    for (let i = 0; i < 40; i += 1) {
      const y = (i / 40) * height;
      context.beginPath();
      context.moveTo(0, y);
      context.quadraticCurveTo(width * 0.5, y + 20 - Math.random() * 40, width, y);
      context.stroke();
    }
  });

  const roughnessUrl = drawTexture(roughnessCanvas, (context, width, height) => {
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, width, height);
    context.globalAlpha = 0.3;
    for (let i = 0; i < 2600; i += 1) {
      const x = (i * 37) % width;
      const y = (i * 19) % height;
      const value = 0.12 + ((i % 7) / 16);
      context.fillStyle = `rgba(0, 0, 0, ${value})`;
      context.fillRect(x, y, 1, 1);
    }
  });

  const aoUrl = drawTexture(aoCanvas, (context, width, height) => {
    context.fillStyle = '#000000';
    context.fillRect(0, 0, width, height);
    const shadow = context.createRadialGradient(width * 0.5, height * 0.5, 80, width * 0.5, height * 0.5, width * 0.7);
    shadow.addColorStop(0, 'rgba(0,0,0,0.08)');
    shadow.addColorStop(1, 'rgba(0,0,0,0.92)');
    context.fillStyle = shadow;
    context.fillRect(0, 0, width, height);
  });

  const heightUrl = drawTexture(heightCanvas, (context, width, height) => {
    context.fillStyle = '#808080';
    context.fillRect(0, 0, width, height);
    context.globalAlpha = 0.85;
    for (let i = 0; i < 2200; i += 1) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = 1 + Math.random() * 4;
      const gray = 70 + Math.random() * 120;
      context.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }
  });

  const cutUrl = drawTexture(cutCanvas, (context, width, height) => {
    const gradient = context.createRadialGradient(width * 0.5, height * 0.5, 12, width * 0.5, height * 0.5, width * 0.52);
    gradient.addColorStop(0, '#ffd966');
    gradient.addColorStop(0.35, '#f28c00');
    gradient.addColorStop(0.75, '#cc6b00');
    gradient.addColorStop(1, '#7a3d12');
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    context.strokeStyle = 'rgba(255, 221, 128, 0.35)';
    context.lineWidth = 3;
    for (let i = 0; i < 24; i += 1) {
      const radius = 44 + i * 16;
      context.beginPath();
      context.arc(width * 0.5, height * 0.5, radius, 0, Math.PI * 2);
      context.stroke();
    }
  });

  return {
    albedo: albedoUrl,
    normal: normalUrl,
    roughness: roughnessUrl,
    ao: aoUrl,
    height: heightUrl,
    cut: cutUrl,
  };
}

function pseudoRandom(seed) {
  return Math.abs((Math.sin(seed) * 43758.5453123) % 1);
}

export function createRhizomeGeometry(options = {}) {
  const {
    radiusTop = 0.78,
    radiusBottom = 1.02,
    length = 3.6,
    radialSegments = 64,
    heightSegments = 80,
  } = options;

  const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, length, radialSegments, heightSegments);
  const position = geometry.attributes.position;
  const vector = new THREE.Vector3();

  for (let index = 0; index < position.count; index += 1) {
    vector.fromBufferAttribute(position, index);

    const normalizedY = (vector.y + length / 2) / length;
    const angle = Math.atan2(vector.z, vector.x);
    const wrinkle = Math.sin(normalizedY * Math.PI * 6.0 + vector.x * 0.9) * 0.05;
    const bulge = Math.sin(normalizedY * Math.PI * 2.6 + vector.z * 1.3) * 0.04;
    const ring = Math.sin(normalizedY * Math.PI * 5.2 + angle * 3.2) * 0.06;
    const knot = Math.sin(normalizedY * Math.PI * 2.8) * 0.055;
    const noise = (pseudoRandom(index * 0.587 + normalizedY * 14.7) - 0.5) * 0.1;
    const taper = Math.sin(normalizedY * Math.PI) * 0.16;

    vector.x += vector.x * (0.08 + bulge + ring * 0.9 + knot * 0.6 + noise * 0.7) + taper * 0.18 + wrinkle * 0.35;
    vector.z += vector.z * (0.06 + bulge - ring * 0.8 + knot * 0.45 + noise * 0.55) - taper * 0.09 + wrinkle * 0.25;
    vector.y += Math.sin(vector.x * 1.35 + vector.z * 1.45) * 0.03 + Math.cos(angle * 2.2 + normalizedY * 5.8) * 0.018;

    position.setXYZ(index, vector.x, vector.y, vector.z);
  }

  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

export function createBranchGeometry() {
  return createRhizomeGeometry({
    radiusTop: 0.28,
    radiusBottom: 0.42,
    length: 1.6,
    radialSegments: 40,
    heightSegments: 58,
  });
}
