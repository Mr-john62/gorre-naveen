"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingOrb() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    mesh.current.rotation.x += delta * 0.08;
    mesh.current.rotation.y += delta * 0.12;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.6}
      floatIntensity={1.2}
    >
      <Sphere ref={mesh} args={[1.1, 64, 64]} position={[2.8, 0, -2]}>
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.04}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
}

function Particle({
  position,
  size,
}: {
  position: [number, number, number];
  size: number;
}) {
  return (
    <Float speed={2} floatIntensity={1}>
      <Sphere args={[size, 32, 32]} position={position}>
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.18}
        />
      </Sphere>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>

        <ambientLight intensity={0.8} />

        <pointLight
          position={[5, 4, 3]}
          intensity={2}
        />

        <pointLight
          position={[-4, -3, 2]}
          intensity={1}
        />

        <FloatingOrb />

        <Particle position={[3.4, 2.2, -2]} size={0.05} />
        <Particle position={[2.9, -2.3, -2]} size={0.04} />
        <Particle position={[1.8, 1.2, -2]} size={0.03} />
        <Particle position={[4.1, -0.6, -2]} size={0.05} />
        <Particle position={[3.6, 0.8, -2]} size={0.025} />
        <Particle position={[2.2, -1.4, -2]} size={0.035} />

      </Canvas>

      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
    </div>
  );
}