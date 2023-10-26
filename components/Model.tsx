import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, useAnimations } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/camping.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.position.set(0.5, -2, 1.9);
    mesh.current.rotation.y = -0.5;
    // mesh.current.rotation.y += -0.003;
    mesh.current.rotation.x = -0.3;
  });

  return (
    <mesh ref={mesh}>
      <Environment preset= "forest" />
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export default function Model() {
  return (
    <div className='h-full w-[100%] flex justify-center items-center  overflow-visible'>
      <Canvas>
        {/* <OrbitControls /> */}
        {/* <ambientLight /> */}
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
};