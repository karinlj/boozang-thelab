import { useState, useEffect } from "react";
import "./timing.scss";
import { WaitGameVideos } from "../text/videos/VideoSections";
import { WaitGameIntro } from "../text/Intros";
import { WaitGameTestInfo } from "../text/TestInfos";
import { WaitGameWhatToTest } from "../text/WhatToTest";
import ResultMessages from "../compMessages/ResultMessages";

const WaitGame = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [subMessage, setSubMessage] = useState("");
  const [offsetTime, setOffsetTime] = useState(0);
  const [isSuccess, setIsSuccess] = useState(true);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      //tidpunkt för start
      setOffsetTime(Date.now());
      setResultMessage("");
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
      setResultMessage("Success!");
      let overflow = difference - limit;
      setIsSuccess(true);
      setSubMessage(`${overflow} ms above 5 seconds.`);
    } else {
      setIsSuccess(false);
      setResultMessage("Try again!");
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
      <div className="col-12 col-md-6 col-xl-5">
        <section className="timing_section">
          <WaitGameIntro />
          <div className="game_space">
            <input type="button" value="Start Game" className="formBtn add" onClick={handleStart} />

            {isRunning && <input type="button" value="End Game" className="formBtn delete" onClick={handleStop} />}
            <ResultMessages
              openWrapper={!isRunning}
              message={resultMessage}
              subMessage={subMessage}
              isSuccess={isSuccess}
            />
          </div>
        </section>
      </div>
      <div className="col-12 col-md-5">
        <WaitGameTestInfo />
        <WaitGameWhatToTest />
        <WaitGameVideos />
      </div>
    </div>
  );
};

export default WaitGame;
