import { useState, useEffect, useRef } from "react";
import "./games.scss";
import { CatsOnCanvasVideos } from "../text/videos/VideoSections";
import { CatsOnCanvasIntro } from "../text/Intros";
import { CatsOnCanvasTestInfo } from "../text/TestInfos";
import box from "../../img/box.svg";
import ResultMessages from "../compMessages/ResultMessages";

const CatsOnCanvas = () => {
  const canvasRef = useRef(null);
  const boxRef = useRef(null);
  const [dragOk, setDragOk] = useState(false);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [offsetX, setOffsetX] = useState(null);
  const [offsetY, setOffsetY] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const [ball, setBall] = useState({
    x: 50,
    y: 50,
    radius: 20,
    isDragging: false,
  });
  const WIDTH = 450;
  const HEIGHT = 450;

  //   const drawBox = (ctx, boxObject) => {
  //     ctx.drawImage(boxObject, 280, 320, 130, 170);
  //     //console.log("drawBox");
  //   };
  const drawBox = (ctx) => {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(290, 340);
    ctx.lineTo(310, 330);
    ctx.lineTo(310, 400);
    ctx.lineTo(400, 400);
    ctx.lineTo(400, 330);
    ctx.lineTo(420, 340);
    ctx.strokeStyle = "#f24d7f";
    ctx.stroke();
  };

  const drawBall = (ctx) => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#f24d7f";
    ctx.fill();
  };

  const ballInbox = () => {
    // console.log("successMessage", successMessage);
    let boxXMIn = 310;
    let boxXMax = 420;
    let boxYMIn = 330;
    let boxYMax = 400;

    if (
      ball.x > boxXMIn &&
      ball.x < boxXMax &&
      ball.y > boxYMIn &&
      ball.y < boxYMax
    ) {
      setSuccessMessage("Success!");
      // console.log("isBallInbox", isBallInbox);
    } else {
      setSuccessMessage("Put ball in box...");
    }
  };
  // handle mousedown events
  const myDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("myDown_clientX: ", e.clientX);
    // console.log("myDown_clientY: ", e.clientY);

    // get the current mouse position
    let mx = parseInt(e.clientX - offsetX);
    let my = parseInt(e.clientY - offsetY);

    // test each ball to see if mouse is inside
    setDragOk(false);

    if (
      mx > ball.x - ball.radius &&
      mx < ball.x + ball.radius &&
      my > ball.y - ball.radius &&
      my < ball.y + ball.radius
    ) {
      // if yes, set that rects isDragging=true
      setDragOk(true);
      setBall({
        ...ball,
        isDragging: true,
      });
    }
    // save the current mouse position
    setStartX(mx);
    setStartY(my);
  };

  // handle mouseup events
  const myUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("myUp: ");

    // clear all the dragging flags
    setDragOk(false);
    setBall({
      ...ball,
      isDragging: false,
    });
  };

  // handle mouse moves
  const myMove = (e) => {
    // console.log("myMove_clientX: ", e.clientX);
    // console.log("myMove_clientY: ", e.clientY);

    // if we're dragging anything...
    if (dragOk) {
      // tell the browser we're handling this mouse event
      e.preventDefault();
      e.stopPropagation();

      // get the current mouse position
      let mx = parseInt(e.clientX - offsetX);
      let my = parseInt(e.clientY - offsetY);

      // calculate the distance the mouse has moved
      // since the last mousemove
      //increase
      let dx = mx - startX;
      let dy = my - startY;

      // move each ball that isDragging
      // by the distance the mouse has moved
      // since the last mousemove
      if (ball.isDragging) {
        setBall({
          ...ball,
          x: ball.x + dx,
          y: ball.y + dy,
        });
      }
      // redraw the scene with the new rect positions
      // drawScene(ctx);

      // reset the starting mouse position for the next mousemove
      setStartX(mx);
      setStartY(my);
    }
  };
  // redraw the scene
  //   const drawScene = (ctx) => {
  //     clear(ctx);
  //     drawBall(ctx);
  //   };

  //   const clear = (ctx) => {
  //     ctx.clearRect(0, 0, WIDTH, HEIGHT);
  //     console.log("clear");
  //   };
  const reset = () => {
    console.log("reset");

    setBall({
      ...ball,
      x: 50,
      y: 50,
    });
  };

  useEffect(() => {
    // console.log("dragOk: ", dragOk);
  }, [dragOk]);

  useEffect(() => {
    console.log("ball: ", ball);
    //finding the <canvas> element
    const canvasObj = canvasRef.current;
    //creating a drawing object for our canvas
    const ctx = canvasObj.getContext("2d");
    const BB = canvasObj.getBoundingClientRect();
    const boxObject = boxRef.current;
    canvasObj.width = WIDTH;
    canvasObj.height = HEIGHT;
    setOffsetX(BB.left);
    setOffsetY(BB.top);
    drawBox(ctx);
    drawBall(ctx);
    ballInbox();
    //drawScene(ctx);

    // let requestId;
    // const update = () => {
    //   // ball.x += 0.5;
    //   console.log("updating", ball.x);
    //   clear(ctx, canvasObj);
    //   drawBall(ctx);
    //   console.log("ball", ball.isDragging);
    //   drawBox(ctx, boxObject);
    //   ballInbox();
    //   //requestId = requestAnimationFrame(update);
    // };

    // boxObject.onload = function () {
    //   update();
    // };

    // return () => {
    //   cancelAnimationFrame(requestId);
    // };
  }, [ball]);

  //The standard way of animating an HTML5 canvas is using
  //the requestAnimationFrame function to repeatedly call a function that
  // renders our scene. Before we do that, we need to refactor our circle drawing code into a render function
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-8 col-lg-12 col-xl-5">
        <section className="mobile_game_section">
          <h5>This game is only available on larger display size...</h5>
        </section>
        <section className="game_section">
          <CatsOnCanvasIntro />
          <div className="top_section">
            <input
              type="button"
              value="Reset"
              className="formBtn purple"
              onClick={reset}
            />
            <ResultMessages
              openWrapper={successMessage}
              successMessage={successMessage}
              messageString="Success!"
            />
          </div>
          <canvas
            ref={canvasRef}
            className="canvas"
            onMouseDown={(e) => myDown(e)}
            onMouseUp={(e) => myUp(e)}
            onMouseMove={(e) => myMove(e)}
          />
          <img src={box} ref={boxRef} alt="box" className="box" />
        </section>
      </div>
      <div className="col-12 col-md-4 col-lg-12 col-xl-5">
        <CatsOnCanvasTestInfo />
        <CatsOnCanvasVideos />
      </div>
    </div>
  );
};

export default CatsOnCanvas;
