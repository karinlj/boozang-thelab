import { useState, useEffect } from "react";
import "./Timing.scss";
import { WaitGameVideos } from "../text/videos/VideoSections";
import { WaitGameIntro } from "../text/Intros";
import { WaitGameTestInfo } from "../text/TestInfos";

const WaitGame = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [subMessage, setSubMessage] = useState("");
  const [offsetTime, setOffsetTime] = useState(0);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      //tidpunkt för start
      setOffsetTime(Date.now());
      setSuccessMessage("");
      setSubMessage("");
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
      setSubMessage(`${overflow} ms above 5 seconds.`);
    } else {
      setSuccessMessage("Fail!");
      setSubMessage(`You clicked too fast...`);
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
              className={`success_message ${
                successMessage === "Success!" ? "" : "fail"
              }`}
            >
              <h4>{successMessage}</h4>
            </div>
            <div className="time_message">
              <p>{subMessage}</p>
            </div>
          </div>
        </section>
      </div>
      <div className="col-12 col-md-5">
        <WaitGameTestInfo />
        <WaitGameVideos />
      </div>
    </div>
  );
};

export default WaitGame;
