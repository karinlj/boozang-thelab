import { useState, useEffect } from "react";
import "./conditional.scss";
import { YellowOrBlueIntro } from "../text/Intros";
import { YellowOrBlueTestInfo } from "../text/TestInfos";
import { YellowOrBlueVideos } from "../text/videos/VideoSections";

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
        setSuccessMessage("Good job");
      } else {
        setSuccessMessage("Try again");
      }
    }
  };
  useEffect(() => {
    // console.log("randColor", randColor);
  }, [randColor]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-5">
        <section className="conditional_section">
          <YellowOrBlueIntro />
          <div className="wrapper">
            <input
              type="button"
              value="Generate Color"
              className="formBtn add"
              onClick={generateColor}
            />
            <h5 className="color">{randColor}</h5>
            <div className="lower_section">
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
              <div className="result_wrapper">
                <h4
                  className={`success_message ${
                    successMessage === "Good job" ? "" : "fail"
                  }`}
                >
                  {successMessage}
                  {successMessage && (
                    <i
                      className={
                        successMessage === "Good job"
                          ? "fas fa-thumbs-up"
                          : "fas fa-thumbs-down"
                      }
                    ></i>
                  )}
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-12 col-md-5">
        <YellowOrBlueTestInfo />
        <YellowOrBlueVideos />
      </div>
    </div>
  );
};

export default YellowOrBlue;
