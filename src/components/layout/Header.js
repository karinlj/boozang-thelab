import Boozang from "../../img/boozang_logo_reverse@2x.png";
import MenuButton from "./MenuButton";
import "./_layout.scss";
import Navbar from "./Navbar";

const Header = ({ toggleOpen, isBtnOpen }) => {
  return (
    <header className="site_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6">
            <nav className="main_menu">
              <MenuButton toggleOpen={toggleOpen} isBtnOpen={isBtnOpen} />
              <Navbar isBtnOpen={isBtnOpen} toggleOpen={toggleOpen} />
            </nav>
            <span className="thelab_logo">theLab</span>
          </div>
          <div className="col-6">
            <div className="boozang_logo_text">
              <span>Powered by</span>
              <a
                href="https:boozang.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Boozang homepage opens in new window"
                className="boozang_link"
              >
                <img src={Boozang} alt="Boozang homepage" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
