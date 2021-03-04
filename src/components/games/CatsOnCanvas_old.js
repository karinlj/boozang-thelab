import { useState, useEffect, useRef } from "react";
import "./games.scss";
import { CatsOnCanvasVideos } from "../text/videos/VideoSections";
import { CatsOnCanvasIntro } from "../text/Intros";
import { CatsOnCanvasTestInfo } from "../text/TestInfos";
//import ResultMessages from "../compMessages/ResultMessages";
//import cat from "../../img/cat_icon.png";
import { useCanvas } from "../../customHooks/useCanvas";

const CatsOnCanvas = () => {
  //Using the useCanvas() Hook:
  const [
    coordinates,
    setCoordinates,
    canvasRef,
    canvasWidth,
    canvasHeight,
  ] = useCanvas();

  // handleCanvasClick() will trigger with an onClick() event handler,
  //and handleClearCanvas() will be tied to a button that will wipe the canvas clean.
  const handleCanvasClick = (event) => {
    console.log("canvas_click", event);
    // on each click get current mouse location
    const currentCoord = { x: event.clientX, y: event.clientY };
    // add the newest mouse location to an array in state
    setCoordinates([...coordinates, currentCoord]);
  };

  const handleClearCanvas = () => {
    console.log("click");
    setCoordinates([]);
  };

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="game_section">
          <CatsOnCanvasIntro />

          <canvas
            className="App-canvas"
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
            onClick={handleCanvasClick}
          />

          <div className="canvas_button">
            <button onClick={handleClearCanvas}> CLEAR </button>
          </div>
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
