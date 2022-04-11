import { useState } from "react";
import "./conditional.scss";
import { CatOrDogIntro } from "../text/Intros";
import { CatOrDogTestInfo } from "../text/WhyLearn";
import { CatOrDogVideos } from "../text/videos/VideoSections";
import { CatOrDogWhatToTest } from "../text/WhatToTest";
import ResultMessages from "../compMessages/ResultMessages";

const CatOrDog = () => {
  const pets = ["cat", "dog"];
  const [randImage, setRandImage] = useState(null);
  const [messageData, setMessageData] = useState({
    isOpenWrapper: false,
    resultMessage: "",
    isSuccess: true,
  });

  const generateImage = () => {
    let images = pets.map((pet, i) => {
      return <img src={require(`../../img/${pet}.jpg`).default} key={i} alt={pet} />;
    });
    //setRandImage(null);
    const randNumber = Math.floor(Math.random() * 2);
    setRandImage(images[randNumber]);
    setMessageData({
      ...messageData,
      isOpenWrapper: false,
    });
  };
  const checkPet = (pet) => {
    if (randImage) {
      if (pet === randImage.props.alt) {
        setMessageData({
          ...messageData,
          isOpenWrapper: true,
          resultMessage: "Success!",
          isSuccess: true,
        });
      } else {
        setMessageData({
          ...messageData,
          isOpenWrapper: true,
          resultMessage: "Try again!",
          isSuccess: false,
        });
      }
    }
  };

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <section className="conditional_section">
          <CatOrDogIntro />
          <div className="wrapper">
            <button className="form_btn add" onClick={generateImage}>
              Generate Image
            </button>

            <section className={`output_section ${randImage ? "show" : ""}`} data-testid="output">
              <div className="image">{randImage}</div>
              <div className="btn_section">
                {randImage && (
                  <div>
                    <button
                      onClick={() => {
                        checkPet("cat");
                      }}
                      className="form_btn pink"
                    >
                      cat
                    </button>
                    <button
                      onClick={() => {
                        checkPet("dog");
                      }}
                      className="form_btn turqoise"
                    >
                      dog
                    </button>
                  </div>
                )}
                <ResultMessages messageData={messageData} />
              </div>
            </section>
          </div>
        </section>
      </div>
      <div className="col-12 col-md-6">
        <CatOrDogTestInfo />
        <CatOrDogWhatToTest />
        <CatOrDogVideos />
      </div>
    </div>
  );
};

export default CatOrDog;
