import { useState, useEffect } from "react";
import "./games.scss";
import { KittenCollectIntro } from "../text/Intros";
import { KittenCollectTestInfo } from "../text/TestInfos";
import { KittenCollectVideos } from "../text/videos/VideoSections";
import CatIcon from "../../img/kitten_icon.png";
import HedgehogIcon from "../../img/hedgehog_icon.png";

const KittenCollect = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState("Start collecting kittens!");
  const [time, setTime] = useState(0);
  const [interval, setInterval] = useState(0);
  const [points, setPoints] = useState(0);
  useEffect(() => {
    console.log("isRunning", isRunning);
  }, [isRunning]);

  const tick = () => {
    //define finish time in ms

    const finishTime = 300;
    //if < 0.06 drawKitten()
    if (Math.random() < 0.06) {
      console.log("drawKitten");
      //drawKitten();
    }
    //if < 0.02 drawHedgehog()
    if (Math.random() < 0.02) {
      console.log("drawHedgehog");
      //drawHedgehog();
    }
    //increase time with 1
    setTime(time + 1);

    //clearInterval() if time===finishTime
    if (time > finishTime) {
      clearInterval(interval);

      setIsRunning(false);
      setMessage("Game Over!");
    }
  };

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-5">
        <section className="game_section">
          <KittenCollectIntro />
          <div className="points_section">
            <div className="counter">
              <h6>
                Time: <strong>{time}</strong>{" "}
                {/* <span>{Math.floor(time / 10)}</span> */}
              </h6>
            </div>
            <input
              type="button"
              value="Start Game"
              className="formBtn add"
              onClick={() => {
                setIsRunning(!isRunning);
              }}
            />

            <div className="points">
              <h6>
                Points: <strong>{points}</strong>
              </h6>
            </div>
          </div>

          <div className="square">
            {/* <Kitten kittens={kittens} onKittenClick={this.kittenClick} /> */}

            {/* <Hedgehogs
              hedgehogs={hedgehogs}
              onHedgehogsClick={this.hedgehogClick}
            /> */}
            <div className="message">
              <h5>{message}</h5>
            </div>
          </div>
        </section>
      </div>
      <div className="col-12 col-md-5">
        <KittenCollectTestInfo />
        <KittenCollectVideos />
      </div>
    </div>
  );
};

export default KittenCollect;
