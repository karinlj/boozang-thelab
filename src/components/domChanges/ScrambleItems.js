import { useState, useEffect } from "react";
import "./scramble.scss";
import { ScrambleItemsIntro } from "../text/Intros";
import { ScrambleItemsTestInfo } from "../text/WhyLearn";
import { ScrambleItemsVideos } from "../text/videos/VideoSections";

const ScrambleItems = () => {
  const [isBtnOneFirst, setIsBtnOneFirst] = useState(true);
  const [clickedBtn, setClickedBtn] = useState("");
  const [btnOneAttributes, setBtnOneAttributes] = useState({
    myId: "small",
    myClass: "blue",
    myContent: "puma",
    styles: {},
  });
  const [btnTwoAttributes, setBtnTwoAttributes] = useState({
    myId: "big",
    myClass: "pink",
    myContent: "tiger",
    styles: {},
  });
  const btnOne = () => {
    return (
      <input
        type="button"
        name="btnOne"
        value={btnOneAttributes.myContent}
        id={btnOneAttributes.myId}
        className={`${btnOneAttributes.myClass}`}
        style={btnOneAttributes.styles}
        onClick={(e) => setClickedBtn(e.target.name)}
      />
    );
  };
  const btnTwo = () => {
    return (
      <input
        type="button"
        name="btnTwo"
        value={btnTwoAttributes.myContent}
        id={btnTwoAttributes.myId}
        className={`${btnTwoAttributes.myClass}`}
        style={btnTwoAttributes.styles}
        onClick={(e) => setClickedBtn(e.target.name)}
      />
    );
  };
  //parse from jsx to html
  const htmlParse = (comp) => {
    return (
      "<" +
      comp.type +
      " type=" +
      '"' +
      comp.props.type +
      '"' +
      " name=" +
      '"' +
      comp.props.name +
      '"' +
      " id=" +
      '"' +
      comp.props.id +
      '"' +
      " class=" +
      '"' +
      comp.props.className +
      '"' +
      " value=" +
      '"' +
      comp.props.value +
      '"' +
      " />"
    );
  };
  const toggleId = () => {
    setClickedBtn("");
    //avoid resetting value-strings
    let tmpId = btnTwoAttributes.myId;
    // console.log("tmpId: ", tmpId);
    setBtnTwoAttributes({
      ...btnTwoAttributes,
      myId: btnOneAttributes.myId,
    });
    setBtnOneAttributes({
      ...btnOneAttributes,
      myId: tmpId,
    });
  };
  const toggleClass = () => {
    setClickedBtn("");
    let tmpClass = btnTwoAttributes.myClass;
    setBtnTwoAttributes({
      ...btnTwoAttributes,
      myClass: btnOneAttributes.myClass,
    });
    setBtnOneAttributes({
      ...btnOneAttributes,
      myClass: tmpClass,
    });
  };
  const toggleContent = () => {
    setClickedBtn("");
    let tmpContent = btnTwoAttributes.myContent;
    setBtnTwoAttributes({
      ...btnTwoAttributes,
      myContent: btnOneAttributes.myContent,
    });
    setBtnOneAttributes({
      ...btnOneAttributes,
      myContent: tmpContent,
    });
  };
  const randomPosition = () => {
    const randomTop = Math.floor(Math.random() * 130 + 1);
    const randomLeft = Math.floor(Math.random() * 150 + 1);
    return [randomTop, randomLeft];
  };
  const scramblePositon = () => {
    setClickedBtn("");
    const [y1, x1] = randomPosition();
    let [y2, x2] = [0, 0];

    //ge knapp2 ny pos tills den är lillräckligt långt ifrån sin kompis(endast 9 ggr)
    let i = 0;
    //console.log("hello");
    do {
      [y2, x2] = randomPosition();
      i++;
      // console.log("pos: ", x1, y1, x2, y2);
      //slå om tärningen om avståndet är mindre än...
    } while (i < 10 && Math.abs(y2 - y1) < 40 && Math.abs(x2 - x1) < 70);

    const style1 = {
      top: y1 + "px",
      left: x1 + "px",
    };
    const style2 = {
      top: y2 + "px",
      left: x2 + "px",
    };
    setBtnOneAttributes({
      ...btnOneAttributes,
      styles: style1,
    });
    setBtnTwoAttributes({
      ...btnTwoAttributes,
      styles: style2,
    });
  };
  const toggleOrder = () => {
    setClickedBtn("");
    setIsBtnOneFirst(!isBtnOneFirst);
  };
  useEffect(() => {
    setTimeout(() => {
      scramblePositon();
    }, 100);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    //  console.log("clickedBtn", clickedBtn);
  }, [clickedBtn]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="scramble_section">
          <ScrambleItemsIntro />
          <div className="animal_btns">
            {isBtnOneFirst && (
              <div>
                {btnOne()}
                {btnTwo()}
              </div>
            )}
            {!isBtnOneFirst && (
              <div>
                {btnTwo()}
                {btnOne()}
              </div>
            )}
          </div>
          <div className="scramble_code">
            <div>
              {isBtnOneFirst && (
                <div>
                  <p className={`code ${clickedBtn === "btnOne" ? "clicked_class" : ""}`} data-testid="btnOne">
                    {htmlParse(btnOne())}
                  </p>
                  <p className={`code ${clickedBtn === "btnTwo" ? "clicked_class" : ""}`}>{htmlParse(btnTwo())}</p>
                </div>
              )}
              {!isBtnOneFirst && (
                <div>
                  <p className={`code ${clickedBtn === "btnTwo" ? "clicked_class" : ""}`}>{htmlParse(btnTwo())}</p>
                  <p className={`code ${clickedBtn === "btnOne" ? "clicked_class" : ""}`}>{htmlParse(btnOne())}</p>
                </div>
              )}
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col">
              <button className="form_btn add" onClick={toggleId}>
                Swap Id
              </button>
              <button className="form_btn add" onClick={toggleClass}>
                Swap Class
              </button>
              <button className="form_btn add" onClick={toggleContent}>
                Swap Content
              </button>
            </div>
            <div className="col">
              <button className="form_btn add green_dark" onClick={scramblePositon}>
                Random Position
              </button>
              <button className="form_btn add green_dark" onClick={toggleOrder}>
                Swap DOM Order
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="col-12 col-md-5"> */}
      <div className="col-12 col-md-6">
        <ScrambleItemsTestInfo />
        <ScrambleItemsVideos />
      </div>
    </div>
  );
};
export default ScrambleItems;
