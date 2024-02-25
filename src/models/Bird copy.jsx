import React, { useEffect, useRef } from "react";

import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);


// //   original useFrame code
//   useFrame(({ clock, camera }) => {
//     // update the y position,simulate flight moving in sinus wave
//     birdref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

//     // check if bird reached a certain endpoint relative to camera
//     if (birdref.current.position.x > camera.position.x + 10) {
//       // change direction to backward & rotate bird 180 degree on the y-axis
//       birdref.current.rotation.y = Math.PI;
//     } else if (birdref.current.position.x < camera.position.x - 10) {
//       // change direction to forward & reset birds rotation
//       birdref.current.rotation.y = 0;
//     }

//     // update the x and z positions based on direction
//     if (birdref.current.rotation.y === 0) {
//       // moving forward
//       birdref.current.position.x += 0.01;
//       birdref.current.position.z -= 0.01;
//     } else {
//       // moving backward
//       birdref.current.position.x -= 0.01;
//       birdref.current.position.z += 0.01;
//     }
//   });

useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      // Moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });


  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
