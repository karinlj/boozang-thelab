import { useState, useEffect } from "react";
import "./VisualBugs.scss";
import { VisualBugsVideos } from "../text/videos/VideoSections";
import { VisualBugsIntro } from "../text/Intros";
import { VisualBugsTestInfo } from "../text/TestInfos";

const VisualBugs = () => {
  const [index, setIndex] = useState(0);
  const animals = [
    "zebra",
    "cheetah",
    "lion",
    "giraf",
    "meerkat",
    "elephant",
    "leopard",
  ];

  let images = animals.map((animal, i) => {
    return (
      <img
        src={require(`../../img/${animal}.jpg`).default}
        key={i}
        alt={animal}
      />
    );
  });
  let animalImg = images[index];
  let animalLabel = animals[index];

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
    // console.log("animalLabel: ", animalLabel);
  }, [index]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <section className="visual_bugs_section">
          <VisualBugsIntro />
          <div className="row">
            <div className="col-md-10 col-xl-8">
              <div className="apect-ratio-box">
                <div className="apect-ratio-inside">{animalImg}</div>
              </div>

              <div className="label_wrapper">
                <h6>{animalLabel}</h6>
              </div>
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Next"
                className="formBtn add"
                onClick={handleClick}
              />
              {/* <i
                  class="fas fa-chevron-right formBtn add"
                  onClick={handleClick}
                  title="Next"
                ></i> */}
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
