import { useState, useEffect, useRef } from "react";
import "./games.scss";
import { CatsOnCanvasVideos } from "../text/videos/VideoSections";
import { CatsOnCanvasIntro } from "../text/Intros";
import { CatsOnCanvasTestInfo } from "../text/TestInfos";
//import ResultMessages from "../compMessages/ResultMessages";
import cat from "../../img/cat_icon.png";
//import { useCanvas } from "../../customHooks/useCanvas";

const CatsOnCanvas = () => {
  //   const canvasRef = useRef(null);
  //   const canvasObj = canvasRef.current;
  //   const ctx = canvasObj.getContext("2d");

  // const canvas = document.getElementById("canvas");
  //   const canvas = (
  //     <canvas className="canvas" width="400" height="400" id="canvas" />
  //   );

  //   const ctx = canvas.getContext("2d");

  const catImage = <img src={cat} alt="Cat" className="image" />;

  //   const player = {
  //     w: 50,
  //     h: 70,
  //     x: 20,
  //     y: 200,
  //     speed: 10,
  //     dx: 0,
  //     dy: 0,
  //   };

  //   const drawPlayer = () => {
  //     ctx.drawImage(catImage, player.x, player.y, player.w, player.h);
  //   };

  //   const update = () => {
  //     drawPlayer();
  //   };

  //   update();

  useEffect(() => {
    // const canvasObj = canvasRef.current;
    // //Referencing Context 2D:
    // const ctx = canvasObj.getContext("2d");
    // // clear the canvas area before rendering the coordinates held in state
    // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    // // draw all coordinates held in state
    // coordinates.forEach((coordinate) => {
    //   draw(ctx, coordinate);
    // });
  }, []);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="game_section">
          <CatsOnCanvasIntro />

          {/* <canvas className="canvas" width="400" height="400" id="canvas" /> */}
          {/* {canvas} */}
          {catImage}
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
