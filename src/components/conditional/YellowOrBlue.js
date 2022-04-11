import { useState, useEffect } from "react";
import "./conditional.scss";
import { YellowOrBlueIntro } from "../text/Intros";
import { YellowOrBlueTestInfo } from "../text/TestInfos";
import { YellowOrBlueVideos } from "../text/videos/VideoSections";
import { YellowOrBlueWhatToTest } from "../text/WhatToTest";
import ResultMessages from "../compMessages/ResultMessages";

const YellowOrBlue = () => {
  const colors = ["yellow", "blue"];
  const [randColor, setRandColor] = useState("");
  const [messageData, setMessageData] = useState({
    isOpenWrapper: false,
    resultMessage: "",
    isSuccess: true,
  });

  const generateColor = () => {
    setRandColor("");
    const randNumber = Math.floor(Math.random() * 2);
    setRandColor(colors[randNumber]);
    setMessageData({
      ...messageData,
      isOpenWrapper: false,
    });
  };

  const checkColor = (color) => {
    if (randColor !== "") {
      if (color === randColor) {
        setMessageData({
          ...messageData,
          isOpenWrapper: true,
          resultMessage: "Success!",
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
    }
  };
  useEffect(() => {
    // console.log("randColor", randColor);
  }, [randColor]);
  useEffect(() => {
    // console.log("messageData", messageData);
  }, [messageData]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <section className="conditional_section">
          <YellowOrBlueIntro />

          <div className="wrapper">
            <button className="formBtn add" onClick={generateColor}>
              Generate Color
            </button>
            <section className={`output_section ${randColor ? "show" : ""}`} data-testid="output">
              <h5 className="color">{randColor}</h5>
              <div className="btn_section">
                {randColor && (
                  <div>
                    <button
                      onClick={() => {
                        checkColor("yellow");
                      }}
                      className="formBtn yellow"
                    >
                      yellow
                    </button>
                    <button
                      onClick={() => {
                        checkColor("blue");
                      }}
                      className="formBtn blue"
                    >
                      blue
                    </button>
                  </div>
                )}
                <ResultMessages messageData={messageData} />
              </div>
            </section>
          </div>
        </section>
      </div>
      <div className="col-12 col-md-6">
        <YellowOrBlueTestInfo />
        <YellowOrBlueWhatToTest />
        <YellowOrBlueVideos />
      </div>
    </div>
  );
};

export default YellowOrBlue;
