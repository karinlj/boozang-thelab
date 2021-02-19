import { useState, useEffect } from "react";
import "./scramble.scss";
import { ScrambleItemsIntro } from "../text/Intros";
import { ScrambleItemsTestInfo } from "../text/TestInfos";
import { ScrambleItemsVideos } from "../text/videos/VideoSections";

const ScrambleItems = () => {
  const [id, setId] = useState("small");
  const [myClass, setMyClass] = useState("formBtn blue");
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-5">
        <section className="scramble_section">
          <ScrambleItemsIntro />
          <div className="animal_btns">
            <input type="button" value="puma" id={id} className={myClass} />
            {/* {this.renderBtns(true)} */}

            <input type="button" value="lion" id={id} className={myClass} />
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

          <div className="row justify-content-between">
            <div className="col">
              <input
                type="button"
                value="Scramble Id"
                className="formBtn add"
              />
              <input
                type="button"
                value="Scramble Class"
                className="formBtn add"
              />
              <input
                type="button"
                value="Scramble Content"
                className="formBtn add"
              />
            </div>
            <div className="col">
              <input
                type="button"
                value="Scramble Order"
                className="formBtn add green_dark"
              />
            </div>
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
