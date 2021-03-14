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
  const [pointsMessage, setPointsMessage] = useState("");
  const [kittens, setKittens] = useState([]);
  const [hedgehogs, setHedgehogs] = useState([]);

  const finishTime = 300;

  const startGame = () => {
    setCount(0);
    setIsRunning(true);
    setKittens([]);
    setHedgehogs([]);
    setPoints(0);
    setMessage("");
    setPointsMessage("");
  };
  const abortGame = () => {
    setIsRunning(false);
    //  setKittens([]);
    setMessage("Game Aborted!");
  };
  const tick = () => {
    if (kittens.length && Math.random() < 0.05) {
      const id = kittens[0].id;
      hideKitten(id);
    }
    if (hedgehogs.length && Math.random() < 0.05) {
      const id = hedgehogs[0].id;
      hideHedgehog(id);
    }

    setCount(count + 1);

    if (count > finishTime) {
      setIsRunning(false);
      setMessage("Game Over!");
      setPointsMessage("You got " + points + " Points!");
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
    const catIcon = <img src={CatIcon} alt="Cat" id="cat" />;

    //create new
    const newKitten = {
      id: Math.random(),
      icon: catIcon,
      top: randTop,
      left: randLeft,
      age: 25,
    };
    //add to array
    setKittens([...kittens, newKitten]);
  };
  const hideKitten = (id) => {
    setKittens(
      kittens.filter((kitten) => {
        return kitten.id !== id;
      })
    );
  };
  const kittenClick = (id) => {
    hideKitten(id);
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
    //add to array
    setHedgehogs([...hedgehogs, newHedgehog]);
  };

  const hideHedgehog = (id) => {
    console.log("hideHedgehog", id);
    setHedgehogs(
      hedgehogs.filter((hedgehog) => {
        return hedgehog.id !== id;
      })
    );
  };
  const hedgehogClick = () => {
    setIsRunning(false);
    setMessage("Game Over!");
  };

  const randomPosition = () => {
    const height = "450";
    const width = "450";
    const randomTop = Math.floor(Math.random() * (height - 50) + 1);
    const randomLeft = Math.floor(Math.random() * (width - 50) + 1);
    return [randomTop, randomLeft];
  };

  useEffect(() => {
    let myInterval;
    if (isRunning) {
      myInterval = setInterval(() => {
        tick();
      }, 100);
      return () => clearInterval(myInterval);
    }
  }, [isRunning, count]);

  useEffect(() => {
    // console.log("kittens: ", kittens);
  }, [kittens]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-8 col-lg-12 col-xl-5">
        <section className="mobile_game_section">
          <h5>This game is only available on larger display size...</h5>
        </section>
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
              <h5>{pointsMessage}</h5>
            </div>
          </div>
        </section>
      </div>
      <div className="col-12 col-md-4 col-lg-12 col-xl-5">
        <KittenCollectTestInfo />
        <KittenCollectVideos />
      </div>
    </div>
  );
};
export default KittenCollect;
