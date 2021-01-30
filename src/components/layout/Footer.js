const Footer = () => {
  //UI component
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <h5 className="udemy">
              <a href="https://www.udemy.com/code-less-test-automation-with-boozang/">
                Free Boozang Udemy course
              </a>
            </h5>
          </div>
          <div className="col-12 col-md-5">
            <ul className="social_icons_list">
              <li className="social">
                <a
                  href="mailto:administrator@boozang.com"
                  target="_top"
                  className="mail"
                  title="Email"
                >
                  mail
                </a>
                <a
                  href="https://www.facebook.com/boozangcloud/"
                  target="_top"
                  className="fb"
                  title="Facebook"
                >
                  facebook
                </a>
                <a
                  href="https://www.linkedin.com/company/boozang"
                  target="_top"
                  className="linkedin"
                  title="Linkedin"
                >
                  linkedin
                </a>
                <a
                  href="https://mobile.twitter.com/boozangcloud"
                  target="_top"
                  className="twitter"
                  title="Twitter"
                >
                  twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="copy">© {new Date().getFullYear()}-Boozang</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
