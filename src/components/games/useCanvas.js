import React, { useState, useEffect, useRef } from "react";

const useCanvas = ({ draw }) => {
  const canvasRef = useRef(null);

  //Empty array acts like componentDidMount, so it only runs once.
  //No second argument acts as both componentDidMount and componentDidUpdate, so it runs first on mount and then on every re-render.
  // second argument = rerender depending on the argument
  useEffect(() => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      draw(ctx, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};
export default useCanvas;
