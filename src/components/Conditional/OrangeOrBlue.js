import { useState, useEffect } from "react";
import "./conditional.scss";
import { OrangeOrBlueIntro } from "../text/Intros";
import { OrangeOrBlueTestInfo } from "../text/TestInfos";
import { OrangeOrBlueVideos } from "../text/videos/VideoSections";

const OrangeOrBlue = () => {
  const colors = ["orange", "blue"];
  const [randColor, setRandColor] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const generateColor = () => {
    setRandColor("");
    const randNumber = Math.floor(Math.random() * 2);
    setRandColor(colors[randNumber]);
    setSuccessMessage("");
  };

  const checkColor = (color) => {
    console.log("color", color);
    if (color === randColor) {
      setSuccessMessage("Success!");
    } else {
      setSuccessMessage("Fail!");
    }
  };

  useEffect(() => {
    // console.log("randColor", randColor);
  }, [randColor]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="colors_section">
          <OrangeOrBlueIntro />
          <div className="btn_wrapper">
            <input
              type="button"
              value="Generate Color"
              className="formBtn add"
              onClick={generateColor}
            />
            <div>
              <input
                type="button"
                value="Orange"
                className="formBtn orange"
                onClick={() => {
                  checkColor("orange");
                }}
              />
              <input
                type="button"
                value="Blue"
                className="formBtn blue"
                onClick={() => {
                  checkColor("blue");
                }}
              />
            </div>
          </div>
          <div className="result_wrapper">
            <h5 className={`color ${randColor === "blue" ? "blue" : ""}`}>
              {randColor}
            </h5>

            <h4
              className={`success_message ${
                successMessage === "Success!" ? "" : "fail"
              }`}
            >
              {successMessage}
            </h4>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-5">
        <OrangeOrBlueTestInfo />
        <OrangeOrBlueVideos />
      </div>
    </div>
  );
};

export default OrangeOrBlue;
