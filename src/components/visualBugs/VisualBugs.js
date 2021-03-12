import { useState, useEffect } from "react";
import "./visualBugs.scss";
import { VisualBugsVideos } from "../text/videos/VideoSections";
import { VisualBugsIntro } from "../text/Intros";
import { VisualBugsTestInfo } from "../text/TestInfos";

const VisualBugs = () => {
  const [index, setIndex] = useState(0);
  const animals = [
    "zebra",
    "cheetah",
    "lion",
    "giraffe",
    "meerkat",
    "elephant",
    "leopard",
  ];
  const images = animals.map((animal, i) => {
    return (
      <img
        src={require(`../../img/${animal}.jpg`).default}
        key={i}
        alt={animal}
      />
    );
  });
  const animalImg = images[index];
  const animalLabel = animals[index];

  const handleClick = () => {
    //7 images: if index < 6 (0-5), add 1
    if (index < animals.length - 1) {
      setIndex((index) => index + 1);
    } else {
      setIndex(0);
    }
  };
  useEffect(() => {
    // console.log("index: ", index);
  }, [index]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="visual_bugs_section">
          <VisualBugsIntro />
          <div className="row">
            <div className="col-12 col-sm-10">
              <div className="apect-ratio-box">
                <div className="apect-ratio-inside">{animalImg}</div>
              </div>
              <div className="label_wrapper">
                <h6>{animalLabel}</h6>
              </div>
            </div>
            <div className="col-12 col-sm-2">
              <input
                type="button"
                value="Next"
                className="formBtn add"
                onClick={handleClick}
              />
            </div>
          </div>
        </section>
      </div>
      <div className="col-12 col-md-5">
        <VisualBugsTestInfo />
        <VisualBugsVideos />
      </div>
    </div>
  );
};

export default VisualBugs;
