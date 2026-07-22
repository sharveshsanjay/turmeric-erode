export function TurmericLighting() {
  return (
    <>
      <ambientLight intensity={0.7} color="#fff2d6" />
      <directionalLight position={[4, 6, 4]} intensity={1.35} color="#ffe9b8" />
      <directionalLight position={[-3, 2, -5]} intensity={0.85} color="#8eb5ff" />
      <pointLight position={[2.2, 1.3, 2.1]} intensity={0.8} color="#ffb34d" />
      <pointLight position={[-1.8, 1.2, -2.2]} intensity={0.65} color="#7fb7ff" />
    </>
  );
}
