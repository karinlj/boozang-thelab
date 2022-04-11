import { useState, useEffect } from "react";
import "./scramble.scss";
import { MultiScrambleIntro } from "../text/Intros";
import { MultiScrambleTestInfo } from "../text/WhyLearn";
import { MultiScrambleVideos } from "../text/videos/VideoSections";

const MultiScramble = () => {
  const [contentAdd, setContentAdd] = useState("Add");
  const [contentDelete, setContentDelete] = useState("Delete");
  useEffect(() => {
    console.log("contentAdd", contentAdd);
  }, [contentAdd]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="scramble_section">
          <MultiScrambleIntro />
          <form className="list_form">
            <label htmlFor="">Change wording for Add:</label>
            <br />
            <input type="text" required value={contentAdd} onChange={(e) => setContentAdd(e.target.value)} />
            <label htmlFor="">Change wording for Delete:</label>
            <br />
            <input type="text" required value={contentDelete} onChange={(e) => setContentDelete(e.target.value)} />
          </form>

          <div className="multiscramble_btn_section">
            <div className="row justify-content-between">
              <div className="col">
                <input type="button" value={`${contentAdd} Koala`} className="form_btn add blue" />
                <input type="button" value={`${contentAdd} Kangaroo`} className="form_btn add purple" />
                <input type="button" value={`${contentAdd} Dolpin`} className="form_btn add pink" />
              </div>
              <div className="col">
                <input type="button" value={`${contentDelete} Koala`} className="form_btn add blue" />
                <input type="button" value={`${contentDelete} Kangaroo`} className="form_btn add purple" />
                <input type="button" value={`${contentDelete} Dolpin`} className="form_btn add pink" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-12 col-md-5">
        <MultiScrambleTestInfo />
        <MultiScrambleVideos />
      </div>
    </div>
  );
};

export default MultiScramble;
