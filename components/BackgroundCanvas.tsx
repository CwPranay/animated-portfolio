"use client";

import { Particles } from "@tsparticles/react";
import Ballpit from "./Ballpit"; // Adjust path if Ballpit is in a different directory

const BackgroundCanvas = () => {
  return (
    <div className="absolute inset-0 z-0">


      <Ballpit
        className="w-full h-full"
        followCursor={true}
        wallBounce={0.95}
        gravity={0.07}

        count={100}
        // 👈 Reduce the number of balls
        colors={[
          0x00cfff, // Cyan
          0x007bff, // Blue
          0xd8b4fe, // Soft lavender
          0xfcc2ff, // Pinky purple
          0xb2f5ea, // Aqua light
          0xffffff, // White
        ]} 
      />
    </div>
  );
};

export default BackgroundCanvas;
