"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Sculpture() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.y = state.clock.elapsedTime * 0.25;
    mesh.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.5}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[2.2, 2]} />
        <meshPhysicalMaterial
          color="#1a1a1a"
          metalness={1}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={4} />
      <Environment preset="city" />
      <Sculpture />
    </Canvas>
  );
}