import { useState, useEffect } from "react";
import "./visualBugs.scss";
import { VisualBugsVideos } from "../text/videos/VideoSections";
import { VisualBugsIntro } from "../text/Intros";
import { VisualBugsTestInfo } from "../text/WhyLearn";

const VisualBugs = () => {
  const [index, setIndex] = useState(0);
  const animals = ["zebra", "cheetah", "lion", "giraffe", "meerkat", "elephant", "leopard"];
  const images = animals.map((animal, i) => {
    return <img src={require(`../../img/${animal}.jpg`).default} key={i} alt={animal} />;
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
      {/* <div className="col-12 col-md-6 col-xl-5"> */}
      <div className="col-12 col-md-6">
        <section className="visual_bugs_section">
          <VisualBugsIntro />
          <div className="apect_ratio_box">
            <div className="apect_ratio_inside">{animalImg}</div>
          </div>
          <div className="label_wrapper">
            <p>{animalLabel}</p>
          </div>
          <button className="form_btn add" onClick={handleClick}>
            Next image
          </button>
        </section>
      </div>
      {/* <div className="col-12 col-md-5"> */}
      <div className="col-12 col-md-6">
        <VisualBugsTestInfo />
        <VisualBugsVideos />
      </div>
    </div>
  );
};

export default VisualBugs;
