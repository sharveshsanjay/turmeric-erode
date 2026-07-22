import * as THREE from 'three';

export const DESTINATIONS = [
  // North America
  { name: 'USA', lat: 40.7128, lon: -74.0060, region: 'North America' },
  { name: 'Canada', lat: 43.6532, lon: -79.3832, region: 'North America' },
  { name: 'Mexico', lat: 19.4326, lon: -99.1332, region: 'North America' },
  
  // Europe
  { name: 'UK', lat: 51.5074, lon: -0.1278, region: 'Europe' },
  { name: 'Germany', lat: 50.1109, lon: 8.6821, region: 'Europe' },
  { name: 'France', lat: 48.8566, lon: 2.3522, region: 'Europe' },
  { name: 'Netherlands', lat: 52.3676, lon: 4.9041, region: 'Europe' },
  { name: 'Spain', lat: 40.4168, lon: -3.7038, region: 'Europe' },
  { name: 'Italy', lat: 41.9028, lon: 12.4964, region: 'Europe' },
  { name: 'Switzerland', lat: 47.3769, lon: 8.5417, region: 'Europe' },
  
  // Asia
  { name: 'Singapore', lat: 1.3521, lon: 103.8198, region: 'Southeast Asia' },
  { name: 'Malaysia', lat: 3.1390, lon: 101.6869, region: 'Southeast Asia' },
  { name: 'Japan', lat: 35.6762, lon: 139.6503, region: 'East Asia' },
  { name: 'South Korea', lat: 37.5665, lon: 126.9780, region: 'East Asia' },
  { name: 'China', lat: 31.2304, lon: 121.4737, region: 'East Asia' },
  { name: 'India', lat: 28.6139, lon: 77.2090, region: 'South Asia' },
  { name: 'UAE', lat: 25.2048, lon: 55.2708, region: 'Middle East' },
  { name: 'Saudi Arabia', lat: 24.7136, lon: 46.6753, region: 'Middle East' },
  { name: 'Israel', lat: 32.0853, lon: 34.7818, region: 'Middle East' },
  
  // Oceania
  { name: 'Australia', lat: -33.8688, lon: 151.2093, region: 'Oceania' },
  { name: 'New Zealand', lat: -36.8485, lon: 174.7633, region: 'Oceania' },
  
  // South America
  { name: 'Brazil', lat: -23.5505, lon: -46.6333, region: 'South America' },
  { name: 'Argentina', lat: -34.6037, lon: -58.3816, region: 'South America' },
  
  // Africa
  { name: 'South Africa', lat: -33.9249, lon: 18.4241, region: 'Africa' },
  { name: 'Nigeria', lat: 6.5244, lon: 3.3792, region: 'Africa' },
  { name: 'Kenya', lat: -1.2864, lon: 36.8172, region: 'Africa' },
];

// Erode coordinates
export const ERODE = { lat: 11.3410, lon: 77.7172 };

// Major trade hubs with higher route density
export const MAJOR_HUBS = [
  'USA', 'UK', 'Germany', 'Singapore', 'UAE', 'Australia', 'Japan'
];

export function geoToVector3(lat, lon, radius = 3) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

export function buildTradeRoutes(radius = 3, options = {}) {
  const {
    maxRoutes = 20,
    includeAll = false,
    originLat = ERODE.lat,
    originLon = ERODE.lon,
    curveHeight = 0.24,
    pointsCount = 90,
    majorHubsOnly = false,
  } = options;

  const originVec = geoToVector3(originLat, originLon, radius);
  
  // Filter destinations
  let destinations = [...DESTINATIONS];
  
  if (majorHubsOnly) {
    destinations = destinations.filter(d => MAJOR_HUBS.includes(d.name));
  }
  
  if (!includeAll) {
    destinations = destinations.slice(0, maxRoutes);
  }

  return destinations.map((destination) => {
    const destinationVec = geoToVector3(destination.lat, destination.lon, radius);
    
    // Calculate midpoint with outward curve
    const midVec = new THREE.Vector3()
      .addVectors(originVec, destinationVec)
      .multiplyScalar(0.5);
    
    const distance = originVec.distanceTo(destinationVec);
    
    // Curve height varies based on distance and region
    const heightMultiplier = MAJOR_HUBS.includes(destination.name) ? 0.32 : 0.24;
    midVec.normalize().multiplyScalar(radius + distance * heightMultiplier);

    const curve = new THREE.QuadraticBezierCurve3(originVec, midVec, destinationVec);
    const points = curve.getPoints(pointsCount);

    // Generate points for animation
    const animatedPoints = [];
    for (let i = 0; i < pointsCount; i++) {
      const t = i / pointsCount;
      const point = curve.getPoint(t);
      animatedPoints.push(point);
    }

    return {
      ...destination,
      originVec: originVec.clone(),
      destinationVec: destinationVec.clone(),
      midVec: midVec.clone(),
      curve,
      points,
      animatedPoints,
      distance: distance,
      geometry: new THREE.BufferGeometry().setFromPoints(points),
      isMajorHub: MAJOR_HUBS.includes(destination.name),
      region: destination.region,
    };
  });
}

// Generate routes grouped by region
export function buildRegionalRoutes(radius = 3) {
  const regions = {};
  
  DESTINATIONS.forEach(dest => {
    if (!regions[dest.region]) {
      regions[dest.region] = [];
    }
    regions[dest.region].push(dest);
  });

  const regionalRoutes = {};
  
  Object.keys(regions).forEach(region => {
    const destinations = regions[region];
    const routes = destinations.map(dest => {
      const destVec = geoToVector3(dest.lat, dest.lon, radius);
      const originVec = geoToVector3(ERODE.lat, ERODE.lon, radius);
      
      const midVec = new THREE.Vector3()
        .addVectors(originVec, destVec)
        .multiplyScalar(0.5);
      
      const distance = originVec.distanceTo(destVec);
      midVec.normalize().multiplyScalar(radius + distance * 0.24);
      
      const curve = new THREE.QuadraticBezierCurve3(originVec, midVec, destVec);
      const points = curve.getPoints(60);
      
      return {
        ...dest,
        points,
        geometry: new THREE.BufferGeometry().setFromPoints(points),
        originVec: originVec.clone(),
        destinationVec: destVec.clone(),
      };
    });
    
    regionalRoutes[region] = routes;
  });
  
  return regionalRoutes;
}

// Get route statistics
export function getRouteStats() {
  const totalDestinations = DESTINATIONS.length;
  const regions = [...new Set(DESTINATIONS.map(d => d.region))];
  const majorHubs = MAJOR_HUBS.length;
  
  return {
    totalDestinations,
    regions,
    majorHubs,
    regionCount: regions.length,
  };
}

// Generate pulsating route effect data
export function getPulsingRouteData(radius = 3, speed = 0.5) {
  const routes = buildTradeRoutes(radius, { includeAll: true });
  
  return routes.map((route, index) => {
    const pointsCount = 90;
    const positions = [];
    const progress = (Date.now() / 1000 * speed + index * 0.1) % 1;
    
    for (let i = 0; i < pointsCount; i++) {
      const t = (i / pointsCount + progress) % 1;
      const point = route.curve.getPoint(t);
      positions.push(point.x, point.y, point.z);
    }
    
    return {
      ...route,
      positions,
      progress,
    };
  });
}