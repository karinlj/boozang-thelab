import React from "react";
import "./toggleBtn.scss";

const ToggleBtn = ({ handleClick }) => (
  // passed prop from Navbar but function is in App.js

  <button className="toggle-btn" onClick={handleClick}>
    <div className="toggle-btn-line" />
    <div className="toggle-btn-line" />
    <div className="toggle-btn-line" />
  </button>
);
export default ToggleBtn;
