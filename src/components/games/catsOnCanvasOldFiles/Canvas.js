import useCanvas from "./useCanvas";
import cat from "../../img/kitten_icon.png";
import { useState, useEffect, useRef } from "react";

const Canvas = ({ draw }) => {
  const canvasRef = useCanvas(draw);

  return (
    <div>
      <canvas className="canvas" width="400" height="400" ref={canvasRef} />
      <img ref="image" src={cat} className="hidden" />
    </div>
  );
};

export default Canvas;
