import { useState, useEffect } from "react";
import "./games.scss";
import { KittenCollectIntro } from "../text/Intros";
import { KittenCollectTestInfo } from "../text/TestInfos";
import { KittenCollectVideos } from "../text/videos/VideoSections";

const KittenCollect = () => {
  const [message, setMessage] = useState("Start collecting kittens!");
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-5">
        <section className="game_section">
          <KittenCollectIntro />
          <div className="points_section">
            <div className="counter">
              <h6>
                Time: <strong>20s</strong>{" "}
                {/* <span>{Math.floor(time / 10)}</span> */}
              </h6>
            </div>
            <input type="button" value="Start Game" className="formBtn add" />

            <div className="points">
              <h6>
                Points: <strong>11</strong>
                {/* <span>{points}</span> */}
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
