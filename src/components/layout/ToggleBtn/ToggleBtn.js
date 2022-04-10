import React from "react";
import "./toggleBtn.scss";

const ToggleBtn = ({ toggleOpen, isBtnOpen }) => (
  // passed prop from Navbar but function is in App.js

  <button
    className={isBtnOpen ? "toggle_btn open" : "toggle_btn"}
    aria-label="Menu"
    aria-expanded={isBtnOpen ? "true" : "false"}
    onClick={toggleOpen}
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </button>
);
export default ToggleBtn;
