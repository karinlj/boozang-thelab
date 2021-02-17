import { useState, useEffect } from "module";
import "./VisualBugs.scss";
import animalData from "./animalData.json";
import Elephant from "../../img/elephant.jpg";
import { VisualBugsVideos } from "../text/videos/VideoSections";

import { VisualBugsIntro } from "../text/Intros";
import { VisualBugsTestInfo } from "../text/TestInfos";

const VisualBugs = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="visual_bugs_section">
          <VisualBugsIntro />

          <div className="row">
            <div className="col-8">
              <div className="apect-ratio-box">
                <div className="apect-ratio-inside">
                  <img src={Elephant} alt="elephant" />
                  {/* {animalData.map((item) => {
                return (
                  <img
                    key={item.image}
                    src={require(`../../img/${item.image}.jpg`)}
                    alt={item.image}
                  />
                );
              })} */}
                </div>
              </div>

              <div className="control_wrapper">
                <div className="label_wrapper">
                  <h6>Elephant</h6>
                </div>

                <input type="submit" value="Next" className="formBtn add" />
                {/* <MainBtn classProp="button pink-btn" clickProp={() => this.handleNext()}>
                Next
              </MainBtn> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-5">
        <VisualBugsTestInfo />
        <VisualBugsVideos />
      </div>
    </div>
  );
};

export default VisualBugs;
