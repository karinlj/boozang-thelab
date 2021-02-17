import { useState, useEffect } from "react";
import "./conditional.scss";
import { YellowOrRedIntro } from "../text/Intros";
import { YellowOrRedTestInfo } from "../text/TestInfos";
import { YellowOrRedVideos } from "../text/videos/VideoSections";

const YellowOrRed = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="colors_section">
          <YellowOrRedIntro />
          <div className="btn_wrapper">
            <input
              type="button"
              value="Generate Color"
              className="formBtn add"
            />
            <div>
              <input type="button" value="Blue" className="formBtn blue" />
              <input type="button" value="Pink" className="formBtn pink" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-5">
        <YellowOrRedTestInfo />
        <YellowOrRedVideos />
      </div>
    </div>
  );
};

export default YellowOrRed;
