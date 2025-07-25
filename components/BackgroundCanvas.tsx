"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    initMatterCanvas?: () => void;
  }
}

const BackgroundCanvas = () => {
  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(`Failed to load script ${src}`);
        document.body.appendChild(script);
      });
    };

    // Load all scripts in order
    const loadScripts = async () => {
      try {
        await loadScript("https://code.jquery.com/jquery-3.6.0.min.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.12.0/matter.min.js");
        await loadScript("https://cdn.jsdelivr.net/npm/matter-wrap@0.2.0/build/matter-wrap.min.js");
        await loadScript("https://cdn.jsdelivr.net/npm/matter-attractors@0.1.6/build/matter-attractors.min.js");
        await loadScript("/matter-bg.js"); // Your local script in /public

        if (typeof window.initMatterCanvas === "function") {
          window.initMatterCanvas();
        }
      } catch (err) {
        console.error(err);
      }
    };

    loadScripts();

    return () => {
      // No need to remove scripts unless you reload the component dynamically
    };
  }, []);

  return <div
  id="wrapper-canvas"
  className="fixed top-0 left-0 md:block hidden w-full h-full -z-0 overflow-hidden"
/>

};

export default BackgroundCanvas;
