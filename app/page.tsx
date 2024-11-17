"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import React from "react";
import TiltCard from "./components/TiltCard";
import TypingEffect from "./components/TypingEffect";

import Link from "next/link";

const Model = () => {
  const { scene } = useGLTF("untitled.glb");
  return <primitive object={scene} />;
};

export default function Home() {
  const phrases: string[] = [
    "Back-end developer",
    "Front-end developer",
    "UI/UX design enthusiast",
    "AI enthusiast",
    "Problem solver",
    "Self-taught software engineer",
  ];

  return (
    <div className="relative flex flex-col items-end justify-start min-h-screen p-4">
      <Link href={"/about"} className="z-10">
        <TiltCard className="bgc-custom-gray-gradient-transparent flex flex-col justify-center items-start rounded-lg p-6 max-w-full">
          <span className="text-slate-400">Hi there, I'm</span>
          <span className="mt-2 text-4xl font-thin text-slate-300">
            PEDRO{" "}
            <span className="animated-text-gradient font-bold">POUZADA</span>
          </span>
          <span className="animated-text-gradient text-2xl mb-2 flex gap-1">
            {"|"}
            <TypingEffect phrases={phrases} />
          </span>
          <span className="text-slate-300">
            Welcome to my professional portfolio
          </span>
        </TiltCard>
      </Link>

      <div className="absolute inset-0 z-1 w-full h-full">
        <Canvas
          camera={{ position: [0, 1, 6] }}
          className="w-full h-full cursor-move"
        >
          <ambientLight intensity={1} />
          <Model />
          <OrbitControls
            minDistance={2}
            maxDistance={14}
            enablePan={true}
            enableZoom={true}
          />
          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
}
