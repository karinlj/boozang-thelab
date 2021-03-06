import useCanvas from "./useCanvas";

const Canvas = ({ draw }) => {
  //canvasRef = returned value
  const canvasRef = useCanvas(draw);

  return <canvas className="canvas" width="400" height="400" ref={canvasRef} />;
};

export default Canvas;
