import { useState, useEffect } from "react";
import "./timing.scss";
import { SpeedGameVideos } from "../text/videos/VideoSections";
import { SpeedGameIntro } from "../text/Intros";
import { SpeedGameTestInfo } from "../text/WhyLearn";
import { SpeedGameWhatToTest } from "../text/WhatToTest";
import ResultMessages from "../compMessages/ResultMessages";

const SpeedGame = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [messageData, setMessageData] = useState({
    isOpenWrapper: false,
    resultMessage: "",
    subMessage: "",
    isSuccess: true,
  });

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      setMessageData({
        ...messageData,
        resultMessage: "",
        subMessage: "",
      });
      let startCount = Math.floor(Math.random() * 10000) + 1000; //random nr mellan 1000-10000ms
      //start counting down at randomnr
      setCount(startCount);
    }
  };
  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
      setMessageData({
        ...messageData,
        isOpenWrapper: true,
        resultMessage: "Success",
        subMessage: `Your reaction time is ${-count} ms.`,
      });
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
  }, [isRunning, count]);

  useEffect(() => {
    // console.log("isRunning: ", isRunning);
  }, [isRunning]);

  return (
    <div className="row justify-content-between" data-testid="SpeedGame">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="timing_section">
          <SpeedGameIntro />
          <div className="game_space">
            <button onClick={handleStart} className="form_btn add" data-testid="startBtn">
              Start Game
            </button>

            {count < 0 && (
              <button onClick={handleStop} className="form_btn delete">
                End Game
              </button>
            )}
            <ResultMessages messageData={messageData} />
          </div>
        </section>
      </div>
      <div className="col-12 col-md-6">
        <SpeedGameTestInfo />
        <SpeedGameWhatToTest />
        <SpeedGameVideos />
      </div>
    </div>
  );
};
export default SpeedGame;
