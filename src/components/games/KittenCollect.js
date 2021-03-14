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

  //lions
  const [lions, setLions] = useState([]);
  const drawLion = () => {
    const newLion = {
      id: Math.random(),
    };
    console.log("drawLion_newLion", newLion);

    setLions([...lions, newLion]);
  };
  const hideLion = (id) => {
    setLions(
      lions.filter((lion) => {
        return lion.id !== id;
      })
    );
  };
  ///////////////////////////
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
    // setCount((prevCount) => prevCount + 1);
    // setCount((count) => count + 1);
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
    };
    //console.log("drawKitten_newKitten", newKitten);
    //add to array
    setKittens([...kittens, newKitten]);

    //hide again
    setTimeout(() => {
      hideKitten(newKitten.id);
      //console.log("hideKitten_newKitten", newKitten);
    }, 1500);
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
    console.log("drawHedgehog_newHedgehog", newHedgehog.id);

    //add to array
    setHedgehogs([...hedgehogs, newHedgehog]);

    //hide again
    setTimeout(() => {
      hideHedgehog(newHedgehog.id);
    }, 1800);
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
      // } else {
      //   clearInterval(myInterval);
      return () => clearInterval(myInterval);
    }
    //cleanup = componentWillUnmount or when isRunning is changing
    //console.log("isRunning: ", isRunning);
  }, [isRunning, count]);

  useEffect(() => {
    // console.log("kittens: ", kittens);
  }, [kittens]);

  useEffect(() => {
    //console.log("hedgehogs: ", hedgehogs);
  }, [hedgehogs]);

  useEffect(() => {
    // let myInterval;
    // myInterval = setInterval(() => {
    //   drawLion();
    // }, 5000);

    console.log("lions: ", lions);
    //return () => clearInterval(myInterval);
  }, [lions]);

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
        <input
          type="button"
          value="Draw lion"
          className="formBtn orange"
          onClick={drawLion}
        />
        {lions &&
          lions.map((lion) => (
            <div className="lion_item" key={lion.id}>
              <p>{lion.id}</p>
              <input
                type="button"
                value="Hide lion"
                className="formBtn blue"
                onClick={() => hideLion(lion.id)}
              />
            </div>
          ))}
      </div>
      <div className="col-12 col-md-4 col-lg-12 col-xl-5">
        <KittenCollectTestInfo />
        <KittenCollectVideos />
      </div>
    </div>
  );
};
export default KittenCollect;
