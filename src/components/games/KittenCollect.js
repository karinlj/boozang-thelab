import { useState, useEffect } from "react";
import "./games.scss";
import { KittenCollectIntro } from "../text/Intros";
import { KittenCollectTestInfo } from "../text/TestInfos";
import { KittenCollectVideos } from "../text/videos/VideoSections";
import CatIcon from "../../img/kitten_icon.png";
//import HedgehogIcon from "../../img/hedgehog_icon.png";

const KittenCollect = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [myTime, setMyTime] = useState(0);
  const [points, setPoints] = useState(0);
  const [message, setMessage] = useState("Start collecting kittens!");
  const [myInterval, setMyInterval] = useState(0);
  const [kittens, setKittens] = useState(null);
  //const [hedgehogs, setHedgehogs] = useState(null);

  //const finishTime = 300;
  const finishTime = 100;

  const startGame = () => {
    setIsRunning(true);

    //start the game, call on tick() in intervals of 100ms
    // if (!isRunning) {
    //   let interval = setInterval(() => {
    //     tick();
    //   }, 100);
    //   setIsRunning(true);
    //   setMyInterval(interval);
    //   setMyTime(0);
    //   setPoints(0);
    //   setMessage("");
    // }
  };
  const abortGame = () => {
    setIsRunning(false);
  };

  const tick = () => {
    //define how often I want to check
    //define finish time in ms

    //if < 0.06 drawKitten()
    if (Math.random() < 0.06) {
      // console.log("drawKitten");
      //drawKitten();
    }
    //if < 0.02 drawHedgehog()
    if (Math.random() < 0.02) {
      // console.log("drawHedgehog");
      //drawHedgehog();
    }
    //increase time with 1
    setMyTime((myTime) => myTime + 1);

    //clearInterval() if time===finishTime
    // if (myTime > finishTime) {
    //   console.log("hello");
    //   clearInterval(myInterval);

    //   setIsRunning(false);
    //   setMessage("Game Over!");
    // }
  };
  const drawKitten = () => {
    //new kitten-object with props: id, img, x & y coordinate
    //fetch randomPos()-values
    //new kitten-array with spread, add kitten-object
    //call on hideKitten(kittenTemp.id) after 1s with setTimeout()

    // let randPos = this.randomPos();
    // let randHeight = randPos[0];
    // let randWidth = randPos[1];

    //set rand pos
    const [randTop, randLeft] = randomPosition();

    //make icon
    const catIcon = <img src={CatIcon} alt="cat" />;

    //make obj
    const kitten = {
      id: Math.random(),
      icon: catIcon,
      top: randTop,
      left: randLeft,
    };
    console.log("kitten", kitten);

    //set state
    setKittens({
      ...kittens,
      kitten,
    });
    //hide kitten
    setTimeout(() => {
      hideKitten(kitten.id);
    }, 1500);
  };

  const hideKitten = (id) => {
    const newKittens = kittens.filter((k) => {
      return k.id !== id;
    });
    setKittens(newKittens);
  };

  const randomPosition = () => {
    const randomTop = Math.floor(Math.random() * 250 + 1);
    const randomLeft = Math.floor(Math.random() * 250 + 1);
    return [randomTop, randomLeft];
  };
  useEffect(() => {
    if (myTime > finishTime) {
      console.log("hello");
      setIsRunning(false);
      setMessage("Game Over!");
    }
  }, [myTime]);

  useEffect(() => {
    if (isRunning) {
      let interval = setInterval(() => {
        tick();
      }, 100);
      setMyInterval(interval);
      setMyTime(0);
      setPoints(0);
      setMessage("");
    } else {
      clearInterval(myInterval);
    }
  }, [isRunning]);

  useEffect(() => {
    console.log("isRunning", isRunning);
    console.log("myTime", myTime);
    //console.log("isRunning", isRunning);
  }, [isRunning, myTime]);
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
                onClick={startGame}
              />
            )}
            {isRunning && (
              <input
                type="button"
                value="Abort Game"
                className="formBtn delete"
                onClick={abortGame}
              />
            )}
            <div className="counter">
              <h6>
                Time: <strong>{Math.floor(myTime / 10)}</strong>{" "}
              </h6>
            </div>
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
