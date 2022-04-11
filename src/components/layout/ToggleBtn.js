import React from "react";
import "./_layout.scss";

const ToggleBtn = ({ toggleOpen, isBtnOpen }) => (
  // passed prop from Navbar but function is in App.js

  <button
    className={isBtnOpen ? "veggie_burger veggie_burger_isOpen" : "veggie_burger"}
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
