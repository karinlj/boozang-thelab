import { useState, useEffect } from "react";
import "./timing.scss";
import { WaitGameVideos } from "../text/videos/VideoSections";
import { WaitGameIntro } from "../text/Intros";
import { WaitGameTestInfo } from "../text/TestInfos";
import { WaitGameWhatToTest } from "../text/WhatToTest";
import ResultMessages from "../compMessages/ResultMessages";

const WaitGame = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [offsetTime, setOffsetTime] = useState(0);
  const [messageData, setMessageData] = useState({
    isOpenWrapper: false,
    resultMessage: "",
    subMessage: "",
    isSuccess: true,
  });
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      //tidpunkt för start
      setOffsetTime(Date.now());
      setMessageData({
        ...messageData,
        isOpenWrapper: false,
        resultMessage: "",
        subMessage: "",
      });
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
      let overflow = difference - limit;
      setMessageData({
        isOpenWrapper: true,
        resultMessage: "Success!",
        subMessage: `${overflow} ms above 5 seconds.`,
        isSuccess: true,
      });
    } else {
      setMessageData({
        ...messageData,
        isOpenWrapper: true,
        resultMessage: "Try again!",
        isSuccess: false,
      });
    }
  };
  const handleStop = () => {
    setIsRunning(false);
    compare();
  };
  useEffect(() => {
    // console.log("isRunning: ", isRunning);
  }, [isRunning]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <section className="timing_section">
          <WaitGameIntro />
          <div className="game_space">
            <button onClick={handleStart} className="formBtn add" data-testid="startBtn">
              Start Game
            </button>

            {isRunning && (
              <button className="formBtn delete" onClick={handleStop}>
                End Game
              </button>
            )}
            <ResultMessages messageData={messageData} />
          </div>
        </section>
      </div>
      <div className="col-12 col-md-6">
        <WaitGameTestInfo />
        <WaitGameWhatToTest />
        <WaitGameVideos />
      </div>
    </div>
  );
};

export default WaitGame;
