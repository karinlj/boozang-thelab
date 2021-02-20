import { useState, useEffect } from "react";
import "./scramble.scss";
import { ScrambleItemsIntro } from "../text/Intros";
import { ScrambleItemsTestInfo } from "../text/TestInfos";
import { ScrambleItemsVideos } from "../text/videos/VideoSections";

const ScrambleItems = () => {
  const [myId, setMyId] = useState("small");
  const [myClass, setMyClass] = useState("blue");
  const [myContent, setMyContent] = useState("puma");

  const toggleId = () => {
    if (myId === "small") {
      setMyId("big");
    } else {
      setMyId("small");
    }
  };
  const toggleClass = () => {
    if (myClass === "blue") {
      setMyClass("purple");
    } else {
      setMyClass("blue");
    }
  };
  const toggleContent = () => {
    if (myContent === "puma") {
      setMyContent("tiger");
    } else {
      setMyContent("puma");
    }
  };

  useEffect(() => {
    console.log("myId", myId);
    console.log("myClass", myClass);
  }, [myClass, myId]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-5">
        <section className="scramble_section">
          <ScrambleItemsIntro />
          <div className="animal_btns">
            <input
              type="button"
              value={myContent}
              id={myId}
              className={`formBtn ${myClass}`}
            />
            {/* {this.renderBtns(true)} */}

            <input type="button" value="lion" className="formBtn pink" />
            {/* {this.renderBtns(false)} */}
          </div>

          <div className="scramble_text">
            <p>
              Current button <strong className="category">id</strong> is:{" "}
              <strong>{myClass}</strong>
            </p>

            <p>
              Current button <strong className="category">class</strong> is:{" "}
              <strong>{myId}</strong>
            </p>
          </div>

          <div className="row justify-content-between">
            <div className="col">
              <input
                type="button"
                value="Scramble Id"
                className="formBtn add"
                onClick={toggleId}
              />
              <input
                type="button"
                value="Scramble Class"
                className="formBtn add"
                onClick={toggleClass}
              />
              <input
                type="button"
                value="Scramble Content"
                className="formBtn add"
                onClick={toggleContent}
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
