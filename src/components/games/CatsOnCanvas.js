import { useState, useEffect, useRef } from "react";
import "./games.scss";
import { CatsOnCanvasVideos } from "../text/videos/VideoSections";
import { CatsOnCanvasIntro } from "../text/Intros";
import { CatsOnCanvasTestInfo } from "../text/TestInfos";
import cat from "../../img/cat_icon.png";

const CatsOnCanvas = () => {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  //   function draw(ctx) {
  //     ctx.beginPath();
  //     ctx.rect(50, 50, 50, 50);
  //     ctx.fillStyle = "hotpink";
  //     ctx.fill();
  //   }

  const player = {
    w: 40,
    h: 40,
    x: 20,
    y: 200,
    speed: 10,
    dx: 0,
    dy: 0,
  };

  function drawPlayer(ctx, imgObj) {
    ctx.drawImage(imgObj, player.x, player.y, player.w, player.h);
  }

  useEffect(() => {
    //finding the <canvas> element and saving it to a variable.
    const canvasObj = canvasRef.current;
    //creating a drawing object for our canvas and saving it to a variable
    const ctx = canvasObj.getContext("2d");
    const imgObj = imgRef.current;

    drawPlayer(ctx, imgObj);

    // draw(ctx);

    //console.log("CatsOnCanvas_draw", draw);
  }, [drawPlayer]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="game_section">
          <CatsOnCanvasIntro />
          <canvas ref={canvasRef} width="400" height="400" className="canvas" />
          <img ref={imgRef} src={cat} className="hidden" />
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
