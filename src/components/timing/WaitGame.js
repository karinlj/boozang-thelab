import { useState, useEffect } from "react";
import "./Timing.scss";
//import ReactPlayer from "react-player/lazy";
import { WaitGameIntro } from "../text/Intros";
import { WaitGameTestInfo } from "../text/TestInfos";

const WaitGame = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [timeMessage, setTimeMessage] = useState("");
  const [offsetTime, setOffsetTime] = useState(0);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      //tidpunkt för start
      setOffsetTime(Date.now());
      setSuccessMessage("");
      setTimeMessage("");
    }
  };

  //tidsskillnad mellan stop o start
  const delta = () => {
    //tidpunkt för stop
    let now = Date.now();
    let elapsedTime = now - offsetTime;
    setOffsetTime(now); //new start point?
    return elapsedTime;
  };

  //kolla så är mer än 5s o hur mycket
  const compare = () => {
    const limit = 5000;
    const difference = delta();
    if (difference >= limit) {
      setSuccessMessage("Success!");
      let overflow = difference - limit;
      setTimeMessage(`${overflow}ms above 5 seconds.`);
    } else {
      setSuccessMessage("Fail!");
    }
  };
  const handleStop = () => {
    setIsRunning(false);
    compare();
  };
  useEffect(() => {
    // console.log("isRunning: ", isRunning);
    // console.log("offsetTime: ", offsetTime);
  }, [isRunning]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <section className="timing_section">
          <WaitGameIntro />
          <div>
            <input
              type="button"
              value="Start Game"
              className="formBtn add"
              onClick={handleStart}
            />

            {isRunning && (
              <input
                type="button"
                value="End Game"
                className="formBtn delete"
                onClick={handleStop}
              />
            )}
          </div>
          <div className="messages">
            <div
              className={`success_message ${timeMessage === "" ? "fail" : ""}`}
            >
              <h4>{successMessage}</h4>
            </div>

            <div className="time_message">
              <p>{timeMessage}</p>
            </div>
          </div>
        </section>
      </div>
      <div className="col-12 col-md-5">
        <WaitGameTestInfo />
      </div>
    </div>
  );
};

export default WaitGame;
