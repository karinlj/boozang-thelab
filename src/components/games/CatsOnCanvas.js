import { useState, useEffect, useRef } from "react";
import "./games.scss";
import { CatsOnCanvasVideos } from "../text/videos/VideoSections";
import { CatsOnCanvasIntro } from "../text/Intros";
import { CatsOnCanvasTestInfo } from "../text/TestInfos";
import catOne from "../../img/cat_one.svg";
import catTwo from "../../img/cat_two.svg";
import catThree from "../../img/cat_three.svg";
import housePink from "../../img/house_pink.svg";
import houseGreen from "../../img/house_green.svg";
import houseBlue from "../../img/house_blue.svg";

const CatsOnCanvas = () => {
  const canvasRef = useRef(null);
  const houseOneImgRef = useRef(null);
  const houseTwoImgRef = useRef(null);
  const houseThreeImgRef = useRef(null);
  const catOneImgRef = useRef(null);
  const catTwoImgRef = useRef(null);
  const catThreeImgRef = useRef(null);

  // const w = 500;
  // const h = 500;
  // const centerX = w / 2;
  // const centerY = h / 2;

  const drawHouses = (ctx, houseOneObj, houseTwoObj, houseThreeObj) => {
    houseOneObj.onload = function () {
      ctx.drawImage(houseOneObj, 50, 50, 100, 100);
    };
    // houseTwoObj.onload = function () {
    //   ctx.drawImage(houseTwoObj, 100, 400, 100, 100);
    // };
    // houseThreeObj.onload = function () {
    //   ctx.drawImage(houseThreeObj, 350, 150, 100, 100);
    // };
  };

  const cat = {
    w: 50,
    h: 60,
    x: 300,
    y: 300,
    speed: 10,
    dx: 0,
    dy: 0,
  };

  const drawPlayer = (ctx, catOneObj, catTwoObj, catThreeObj) => {
    catOneObj.onload = function () {
      ctx.drawImage(catOneObj, cat.x, cat.y, cat.w, cat.h);
    };
    // catTwoObj.onload = function () {
    //   ctx.drawImage(
    //     catTwoObj,
    //     Math.round(Math.random() * 400),
    //     Math.round(Math.random() * 400),
    //     50,
    //     60
    //   );
    // };
    // catThreeObj.onload = function () {
    //   ctx.drawImage(
    //     catThreeObj,
    //     Math.round(Math.random() * 400),
    //     Math.round(Math.random() * 400),
    //     50,
    //     50
    //   );
    //};
  };

  // function clear() {
  //   ctx.clearRect(0, 0, canvasObj.width, canvasObj.height);
  // }

  useEffect(() => {
    //finding the <canvas> element and saving it to a variable.
    const canvasObj = canvasRef.current;
    //creating a drawing object for our canvas and saving it to a variable
    const ctx = canvasObj.getContext("2d");

    const houseOneObj = houseOneImgRef.current;
    const houseTwoObj = houseTwoImgRef.current;
    const houseThreeObj = houseThreeImgRef.current;

    const catOneObj = catOneImgRef.current;
    const catTwoObj = catTwoImgRef.current;
    const catThreeObj = catThreeImgRef.current;

    canvasObj.width = 500;
    canvasObj.height = 500;

    drawPlayer(ctx, catOneObj, catTwoObj, catThreeObj);
    drawHouses(ctx, houseOneObj, houseTwoObj, houseThreeObj);

    //console.log("CatsOnCanvas_draw", draw);
  }, [drawPlayer]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="game_section">
          <CatsOnCanvasIntro />
          <canvas ref={canvasRef} className="canvas" />
          <img src={housePink} ref={houseOneImgRef} className="icon" />
          <img src={houseGreen} ref={houseTwoImgRef} className="icon" />
          <img src={houseBlue} ref={houseThreeImgRef} className="icon" />

          <img src={catOne} ref={catOneImgRef} className="icon" />
          <img src={catTwo} ref={catTwoImgRef} className="icon" />
          <img src={catThree} ref={catThreeImgRef} className="icon" />
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

export default CatsOnCanvas;
