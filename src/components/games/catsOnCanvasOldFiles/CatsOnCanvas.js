import { useState, useEffect, useRef } from "react";
import "./games.scss";
import { CatsOnCanvasVideos } from "../text/videos/VideoSections";
import { CatsOnCanvasIntro } from "../text/Intros";
import { CatsOnCanvasTestInfo } from "../text/TestInfos";
import useCanvas from "./useCanvas";
//import ResultMessages from "../compMessages/ResultMessages";
import Canvas from "./Canvas";

const CatsOnCanvas = () => {
  // const canvasRef = useCanvas();

  // const draw = (ctx, frameCount) => {
  //   // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //   ctx.fillStyle = "#000000";
  //   ctx.beginPath();
  //   ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  //   ctx.fill();
  // };

  const player = {
    w: 50,
    h: 70,
    x: 20,
    y: 200,
    speed: 10,
    dx: 0,
    dy: 0,
  };
  function draw(ctx) {
    ctx.beginPath();
    ctx.rect(50, 50, 50, 50);
    ctx.fillStyle = "hotpink";
    ctx.fill();
  }

  // const draw = (ctx) => {
  //   ctx.beginPath();
  //   ctx.rect(50, 50, 50, 50);
  //   ctx.fillStyle = "hotpink";
  //   ctx.fill();
  //   ctx.beginPath();
  //   ctx.rect(150, 50, 50, 50);
  //   ctx.fillStyle = "deeppink";
  //   ctx.fill();
  //   ctx.beginPath();
  //   ctx.rect(250, 50, 50, 50);
  //   ctx.fillStyle = "pink";
  //   ctx.fill();
  // };

  useEffect(() => {
    console.log("CatsOnCanvas_draw", draw);
  }, []);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="game_section">
          <CatsOnCanvasIntro />
          <Canvas draw={draw} />
        </section>
      </div>
      <div className="col-12 col-md-5">
        <CatsOnCanvasTestInfo />
        <CatsOnCanvasVideos />
      </div>
    </div>
  );
};

export default CatsOnCanvas;
