import Boozang from "../../img/boozang_logo_reverse@2x.png";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header-section">
        <div className="container">
          <div className="boozang_logo_text">
            <span>Powered by</span>
            <a href="https:boozang.com">
              <img src={Boozang} alt="boozang logo" />
              {/* <br />
                  <h4 className="">Try it out now!</h4> */}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
