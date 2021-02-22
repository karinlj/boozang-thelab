import { useState, useEffect } from "react";
import "./strings.scss";
import { ConcatStringsIntro } from "../text/Intros";
import { ConcatStringTestInfo } from "../text/TestInfos";
import { ConcatStringsVideos } from "../text/videos/VideoSections";

const ConcatStrings = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [stringOne, setStringOne] = useState("");
  const [stringTwo, setStringTwo] = useState("");
  const [concatStr, setConcatStr] = useState("");
  const [inputStr, setInputStr] = useState("");

  const generateStrings = () => {
    setSuccessMessage("");
    setInputStr("");
    let strings = [
      "bear",
      "elefant",
      "bunny",
      "horse",
      "cow",
      "tiger",
      "lion",
      "mouse",
      "bird",
      "turtle",
    ];
    let randStr1 = strings[Math.floor(Math.random() * strings.length)];
    let randStr2 = strings[Math.floor(Math.random() * strings.length)];

    setStringOne(randStr1);
    setStringTwo(randStr2);
    setConcatStr(randStr1 + randStr2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (concatStr === inputStr) {
      setSuccessMessage("Good job");
    } else {
      setSuccessMessage("Try again");
    }
  };
  useEffect(() => {
    // console.log("inputStr", inputStr);
  }, [inputStr]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-5">
        <section className="strings_section">
          <ConcatStringsIntro />
          <input
            type="button"
            value="Generate strings"
            className="formBtn add"
            onClick={generateStrings}
          />
          <div className="output_section">
            <p>{stringOne}</p>
            <p>{stringTwo}</p>
          </div>

          {concatStr && (
            <form className="list_form" onSubmit={handleSubmit}>
              <label htmlFor="name">Strings put together: </label>
              <input
                type="text"
                name="strings"
                required
                value={inputStr}
                onChange={(e) => setInputStr(e.target.value)}
              />
              <section className="btn_section">
                <div className="text-center">
                  <input type="submit" value="submit" className="formBtn add" />
                </div>
              </section>
            </form>
          )}
          <h5
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
          </h5>
        </section>
      </div>
      <div className="col-12 col-md-5">
        <ConcatStringTestInfo />
        <ConcatStringsVideos />
      </div>
    </div>
  );
};
export default ConcatStrings;
