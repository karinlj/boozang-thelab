import { useState, useEffect, useRef } from "react";
import "./games.scss";
import { CatsOnCanvasVideos } from "../text/videos/VideoSections";
import { CatsOnCanvasIntro } from "../text/Intros";
import { CatsOnCanvasTestInfo } from "../text/TestInfos";
import box from "../../img/box.svg";

const CatsOnCanvas = () => {
  const canvasRef = useRef(null);
  const boxRef = useRef(null);
  const [dragOk, setDragOk] = useState(false);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [offsetX, setOffsetX] = useState(null);
  const [offsetY, setOffsetY] = useState(null);

  const [ball, setBall] = useState({
    x: 50,
    y: 50,
    radius: 20,
    isDragging: false,
  });
  const WIDTH = 450;
  const HEIGHT = 450;

  //   const drawBox = (ctx, boxObject) => {
  //     boxObject.onload = function () {
  //       ctx.drawImage(boxObject, 280, 320, 130, 170);
  //     };
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

  // handle mousedown events
  function myDown(e) {
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
  }

  // handle mouseup events
  function myUp(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("myUp: ");

    // clear all the dragging flags
    setDragOk(false);
    setBall({
      ...ball,
      isDragging: false,
    });
  }

  // handle mouse moves
  function myMove(e) {
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

        // setCount((count) => count - 100);
        // ball.x += dx;
        // ball.y += dy;
      }

      // redraw the scene with the new rect positions
      // drawScene(ctx);

      // reset the starting mouse position for the next mousemove
      setStartX(mx);
      setStartY(my);
    }
  }
  // redraw the scene
  function drawScene(ctx) {
    clear(ctx);
    drawBall(ctx);
  }

  const clear = (ctx) => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
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
    clear(ctx);
    setOffsetX(BB.left);
    setOffsetY(BB.top);
    //drawBox(ctx, boxObject);
    drawBox(ctx);
    drawBall(ctx);
    //drawScene(ctx);

    //     let requestId;
    //     const update = () => {
    //       console.log("updating");
    //       clear(ctx, canvasObj);
    //       drawBall(ctx);
    //       //requestId = requestAnimationFrame(update);
    //     };
    //     update();
    //     return () => {
    //       cancelAnimationFrame(requestId);
    //     };
    //   });
  }, [ball]);
  //The standard way of animating an HTML5 canvas is using
  //the requestAnimationFrame function to repeatedly call a function that
  // renders our scene. Before we do that, we need to refactor our circle drawing code into a render function
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="game_section">
          <CatsOnCanvasIntro />
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
      <div className="col-12 col-md-5">
        <CatsOnCanvasTestInfo />
        <CatsOnCanvasVideos />
      </div>
    </div>
  );
};

export default CatsOnCanvas;
