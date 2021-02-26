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
  //   const [points, setPoints] = useState(0);
  const [message, setMessage] = useState("Start collecting kittens!");
  //  const [myInterval, setMyInterval] = useState(0);
  const [kittens, setKittens] = useState([]);
  //const [hedgehogs, setHedgehogs] = useState(null);

  const finishTime = 100; //300;

  const startGame = () => {
    setCount(0);
    setIsRunning(true);
    setMessage("");
    setKittens([]);
  };

  const abortGame = () => {
    setIsRunning(false);
    setMessage("Game Aborted!");
    setKittens([]);
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

    if (Math.random() < 0.06) {
      // console.log("drawKitten");
      drawKitten();
    }
  };

  const drawKitten = () => {
    const [randTop, randLeft] = randomPosition();
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
    setTimeout(() => {
      hideKitten(newKitten.id);
      console.log("hideKitten_newKitten", newKitten);
    }, 1500);
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

  //   useEffect(() => {
  //       effect
  //       return () => {
  //           cleanup
  //       }
  //   }, [input])

  useEffect(() => {
    console.log("kittens: ", kittens);
  }, [kittens]);

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
