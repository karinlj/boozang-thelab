import { useState, useEffect, useRef } from "react";
import "./games.scss";
import { CatsOnCanvasVideos } from "../text/videos/VideoSections";
import { CatsOnCanvasIntro } from "../text/Intros";
import { CatsOnCanvasTestInfo } from "../text/TestInfos";
//import ResultMessages from "../compMessages/ResultMessages";
import cat from "../../img/cat_icon.png";

const CatsOnCanvas = () => {
  const canvasRef = useRef(null);
  //What to Draw:
  const heartSVG =
    "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z";
  const SVG_PATH = new Path2D(heartSVG);

  //const catImage = <img src={cat} alt="Cat" />

  const drawRectangle = (ctx) => {
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 150, 100);
    ctx.fillStyle = "blue";
    ctx.fillRect(200, 20, 150, 100);
  };

  const player = {
    w: 50,
    h: 70,
    x: 20,
    y: 200,
    speed: 10,
    dx: 0,
    dy: 0,
  };

  function drawPlayer(ctx) {
    ctx.fillStyle = "red";
    ctx.fill(SVG_PATH);
    //ctx.drawImage(catImage, player.x, player.y, player.w, player.h);
  }

  // Similar to componentDidMount and componentDidUpdate:
  //Giving it an empty array acts like componentDidMount as in, it only runs once.
  //Giving it no second argument acts as both componentDidMount and componentDidUpdate, as in it runs first on mount and then on every re-render.
  useEffect(() => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext("2d");
    drawPlayer(ctx);
  }, []);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="game_section">
          <CatsOnCanvasIntro />
          <canvas
            className="canvas"
            width="400"
            height="400"
            id="canvas"
            ref={canvasRef}
          />
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
