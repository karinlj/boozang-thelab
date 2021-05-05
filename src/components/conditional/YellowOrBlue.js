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
  const [successMessage, setSuccessMessage] = useState("");

  const generateColor = () => {
    setRandColor("");
    const randNumber = Math.floor(Math.random() * 2);
    setRandColor(colors[randNumber]);
    setSuccessMessage("");
  };

  const checkColor = (color) => {
    if (randColor !== "") {
      if (color === randColor) {
        setSuccessMessage("Success!");
      } else {
        setSuccessMessage("Try again!");
      }
    }
  };
  useEffect(() => {
    // console.log("randColor", randColor);
  }, [randColor]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="conditional_section">
          <YellowOrBlueIntro />
          <div className="wrapper">
            <input type="button" value="Generate Color" className="formBtn add" onClick={generateColor} />
            <section className={`output_section ${randColor ? "show" : ""}`}>
              <h5 className="color">{randColor}</h5>
              <div className="btn_section">
                {randColor && (
                  <div>
                    <input
                      type="button"
                      value="yellow"
                      className="formBtn yellow"
                      onClick={() => {
                        checkColor("yellow");
                      }}
                    />
                    <input
                      type="button"
                      value="blue"
                      className="formBtn blue"
                      onClick={() => {
                        checkColor("blue");
                      }}
                    />
                  </div>
                )}
                <ResultMessages
                  openWrapper={successMessage}
                  successMessage={successMessage}
                  messageString={"Success!"}
                />
              </div>
            </section>
          </div>
        </section>
      </div>
      <div className="col-12 col-md-5">
        <YellowOrBlueTestInfo />
        <YellowOrBlueWhatToTest />
        <YellowOrBlueVideos />
      </div>
    </div>
  );
};

export default YellowOrBlue;
