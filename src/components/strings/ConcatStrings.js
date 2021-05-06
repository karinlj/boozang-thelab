import { useState, useEffect } from "react";
import "./strings.scss";
import { ConcatStringsIntro } from "../text/Intros";
import { ConcatStringTestInfo } from "../text/TestInfos";
import { ConcatStringsWhatToTest } from "../text/WhatToTest";
import { ConcatStringsVideos } from "../text/videos/VideoSections";
import ResultMessages from "../compMessages/ResultMessages";

const ConcatStrings = () => {
  const [stringOne, setStringOne] = useState("");
  const [stringTwo, setStringTwo] = useState("");
  const [concatStr, setConcatStr] = useState("");
  const [inputStr, setInputStr] = useState("");
  const [messageData, setMessageData] = useState({
    isOpenWrapper: false,
    resultMessage: "",
    isSuccess: true,
  });

  const strings = ["bear", "elephant", "bunny", "horse", "cow", "tiger", "lion", "mouse", "bird", "turtle"];

  const generateStrings = () => {
    const randStr1 = strings[Math.floor(Math.random() * strings.length)];
    const randStr2 = strings[Math.floor(Math.random() * strings.length)];
    setStringOne(randStr1);
    setStringTwo(randStr2);
    setConcatStr(randStr1 + randStr2);
    setMessageData({
      ...messageData,
      isOpenWrapper: false,
      isSuccess: true,
    });
    setInputStr("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (concatStr === inputStr) {
      setMessageData({
        ...messageData,
        isOpenWrapper: true,
        resultMessage: "Success!",
      });
    } else {
      setMessageData({
        ...messageData,
        isOpenWrapper: true,
        resultMessage: "Try again!",
        isSuccess: false,
      });
    }
  };
  useEffect(() => {
    console.log("concatStr: ", concatStr);
  }, [concatStr]);

  useEffect(() => {
    //console.log("messageData", messageData);
  }, [messageData]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="strings_section">
          <ConcatStringsIntro />
          <input type="button" value="Generate strings" className="formBtn add" onClick={generateStrings} />
          <section className={`output_section ${stringOne ? "show" : ""}`}>
            <div className="strings">
              <p className="string1">{stringOne}</p>
              <p className="string2">{stringTwo}</p>
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
            <ResultMessages messageData={messageData} />
          </section>
        </section>
      </div>
      <div className="col-12 col-md-5">
        <ConcatStringTestInfo />
        <ConcatStringsWhatToTest />
        <ConcatStringsVideos />
      </div>
    </div>
  );
};
export default ConcatStrings;
