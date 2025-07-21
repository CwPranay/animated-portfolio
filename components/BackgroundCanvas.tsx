"use client";

import Particles from "@tsparticles/react";
import { useCallback } from "react";
import { loadAll } from "@tsparticles/all";
import type { Engine } from "@tsparticles/engine";
import particlesConfig from "./particles";

const BackgroundCanvas = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadAll(engine); // Load all plugins
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
    </div>
  );
};

export default BackgroundCanvas;
