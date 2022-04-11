import Udemy from "../../img/udemy-logo.png";
import "./_layout.scss";

const Footer = () => {
  //UI component
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-7">
            <a href="https://www.udemy.com/code-less-test-automation-with-boozang/" className="udemy_link">
              <img src={Udemy} alt="Boozang Udemy course" />
              Free Boozang Udemy course
            </a>
          </div>
          <div className="col-12 col-md-5">
            <ul className="social_icons_list">
              <li className="social">
                <a href="mailto:administrator@boozang.com" target="_top" aria-label="Boozang email">
                  <i className="fas fa-envelope" aria-hidden="true"></i>{" "}
                </a>
                <a href="https://www.facebook.com/boozangcloud/" target="_top" aria-label="Boozang Facebook">
                  <i className="fab fa-facebook-square" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/company/boozang" target="_top" aria-label="Boozang Likedin">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://mobile.twitter.com/boozangcloud" target="_top" aria-label="Boozang Twitter">
                  <i className="fab fa-twitter-square" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p className="copy">© {new Date().getFullYear()} - Boozang</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
