import { useState, useEffect, useRef } from "react";
import "./games.scss";
import { CanvasGameVideos } from "../text/videos/VideoSections";
import { CanvasGameIntro } from "../text/Intros";
import { CanvasGameTestInfo } from "../text/TestInfos";
import ResultMessages from "../compMessages/ResultMessages";

const CanvasGame = () => {
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

  const drawBox = (ctx) => {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(250, 340);
    ctx.lineTo(270, 330);
    ctx.lineTo(270, 390);
    ctx.lineTo(360, 390);
    ctx.lineTo(360, 330);
    ctx.lineTo(380, 340);
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
    let boxXMIn = 270;
    let boxXMax = 360;
    let boxYMIn = 330;
    let boxYMax = 390;

    if (
      ball.x > boxXMIn &&
      ball.x < boxXMax &&
      ball.y > boxYMIn &&
      ball.y < boxYMax
    ) {
      setSuccessMessage("Success!");
    } else {
      setSuccessMessage("Drag ball into box...");
    }
  };
  // handle mousedown events
  const myDown = (e) => {
    e.preventDefault();
    e.stopPropagation();

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

    // clear all the dragging flags
    setDragOk(false);
    setBall({
      ...ball,
      isDragging: false,
    });
  };

  // handle mouse moves
  const myMove = (e) => {
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
      // reset the starting mouse position for the next mousemove
      setStartX(mx);
      setStartY(my);
    }
  };
  const reset = () => {
    setBall({
      ...ball,
      x: 50,
      y: 50,
    });
  };

  useEffect(() => {
    // console.log("ball: ", ball);
    //finding the <canvas> element
    const canvasObj = canvasRef.current;
    //creating a drawing object for our canvas
    const ctx = canvasObj.getContext("2d");
    const BB = canvasObj.getBoundingClientRect();
    canvasObj.width = WIDTH;
    canvasObj.height = HEIGHT;
    setOffsetX(BB.left);
    setOffsetY(BB.top);
    drawBall(ctx);
    drawBox(ctx);
    ballInbox();
  }, [ball]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-8 col-lg-12 col-xl-5">
        <section className="mobile_game_section">
          <h5>This game is only available on larger display size...</h5>
        </section>
        <section className="game_section">
          <CanvasGameIntro />
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
        </section>
      </div>
      <div className="col-12 col-md-4 col-lg-12 col-xl-5">
        <CanvasGameTestInfo />
        <CanvasGameVideos />
      </div>
    </div>
  );
};

export default CanvasGame;
