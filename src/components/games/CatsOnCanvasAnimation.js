import { useState, useEffect, useRef } from "react";
import "./games.scss";
import { CatsOnCanvasVideos } from "../text/videos/VideoSections";
import { CatsOnCanvasIntro } from "../text/Intros";
import { CatsOnCanvasTestInfo } from "../text/TestInfos";
import catOne from "../../img/cat_one.svg";
import housePink from "../../img/house_pink.svg";

const CatsOnCanvasAnimation = () => {
  const canvasRef = useRef(null);
  const houseOneImgRef = useRef(null);
  const catOneImgRef = useRef(null);

  const cat = {
    w: 50,
    h: 60,
    x: 50,
    y: 50,
    dx: 0.5, //increment
    dy: 0.5,
  };

  const drawHouses = (ctx, houseOneObj) => {
    ctx.drawImage(houseOneObj, 300, 300, 100, 100);

    // houseOneObj.onload = function () {

    // };
  };

  const drawCircle = (ctx) => {
    ctx.beginPath();
    ctx.arc(cat.x, cat.y, cat.w, 0, Math.PI * 2);
    ctx.fillStyle = "pink";
    ctx.fill();
  };

  const drawCat = (ctx, catOneObj) => {
    catOneObj.onload = function () {
      ctx.drawImage(catOneObj, cat.x, cat.y, cat.w, cat.h);
      console.log("drawCat: ", cat.x);
    };
  };

  //change position, append dx
  const newPos = () => {
    cat.x += cat.dx;
    console.log("cat.x: ", cat.x);
  };

  const clear = (ctx, canvasObj) => {
    ctx.clearRect(0, 0, canvasObj.width, canvasObj.height);
  };

  useEffect(() => {
    //finding the <canvas> element and saving it to a variable.
    const canvasObj = canvasRef.current;
    //creating a drawing object for our canvas and saving it to a variable
    const ctx = canvasObj.getContext("2d");
    canvasObj.width = 500;
    canvasObj.height = 500;
    const houseOneObj = houseOneImgRef.current;
    const catOneObj = catOneImgRef.current;

    let requestId;
    const update = () => {
      cat.x += 0.5;
      console.log("x : ", cat.x);

      clear(ctx, canvasObj);
      // drawCircle(ctx);
      drawCat(ctx, catOneObj);
      drawHouses(ctx, houseOneObj);
      // newPos();
      requestId = requestAnimationFrame(update);
    };
    houseOneObj.onload = function () {
      update();
    };
    return () => {
      cancelAnimationFrame(requestId);
    };
  });
  //}, [drawCat]);
  //The standard way of animating an HTML5 canvas is using
  //the requestAnimationFrame function to repeatedly call a function that
  // renders our scene. Before we do that, we need to refactor our circle drawing code into a render function
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="game_section">
          <CatsOnCanvasIntro />
          <canvas ref={canvasRef} className="canvas" />
          <img
            src={housePink}
            ref={houseOneImgRef}
            className="icon"
            alt="house"
          />
          <img src={catOne} ref={catOneImgRef} className="icon" alt="cat" />
        </section>
      </div>
      <div className="col-12 col-md-5">
        <CatsOnCanvasTestInfo />
        <CatsOnCanvasVideos />
      </div>
    </div>
  );
  // ctx.beginPath();
  // //ctx.lineWidth = 2;
  // // ctx.strokeStyle = "deeppink";
  // ctx.rect(centerX - 165, 120, 90, 60);
  // ctx.rect(centerX - 45, 70, 90, 60);
  // ctx.rect(centerX + 75, 120, 90, 60);
  // ctx.fillStyle = "	#3399ff";
  // ctx.fill();
  // //ctx.strokeRect(centerX + 75, 120, 90, 60);

  // ctx.beginPath();
  // ctx.moveTo(centerX - 165, 120);
  // ctx.lineTo(80, 100);
  // ctx.lineTo(125, 120);
  // //ctx.stroke();
  // ctx.fillStyle = "deeppink";
  // ctx.fill();

  // ctx.beginPath();
  // ctx.moveTo(centerX - 45, 70);
  // ctx.lineTo(200, 50);
  // ctx.lineTo(245, 70);
  // ctx.fillStyle = "purple";
  // ctx.fill();

  // ctx.beginPath();
  // ctx.moveTo(centerX + 65, 130);
  // ctx.lineTo(320, 100);
  // ctx.lineTo(365, 120);
  // ctx.fillStyle = "hotpink";
  // ctx.fill();

  // ctx.closePath();
  // var img3 = new Image();
  // img3.onload = function () {
  //   ctx.drawImage(
  //     img3,
  //     Math.round(Math.random() * 400),
  //     Math.round(Math.random() * 400),
  //     40,
  //     40
  //   );
  // };
  // img3.src =
  //   "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg";
};

export default CatsOnCanvasAnimation;
