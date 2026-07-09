// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Float, Sparkles } from "@react-three/drei";
// import { useRef } from "react";
// import * as THREE from "three";


// function ThreeD() {
//   const coreRef = useRef<THREE.Mesh>(null);

//   useFrame(({ clock }) => {
//     if (coreRef.current) {
//       coreRef.current.rotation.y = clock.getElapsedTime() * 0.25;
//       coreRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
//     }
//   });


//   return (
//     <>
//       {/* Main glowing wireframe core */}
//       <mesh ref={coreRef}>

//         <icosahedronGeometry 
//           args={[1.5, 4]} 
//         />

//         <meshStandardMaterial
//           color="#8b5cf6"
//           emissive="#4f46e5"
//           emissiveIntensity={2}
//           wireframe
//         />

//       </mesh>


//       {/* Inner glowing sphere */}
//       <mesh scale={0.75}>

//         <sphereGeometry 
//           args={[1, 64, 64]} 
//         />

//         <meshStandardMaterial
//           color="#ec4899"
//           emissive="#ec4899"
//           emissiveIntensity={1.5}
//           transparent
//           opacity={0.25}
//         />

//       </mesh>


//       {/* Floating particles */}
//       <Sparkles
//         count={120}
//         scale={4}
//         size={2}
//         speed={0.4}
//       />

//     </>
//   );
// }



// export default function Hero3D() {

//   return (

//     <div className="w-full h-full">

//       <Canvas
//         camera={{
//           position: [0, 0, 5],
//           fov: 45
//         }}
//       >

//         <ambientLight intensity={1} />


//         <pointLight
//           position={[3, 3, 3]}
//           intensity={5}
//         />


//         <Float
//           speed={2}
//           rotationIntensity={0.4}
//           floatIntensity={0.5}
//         >

//           <ThreeD />

//         </Float>


//         <OrbitControls
//           enableZoom={false}
//           autoRotate
//           autoRotateSpeed={0.5}
//         />


//       </Canvas>

//     </div>

//   );
// }