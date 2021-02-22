import { useState, useEffect } from "react";
import "./scramble.scss";
import { ScrambleItemsIntro } from "../text/Intros";
import { ScrambleItemsTestInfo } from "../text/TestInfos";
import { ScrambleItemsVideos } from "../text/videos/VideoSections";

const ScrambleItems = () => {
  const [btnOneFirst, setBtnOneFirst] = useState(true);

  const [message, setMessage] = useState("");
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

  const toggleId = () => {
    setMessage("");
    if (btnOneAttributes.myId === "small") {
      setBtnOneAttributes({
        ...btnOneAttributes,
        myId: "big",
      });
      setBtnTwoAttributes({
        ...btnTwoAttributes,
        myId: "small",
      });
    } else {
      setBtnOneAttributes({
        ...btnOneAttributes,
        myId: "small",
      });
      setBtnTwoAttributes({
        ...btnTwoAttributes,
        myId: "big",
      });
    }
  };
  const toggleClass = () => {
    setMessage("");
    if (btnOneAttributes.myClass === "blue") {
      setBtnOneAttributes({
        ...btnOneAttributes,
        myClass: "pink",
      });
      setBtnTwoAttributes({
        ...btnTwoAttributes,
        myClass: "blue",
      });
    } else {
      setBtnOneAttributes({
        ...btnOneAttributes,
        myClass: "blue",
      });
      setBtnTwoAttributes({
        ...btnTwoAttributes,
        myClass: "pink",
      });
    }
  };
  const toggleContent = () => {
    setMessage("");
    if (btnOneAttributes.myContent === "puma") {
      setBtnOneAttributes({
        ...btnOneAttributes,
        myContent: "tiger",
      });
      setBtnTwoAttributes({
        ...btnTwoAttributes,
        myContent: "puma",
      });
    } else {
      setBtnOneAttributes({
        ...btnOneAttributes,
        myContent: "puma",
      });
      setBtnTwoAttributes({
        ...btnTwoAttributes,
        myContent: "tiger",
      });
    }
  };
  const randomPositon = () => {
    const randomTop = Math.floor(Math.random() * 130 + 1) + "px";
    const randomLeft = Math.floor(Math.random() * 150 + 1) + "px";
    const style = {
      top: randomTop,
      left: randomLeft,
    };
    return style;
  };
  const scramblePositon = () => {
    const posOne = randomPositon();
    const posTwo = randomPositon();
    setBtnOneAttributes({
      ...btnOneAttributes,
      styles: posOne,
    });
    setBtnTwoAttributes({
      ...btnTwoAttributes,
      styles: posTwo,
    });
  };
  const DOMorder = () => {
    setMessage("");
    setBtnOneFirst(!btnOneFirst);
  };

  const handleClick = (e) => {
    const { id, className, value, name } = e.target;
    const btn = document.querySelector(`#${id}`);
    const elementName = btn.parentNode.firstChild.name;
    // const parent = btn.parentNode.nodeName;

    let firstBtn;
    if (name === elementName) {
      firstBtn = true;
    } else firstBtn = false;

    // console.log("btn: ", btn);
    // console.log("parent: ", parent);
    // console.log("elementName: ", elementName);
    // console.log("firstBtn: ", firstBtn);

    const message = () => {
      return (
        <div>
          <p> Clicked button:</p>
          <p>
            id = <strong className="category">{id}</strong>
          </p>
          <p>
            class = <strong className="category">{className}</strong>
          </p>
          <p>
            content = <strong className="category">{value}</strong>
          </p>
          <p>
            DOM order ={" "}
            <strong className="category">
              {firstBtn ? "First button" : "Second button"}
            </strong>
          </p>
        </div>
      );
    };
    setMessage(message);
  };

  useEffect(() => {
    // console.log("btnOneFirst: ", btnOneFirst);
  }, [btnOneFirst]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-5">
        <section className="scramble_section">
          <ScrambleItemsIntro />
          <div className="animal_btns">
            {btnOneFirst && (
              <div>
                <input
                  type="button"
                  name="btnOne"
                  value={btnOneAttributes.myContent}
                  id={btnOneAttributes.myId}
                  className={`${btnOneAttributes.myClass}`}
                  style={btnOneAttributes.styles}
                  onClick={(e) => handleClick(e)}
                />
                <input
                  type="button"
                  name="btnTwo"
                  value={btnTwoAttributes.myContent}
                  id={btnTwoAttributes.myId}
                  className={`${btnTwoAttributes.myClass}`}
                  style={btnTwoAttributes.styles}
                  onClick={(e) => handleClick(e)}
                />
              </div>
            )}
            {!btnOneFirst && (
              <div>
                <input
                  type="button"
                  name="btnTwo"
                  value={btnTwoAttributes.myContent}
                  id={btnTwoAttributes.myId}
                  className={`${btnTwoAttributes.myClass}`}
                  style={btnTwoAttributes.styles}
                  onClick={(e) => handleClick(e)}
                />
                <input
                  type="button"
                  name="btnOne"
                  value={btnOneAttributes.myContent}
                  id={btnOneAttributes.myId}
                  className={`${btnOneAttributes.myClass}`}
                  style={btnOneAttributes.styles}
                  onClick={(e) => handleClick(e)}
                />
              </div>
            )}
          </div>
          <div className="scramble_text">
            <div>{message}</div>
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
                onClick={DOMorder}
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
