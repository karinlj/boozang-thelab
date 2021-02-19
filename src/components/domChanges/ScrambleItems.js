import { useState, useEffect } from "react";
import "./scramble.scss";
import { ScrambleItemsIntro } from "../text/Intros";
import { ScrambleItemsTestInfo } from "../text/TestInfos";
import { ScrambleItemsVideos } from "../text/videos/VideoSections";

const ScrambleItems = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-5">
        <section className="scramble_section">
          <ScrambleItemsIntro />
          <div className="animal_btns">
            <input type="button" value="elephant" className="formBtn blue" />
            {/* {this.renderBtns(true)} */}

            <input type="button" value="lion" className="formBtn pink" />
            {/* {this.renderBtns(false)} */}
          </div>

          <div className="scramble_text">
            <p>
              Current button <strong>id</strong> is: <strong>hej</strong>
            </p>

            <p>
              Current button <strong>class</strong> is: <strong>hej</strong>
            </p>
          </div>

          <div className="scramble_btns">
            <input type="button" value="Scramble Id" className="formBtn add" />

            <input
              type="button"
              value="Scramble Content"
              className="formBtn add"
            />

            <input
              type="button"
              value="Scramble Class"
              className="formBtn add"
            />
            <input
              type="button"
              value="Scramble Order"
              className="formBtn add"
            />
          </div>
        </section>
      </div>
      <div className="col-12 col-md-5">
        <ScrambleItemsTestInfo />
        <ScrambleItemsVideos />
      </div>
    </div>
  );
};

export default ScrambleItems;
