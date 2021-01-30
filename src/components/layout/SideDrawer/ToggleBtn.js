import React from "react";
import "./ToggleBtn.scss";

const ToggleBtn = props => (
  // passed prop from Navbar but function is in App.js

  <button className="toggle-btn" onClick={props.click}>
    <div className="toggle-btn-line" />
    <div className="toggle-btn-line" />
    <div className="toggle-btn-line" />
  </button>
);
export default ToggleBtn;
