import React, { useState, useEffect, useRef } from "react";
import cat from "../img/cat_icon.png";
const catImage = <img src={cat} alt="Cat" />;

const player = {
  w: 50,
  h: 70,
  x: 20,
  y: 200,
  speed: 10,
  dx: 0,
  dy: 0,
};

export function drawPlayer(ctx) {
  ctx.drawImage(catImage, player.x, player.y, player.w, player.h);
}

//The useCanvas() Function:
export function useCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasObj = canvasRef.current;

    const ctx = canvasObj.getContext("2d");
    drawPlayer(ctx);
  }, []);

  return canvasRef;
}
