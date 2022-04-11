import React from "react";
import "./_layout.scss";

const MenuButton = ({ toggleOpen, isBtnOpen }) => (
  // passed prop from Navbar but function is in App.js
  <div>
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
    <p className="menu_label">Menu</p>
  </div>
);
export default MenuButton;
