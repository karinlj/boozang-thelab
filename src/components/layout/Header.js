import Boozang from "../../img/boozang_logo_reverse@2x.png";
import ToggleBtn from "./sideDrawer/ToggleBtn";
import { NavLink } from "react-router-dom";

const Header = ({ toggleOpen, isBtnOpen }) => {
  return (
    <header className="site_header">
      <div className="logo_section">
        <ToggleBtn toggleOpen={toggleOpen} isBtnOpen={isBtnOpen} />
        <div className="logo">
          <NavLink to="/">theLab</NavLink>
        </div>
      </div>

      <div className="boozang_logo_text">
        <span>Powered by</span>
        <a href="https:boozang.com">
          <img src={Boozang} alt="boozang homepage" />
        </a>
      </div>
    </header>
  );
};
export default Header;
