import useCanvas from "./useCanvas";
import { useState, useEffect, useRef } from "react";

const Canvas = ({ draw }) => {
  const canvasRef = useCanvas(draw);

  return <canvas className="canvas" width="400" height="400" ref={canvasRef} />;
};

export default Canvas;
