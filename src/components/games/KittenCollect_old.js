import { useState, useEffect } from "react";
import "./games.scss";
import { KittenCollectIntro } from "../text/Intros";
import { KittenCollectTestInfo } from "../text/TestInfos";
import { KittenCollectVideos } from "../text/videos/VideoSections";
import CatIcon from "../../img/kitten_icon.png";
//import HedgehogIcon from "../../img/hedgehog_icon.png";

const KittenCollect = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [points, setPoints] = useState(0);
  const [message, setMessage] = useState("Start collecting kittens!");
  //  const [myInterval, setMyInterval] = useState(0);
  const [kittens, setKittens] = useState([]);
  //const [hedgehogs, setHedgehogs] = useState(null);

  const finishTime = 100; //300;

  //called in useEffect
  const handleStart = () => {
    console.log("handleStart");
    if (!isRunning) {
      setIsRunning(true);

      //   let interval = setInterval(() => {
      //     tick();
      //   }, 100);

      // setMyInterval(interval);
      setCount(0);
      setPoints(0);
      setMessage("");
    } else {
      //clearInterval(myInterval);
    }
  };
  const abortGame = () => {
    setIsRunning(false);
    setMessage("Game Aborted!");
  };

  const tick = () => {
    //define how often I want to check
    //define finish time in ms

    //if < 0.06 drawKitten()
    if (Math.random() < 0.06) {
      console.log("drawKitten");
      // drawKitten();
    }
    //if < 0.02 drawHedgehog()
    if (Math.random() < 0.02) {
      //console.log("drawHedgehog");
      //drawHedgehog();
    }
    //increase time with 1
    setCount((count) => count + 1);

    if (count > finishTime) {
      // clearInterval(myInterval);
      setIsRunning(false);
      setMessage("Game Over!");
    }
  };
  const drawKitten = () => {
    //new kitten-object with props: id, img, x & y coordinate
    //fetch randomPos()-values
    //new kitten-array with spread, add kitten-object
    //call on hideKitten(kittenTemp.id) after 1s with setTimeout()

    //set rand pos
    const [randTop, randLeft] = randomPosition();
    //make icon
    const catIcon = <img src={CatIcon} alt="cat" />;

    //make obj
    const newKitten = {
      id: Math.random(),
      icon: catIcon,
      top: randTop,
      left: randLeft,
    };
    console.log("drawKitten_newKitten", newKitten);

    setKittens([...kittens, newKitten]);

    // setKittens((kittens) => {
    //   return [...kittens, newKitten];
    // });

    //hide kitten
    // setTimeout(() => {
    //   hideKitten(kitten.id);
    // }, 1500);
  };

  const hideKitten = (id) => {
    const newKittens = kittens.filter((kitten) => {
      return kitten.id !== id;
    });
    setKittens(newKittens);
  };

  const randomPosition = () => {
    const randomTop = Math.floor(Math.random() * 250 + 1);
    const randomLeft = Math.floor(Math.random() * 250 + 1);
    return [randomTop, randomLeft];
  };

  useEffect(() => {
    console.log("kittens", kittens);
  }, [kittens]);

  useEffect(() => {
    let myInterval = null;
    if (isRunning) {
      myInterval = setInterval(() => {
        setCount((count) => count + 1);
      }, 100);
    } else if (!isRunning) {
      clearInterval(myInterval);
    }
    return () => clearInterval(myInterval);

    console.log("isRunning: ", isRunning);
    console.log("count: ", count);
  }, [isRunning, count]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-5">
        <section className="game_section">
          <KittenCollectIntro />
          <div className="points_section">
            {/* <input
              type="button"
              value="banan"
              className="formBtn add"
              onClick={banan}
            /> */}

            {!isRunning && (
              <input
                type="button"
                value="Start Game"
                className="formBtn add"
                onClick={handleStart}
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
                Time: <strong>{Math.floor(count / 10)}</strong>{" "}
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
