import Boozang from "../../img/boozang_logo_reverse@2x.png";
import MenuButton from "./MenuButton";
import "./_layout.scss";

const Header = ({ toggleOpen, isBtnOpen }) => {
  return (
    <header className="site_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="lab_logo_section">
              <MenuButton toggleOpen={toggleOpen} isBtnOpen={isBtnOpen} />
              <div className="logo">theLab</div>
            </div>
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
