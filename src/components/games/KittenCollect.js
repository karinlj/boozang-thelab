import { useState, useEffect } from "react";
import "./games.scss";
import { KittenCollectIntro } from "../text/Intros";
import { KittenCollectTestInfo } from "../text/TestInfos";
import { KittenCollectVideos } from "../text/videos/VideoSections";
import CatIcon from "../../img/kitten_icon.png";
import HedgehogIcon from "../../img/hedgehog_icon.png";
import Kittens from "./Kittens";
import Hedgehogs from "./Hedgehogs";

const KittenCollect = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [points, setPoints] = useState(0);
  const [message, setMessage] = useState("Start collecting kittens!");
  //  const [myInterval, setMyInterval] = useState(0);
  const [kittens, setKittens] = useState([]);
  const [hedgehogs, setHedgehogs] = useState([]);

  const finishTime = 100; //300;

  const startGame = () => {
    setCount(0);
    setIsRunning(true);
    setKittens([]);
    setPoints(0);
    setMessage("");
  };

  const abortGame = () => {
    setIsRunning(false);
    //  setKittens([]);
    setMessage("Game Aborted!");
  };

  const tick = () => {
    // setCount((prevCount) => prevCount + 1);
    // setCount((count) => count + 1);
    setCount(count + 1);

    if (count > finishTime) {
      setIsRunning(false);
      setMessage("Game Over!");
    }
    if (Math.random() < 0.06) {
      drawKitten();
    }
    if (Math.random() < 0.02) {
      drawHedgehog();
    }
  };
  //kitten
  const drawKitten = () => {
    const [randTop, randLeft] = randomPosition();
    const catIcon = <img src={CatIcon} alt="Cat" />;

    //create new
    const newKitten = {
      id: Math.random(),
      icon: catIcon,
      top: randTop,
      left: randLeft,
    };
    //console.log("drawKitten_newKitten", newKitten);
    //add to array
    setKittens([...kittens, newKitten]);
    // setKittens((kittens) => {
    //   return [...kittens, newKitten];
    // });

    //hide again
    setTimeout(() => {
      hideKitten(newKitten.id);
      //console.log("hideKitten_newKitten", newKitten);
    }, 1500);
  };
  const hideKitten = (id) => {
    const newKittens = kittens.filter((kitten) => {
      return kitten.id !== id;
    });
    setKittens(newKittens);
  };
  const kittenClick = (id) => {
    hideKitten(id);
    //console.log("kittenClick_newKitten", id);
    setPoints(points + 1);
  };

  //hedgehog
  const drawHedgehog = () => {
    const [randTop, randLeft] = randomPosition();
    const hedgehogIcon = <img src={HedgehogIcon} alt="Hedgehog" />;
    //create new
    const newHedgehog = {
      id: Math.random(),
      icon: hedgehogIcon,
      top: randTop,
      left: randLeft,
    };
    console.log("drawHedgehog_newHedgehog", newHedgehog);

    //add to array
    setHedgehogs([...hedgehogs, newHedgehog]);

    //hide again
    setTimeout(() => {
      hideHedgehog(newHedgehog.id);
    }, 1800);
  };
  const hideHedgehog = (id) => {
    const newHedgehogs = hedgehogs.filter((hedgehog) => {
      return hedgehog.id !== id;
    });
    setHedgehogs(newHedgehogs);
  };
  const hedgehogClick = (id) => {
    console.log("hedgehogClick", id);
    setIsRunning(false);
    setMessage("Game Over!");
  };

  const randomPosition = () => {
    const randomTop = Math.floor(Math.random() * 250 + 1);
    const randomLeft = Math.floor(Math.random() * 300 + 1);
    return [randomTop, randomLeft];
  };
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

  useEffect(() => {
    //console.log("kittens: ", kittens);
  }, [kittens]);

  useEffect(() => {
    console.log("hedgehogs: ", hedgehogs);
  }, [hedgehogs]);

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
              <h6>
                Points: <strong>{points}</strong>
              </h6>
            </div>
          </div>

          <div className="square">
            <Kittens kittens={kittens} handleClick={kittenClick} />
            <Hedgehogs hedgehogs={hedgehogs} handleClick={hedgehogClick} />
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
