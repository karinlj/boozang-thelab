import { useState, useEffect } from "react";
import "./games.scss";
import { KittenCollectIntro } from "../text/Intros";
import { KittenCollectTestInfo } from "../text/TestInfos";
import { KittenCollectVideos } from "../text/videos/VideoSections";
//import CatIcon from "../../img/kitten_icon.png";
//import HedgehogIcon from "../../img/hedgehog_icon.png";

const KittenCollect = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  //   const [points, setPoints] = useState(0);
  const [message, setMessage] = useState("Start collecting kittens!");
  //  const [myInterval, setMyInterval] = useState(0);
  // const [kittens, setKittens] = useState([]);
  //const [hedgehogs, setHedgehogs] = useState(null);

  const finishTime = 50; //300;

  const startGame = () => {
    setCount(0);
    setIsRunning(true);
    setMessage("");
  };

  const abortGame = () => {
    setIsRunning(false);
    setMessage("Game Aborted!");
  };

  const tick = () => {
    // setCount((count) => count + 1);
    setCount(count + 1);
    // setCount((prevCount) => prevCount + 1);

    if (count > finishTime) {
      console.log("count > finishTime");
      setIsRunning(false);
      setMessage("Game Over!");
    }
  };

  //   useEffect(() => {
  //       effect
  //       return () => {
  //           cleanup
  //       }
  //   }, [input])

  useEffect(() => {
    console.log("count: ", count);
  }, [count]);

  useEffect(() => {
    if (isRunning) {
      const myInterval = setInterval(() => {
        tick();
      }, 100);
      //cleanup = componentWillUnmount or when isRunning is changing
      return () => clearInterval(myInterval);
    }
    console.log("isRunning: ", isRunning);
  }, [isRunning, count]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-5">
        <section className="game_section">
          <KittenCollectIntro />
          <div className="points_section">
            {!isRunning && (
              <input
                type="button"
                value="Start Game"
                className="formBtn add"
                // onClick={() => {
                //   setIsRunning(true);
                // }}
                onClick={startGame}
              />
            )}
            {isRunning && (
              <input
                type="button"
                value="Abort Game"
                className="formBtn delete"
                // onClick={() => {
                //   setIsRunning(false);
                // }}
                onClick={abortGame}
              />
            )}
            <div className="counter">
              <h6>
                Time: <strong>{Math.floor(count / 10)}</strong>{" "}
              </h6>
            </div>
            <div className="points">
              {/* <h6>
                Points: <strong>{points}</strong>
              </h6> */}
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
