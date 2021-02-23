import { useState, useEffect } from "react";
import "./games.scss";
import { KittenCollectIntro } from "../text/Intros";
import { KittenCollectTestInfo } from "../text/TestInfos";
import { KittenCollectVideos } from "../text/videos/VideoSections";

const KittenCollect = () => {
  const [isRunning, setIsRunning] = useState(false);
  // eslint-disable-next-line
  const [message, setMessage] = useState("Start collecting kittens!");
  // eslint-disable-next-line
  const [time, setTime] = useState(0);
  // eslint-disable-next-line
  const [points, setPoints] = useState(0);
  useEffect(() => {
    console.log("isRunning", isRunning);
  }, [isRunning]);
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
