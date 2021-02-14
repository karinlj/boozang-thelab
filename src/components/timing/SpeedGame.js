import { useState, useEffect } from "react";
import { SpeedGameIntro } from "../text/Intros";
import { SpeedGameTestInfo } from "../text/TestInfos";

const SpeedGame = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [timeMessage, setTimeMessage] = useState("");
  const [count, setCount] = useState(0);
  const [intervallur, setIntervallur] = useState(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      setSuccessMessage("");
      setTimeMessage("");
      let startCount = Math.floor(Math.random() * 10000) + 1000; //random nr mellan 1000-10000ms
      console.log("random_startCount: " + startCount);
      //start counting down at randomnr
      setCount(startCount);
      intervalUpdate();
    }
  };
  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
      setSuccessMessage("You are fast!!");
      setTimeMessage(`Your reaction time is ${-count} ms.`);
      clearInterval(intervallur);
    }
  };
  const intervalUpdate = () => {
    let myInterval = setInterval(() => {
      // count down
      setCount((count) => count - 100);
    }, 100);
    setIntervallur(myInterval);
  };
  useEffect(() => {
    // console.log("isRunning: ", isRunning);
    // console.log("count: ", count);
  }, [isRunning, count]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
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

          <div className="messages">
            {!isRunning && (
              <div className="success_message">
                <h4>{successMessage}</h4>
              </div>
            )}
            {!isRunning && (
              <div className="time_message">
                <p>{timeMessage}</p>
              </div>
            )}
          </div>
        </section>
      </div>
      <div className="col-12 col-md-5">
        <SpeedGameTestInfo />
        {/* <VideoSidebar
          src="https://www.youtube.com/embed/92CUwz7s4sM"
          height="230"
          width="100%"
          title="getting-started"
        /> */}
      </div>
    </div>
  );
};
export default SpeedGame;
