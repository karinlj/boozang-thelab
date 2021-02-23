import { useState, useEffect } from "react";
import "./scramble.scss";
import { ScrambleItemsIntro } from "../text/Intros";
import { ScrambleItemsTestInfo } from "../text/TestInfos";
import { ScrambleItemsVideos } from "../text/videos/VideoSections";

const ScrambleItems = () => {
  const [btnOneFirst, setBtnOneFirst] = useState(true);
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
        onClick={(e) => handleClick(e)}
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
        onClick={(e) => handleClick(e)}
      />
    );
  };

  const toggleId = () => {
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
    const [y1, x1] = randomPosition();
    let [y2, x2] = [0, 0];

    //ge knapp2 ny pos tills den är lillräckligt långt ifrån sin kompis(endast 9 ggr)
    let i = 0;
    //console.log("blaha");
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
  {
    /* <input type="button" name="btnOne" id="small" class="blue" value="tiger"> */
  }
  const htmlParse = (comp) => {
    return (
      "<" +
      comp.type +
      " type=" +
      comp.props.type +
      " id=" +
      comp.props.id +
      " class=" +
      comp.props.className +
      " value=" +
      comp.props.value +
      " />"
    );
  };

  const handleClick = (e) => {
    const { id, className, value, name } = e.target;
    const btn = document.querySelector(`#${id}`);
    const elementName = btn.parentNode.firstChild.name;
    //blir true eller false
    //let firstBtn = name === elementName;

    // const message = () => {
    //   return (
    //     <div>
    //       <p> Clicked button:</p>
    //       <p>
    //         id = <strong className="category">{id}</strong>
    //       </p>
    //       <p>
    //         class = <strong className="category">{className}</strong>
    //       </p>
    //       <p>
    //         content = <strong className="category">{value}</strong>
    //       </p>
    //       <p>
    //         DOM order ={" "}
    //         <strong className="category">
    //           {firstBtn ? "First button" : "Second button"}
    //         </strong>
    //       </p>
    //     </div>
    //   );
    // };
    // setMessage(message);
  };
  useEffect(() => {
    setTimeout(() => {
      scramblePositon();
    }, 100);
  }, []);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-5">
        <section className="scramble_section">
          <ScrambleItemsIntro />
          <div className="animal_btns">
            {btnOneFirst && (
              <div>
                {btnOne()}
                {btnTwo()}
              </div>
            )}
            {!btnOneFirst && (
              <div>
                {btnTwo()}
                {btnOne()}
              </div>
            )}
          </div>
          <div className="scramble_text">
            <div>
              {btnOneFirst && (
                <div>
                  <p>{htmlParse(btnOne())}</p>
                  <p>{htmlParse(btnTwo())}</p>
                </div>
              )}
              {!btnOneFirst && (
                <div>
                  <p>{htmlParse(btnTwo())}</p>
                  <p>{htmlParse(btnOne())}</p>
                </div>
              )}
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col">
              <input
                type="button"
                value="Swap Id"
                className="formBtn add"
                onClick={toggleId}
              />
              <input
                type="button"
                value="Swap Class"
                className="formBtn add"
                onClick={toggleClass}
              />
              <input
                type="button"
                value="Swap Content"
                className="formBtn add"
                onClick={toggleContent}
              />
            </div>
            <div className="col">
              <input
                type="button"
                value="Random Position"
                className="formBtn add green_dark"
                onClick={scramblePositon}
              />
              <input
                type="button"
                value="Swap Order"
                className="formBtn add green_dark"
                onClick={() => {
                  setBtnOneFirst(!btnOneFirst);
                }}
              />
            </div>
          </div>
        </section>
      </div>
      <div className="col-12 col-md-5">
        <ScrambleItemsTestInfo />
        <ScrambleItemsVideos />
      </div>
    </div>
  );
};
export default ScrambleItems;
