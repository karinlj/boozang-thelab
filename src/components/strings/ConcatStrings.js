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

  const strings = [
    "bear",
    "elephant",
    "bunny",
    "horse",
    "cow",
    "tiger",
    "lion",
    "mouse",
    "bird",
    "turtle",
  ];

  const generateStrings = () => {
    const randStr1 = strings[Math.floor(Math.random() * strings.length)];
    const randStr2 = strings[Math.floor(Math.random() * strings.length)];
    setStringOne(randStr1);
    setStringTwo(randStr2);
    setConcatStr(randStr1 + randStr2);
    setSuccessMessage("");
    setInputStr("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (concatStr === inputStr) {
      setSuccessMessage("Success!");
    } else {
      setSuccessMessage("Try again!");
    }
  };
  useEffect(() => {
    console.log("concatStr: ", concatStr);
  }, [concatStr]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="strings_section">
          <ConcatStringsIntro />
          <input
            type="button"
            value="Generate strings"
            className="formBtn add"
            onClick={generateStrings}
          />
          <section className={`output_section ${stringOne ? "show" : ""}`}>
            <div className="strings">
              <p>{stringOne}</p>
              <p>{stringTwo}</p>
            </div>
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

            <div className={`result_wrapper ${concatStr ? "show" : ""}`}>
              <h4
                className={`success_message ${
                  successMessage === "Success!" ? "" : "fail"
                }`}
              >
                {successMessage}
              </h4>
            </div>
          </section>
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
