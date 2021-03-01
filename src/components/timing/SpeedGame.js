import { useState, useEffect } from "react";
import "./Timing.scss";
import { SpeedGameVideos } from "../text/videos/VideoSections";
import { SpeedGameIntro } from "../text/Intros";
import { SpeedGameTestInfo } from "../text/TestInfos";
import ResultMessages from "../compMessages/ResultMessages";

const SpeedGame = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [timeMessage, setTimeMessage] = useState("");

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      setSuccessMessage("");
      setTimeMessage("");
      let startCount = Math.floor(Math.random() * 10000) + 1000; //random nr mellan 1000-10000ms
      //start counting down at randomnr
      setCount(startCount);
    }
  };
  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
      setSuccessMessage("You are fast!!");
      setTimeMessage(`Your reaction time is ${-count} ms.`);
    }
  };
  useEffect(() => {
    let myInterval = null;
    if (isRunning) {
      myInterval = setInterval(() => {
        setCount((count) => count - 100);
      }, 100);
    } else if (!isRunning) {
      clearInterval(myInterval);
    }
    //cleanup
    return () => clearInterval(myInterval);

    // console.log("isRunning: ", isRunning);
    // console.log("count: ", count);
  }, [isRunning, count]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="timing_section">
          <SpeedGameIntro />
          <div>
            <input
              type="button"
              value="Start Game"
              className="formBtn add"
              onClick={handleStart}
            />
            {count < 0 && (
              <input
                type="button"
                value="End Game"
                className="formBtn delete"
                onClick={handleStop}
              />
            )}
          </div>
          <ResultMessages
            openWrapper={isRunning}
            successMessage={successMessage}
            subMessage={timeMessage}
            messageString={"You are fast!!"}
          />
          {/* <div className={`result_wrapper ${!isRunning ? "show" : ""}`}>
            <h4
              className={`success_message ${
                successMessage === "Success!" ? "" : "fail"
              }`}
            >
              {successMessage}
            </h4>
            <p className="sub_message">{timeMessage}</p>
          </div> */}
        </section>
      </div>
      <div className="col-12 col-md-5">
        <SpeedGameTestInfo />
        <SpeedGameVideos />
      </div>
    </div>
  );
};
export default SpeedGame;
