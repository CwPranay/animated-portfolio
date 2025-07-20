import { useEffect } from "react";

const BackgroundCanvas = () => {
  useEffect(() => {
    // You can set up Matter.js or any other canvas animations here
  }, []);

  return <div className="absolute inset-0 hidden md:block" id="wrapper-canvas" />;
};

export default BackgroundCanvas;
