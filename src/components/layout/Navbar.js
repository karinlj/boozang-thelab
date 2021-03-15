import { NavLink } from "react-router-dom";
import ToggleBtn from "./sideDrawer/ToggleBtn";
import NavbarLinks from "./navbarLinks/NavbarLinks";

const Navbar = ({ handleClick }) => (
  <nav className="lab_nav">
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            {/* passed prop from App.js where function is*/}
            <ToggleBtn handleClick={handleClick} />
          </div>
          <h2 className="logo">
            <NavLink to="/">theLab</NavLink>
          </h2>
          <NavbarLinks />
        </div>
      </div>
    </div>
  </nav>
);
export default Navbar;
