"use client";

import { useRef, useMemo, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Icosahedron, Octahedron } from "@react-three/drei";
import * as THREE from "three";

function Crystal() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    mesh.current.rotation.x = t * 0.1;
    mesh.current.rotation.y = t * 0.14;
  });
  return (
    <Float speed={1.3} rotationIntensity={0.5} floatIntensity={0.9}>
      <Icosahedron ref={mesh} args={[1.65, 12]}>
        <MeshDistortMaterial
          color="#6d5efc"
          emissive="#2a1a7a"
          emissiveIntensity={0.5}
          roughness={0.22}
          metalness={0.35}
          distort={0.42}
          speed={2.1}
        />
      </Icosahedron>
    </Float>
  );
}

function Wire() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = -state.clock.elapsedTime * 0.06;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.04;
  });
  return (
    <Icosahedron ref={mesh} args={[2.9, 1]}>
      <meshBasicMaterial color="#3a3e7e" wireframe transparent opacity={0.35} />
    </Icosahedron>
  );
}

function Shards() {
  const colors = ["#22d3ee", "#ff5d8f", "#ffcf6b", "#6d5efc"];
  const shards = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        position: [
          Math.cos((i / 7) * Math.PI * 2) * 3.1,
          Math.sin((i / 7) * Math.PI * 2) * 2.0,
          Math.sin(i) * 1.2 - 0.5,
        ] as [number, number, number],
        scale: 0.18 + (i % 3) * 0.07,
        color: colors[i % colors.length],
        speed: 1 + (i % 4) * 0.4,
      })),
    [],
  );

  return (
    <>
      {shards.map((s, i) => (
        <Float key={i} speed={s.speed} rotationIntensity={1.4} floatIntensity={1.6}>
          <Octahedron args={[s.scale]} position={s.position}>
            <meshStandardMaterial
              color={s.color}
              emissive={s.color}
              emissiveIntensity={0.6}
              roughness={0.15}
              metalness={0.4}
            />
          </Octahedron>
        </Float>
      ))}
    </>
  );
}

function Rig({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const x = state.pointer.x * 0.5;
    const y = state.pointer.y * 0.35;
    group.current.rotation.y += (x - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-y - group.current.rotation.x) * 0.05;
  });
  return <group ref={group}>{children}</group>;
}

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.55} />
      <pointLight position={[6, 5, 5]} intensity={2.6} decay={0} color="#22d3ee" />
      <pointLight position={[-7, -3, 3]} intensity={2.4} decay={0} color="#ff5d8f" />
      <pointLight position={[0, 4, -5]} intensity={1.8} decay={0} color="#6d5efc" />
      <Rig>
        <Crystal />
        <Wire />
        <Shards />
      </Rig>
      <Sparkles count={140} scale={[13, 9, 7]} size={2.2} speed={0.28} color="#aab0ff" opacity={0.7} />
    </Canvas>
  );
}
