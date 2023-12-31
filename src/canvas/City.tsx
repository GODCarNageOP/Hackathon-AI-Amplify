import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../components/Loader";

const City = () => {

const computer = useGLTF("./nightcity/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black"/>
      <pointLight intensity={1} />
      
      <spotLight 
    position={[-20, 100, 20]}
    angle={0.12}
    penumbra={1}
    intensity={2}
    castShadow
    shadow-mapSize={1024}
      />
      <primitive
      object={computer.scene}
      scale={0.75}
      position={[0, -4.25, -2]}
      rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  )
}

const CityCanvas:React.FC= () => {
  return(
    <Canvas frameloop='demand' shadows camera={{ position: [20, 10, 5], fov:20}} gl={{preserveDrawingBuffer: true}} id='bg-transparent'>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        autoRotate
        autoRotateSpeed={-2}/>
        <City/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default CityCanvas;