import { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Mesh } from "three";

let storageAnim:number;

function Planet() {
    const ROTATE_SPEED = 0.003;

    const obj = useLoader(OBJLoader, "./earth.obj");
    const planetRef = useRef<Mesh>(null!);
    
    function stopPlanet() {
        window.cancelAnimationFrame(storageAnim);

        window.addEventListener("mouseup", runPlanet);
        window.addEventListener("touchend", runPlanet);
    }
    function runPlanet() {
        storageAnim = window.requestAnimationFrame(rotate);

        window.removeEventListener("mouseup", runPlanet);
        window.removeEventListener("touchend", runPlanet);
    }
    function rotate() {
        planetRef.current.rotateY(ROTATE_SPEED);
        storageAnim = window.requestAnimationFrame(rotate);
    }

    useEffect(() => {
        storageAnim = window.requestAnimationFrame(rotate);
    })
    return (
        <mesh ref={planetRef}
        onPointerDown={stopPlanet}>
            <pointLight position={[10, 10, 10]} color={"#9b59b6"} intensity={0.3} />
            <pointLight position={[-10, -10, -10]} color={"#e74c3c"} intensity={0.3} />
            <OrbitControls minDistance={5} maxDistance={5} enableZoom={false} />
            <primitive object={obj} scale={2.8} />
        </mesh>
    );
}

export default Planet;