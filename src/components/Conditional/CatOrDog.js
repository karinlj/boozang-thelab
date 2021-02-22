import { useState, useEffect } from "react";
import "./conditional.scss";
import { CatOrDogIntro } from "../text/Intros";
import { CatOrDogTestInfo } from "../text/TestInfos";
import { CatOrDogVideos } from "../text/videos/VideoSections";

const CatOrDog = () => {
  const pets = ["cat", "dog"];
  const [randImage, setRandImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const generateImage = () => {
    let images = pets.map((pet, i) => {
      return (
        <img src={require(`../../img/${pet}.jpg`).default} key={i} alt={pet} />
      );
    });
    setRandImage(null);
    const randNumber = Math.floor(Math.random() * 2);
    setRandImage(images[randNumber]);
    setSuccessMessage("");
  };

  const checkPet = (pet) => {
    if (randImage) {
      if (pet === randImage.props.alt) {
        setSuccessMessage("Good job");
      } else {
        setSuccessMessage("Try again");
      }
    }
  };
  useEffect(() => {
    //console.log("randImage", randImage);
  }, [randImage]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-5">
        <section className="conditional_section">
          <CatOrDogIntro />
          <div className="wrapper">
            <input
              type="button"
              value="Generate Image"
              className="formBtn add"
              onClick={generateImage}
            />
            <div className="image">{randImage}</div>
            <div className="lower_section">
              {randImage && (
                <div>
                  <input
                    type="button"
                    value="cat"
                    className="formBtn pink"
                    onClick={() => {
                      checkPet("cat");
                    }}
                  />
                  <input
                    type="button"
                    value="dog"
                    className="formBtn turqoise"
                    onClick={() => {
                      checkPet("dog");
                    }}
                  />
                </div>
              )}
              <div className="result_wrapper">
                <h4
                  className={`success_message ${
                    successMessage === "Good job" ? "" : "fail"
                  }`}
                >
                  {successMessage}
                  {successMessage && (
                    <i
                      className={
                        successMessage === "Good job"
                          ? "fas fa-thumbs-up"
                          : "fas fa-thumbs-down"
                      }
                    ></i>
                  )}
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-12 col-md-5">
        <CatOrDogTestInfo />
        <CatOrDogVideos />
      </div>
    </div>
  );
};

export default CatOrDog;
