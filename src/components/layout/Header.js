import Boozang from "../../img/boozang.png";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header-section">
        <div className="container">
          <div className="row justify-content-end">
            <ul>
              <li>
                Powered by &nbsp;{" "}
                <a href="https:boozang.com">
                  <img src={Boozang} alt="boozang logo" />
                  {/* <br />
                  <h4 className="">Try it out now!</h4> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
