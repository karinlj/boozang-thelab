import { NavLink } from "react-router-dom";
import "./_layout.scss";

const Navbar = ({ toggleOpen, isBtnOpen }) => (
  <nav className={isBtnOpen ? "navbar navbar_is_open" : "navbar"}>
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="links">
            <li>
              <h4>Getting started</h4>

              <ul className="sub_list">
                <li>
                  <NavLink to="/" exact={true} className="link">
                    <span role="button" onClick={toggleOpen}>
                      Home
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/introduction" className="link">
                    <span role="button" onClick={toggleOpen}>
                      Introduction
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/overview" className="link">
                    <span role="button" onClick={toggleOpen}>
                      Overview of the tool
                    </span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <h4>Timing</h4>

              <ul className="sub_list">
                <li>
                  <NavLink to="/speedGame" className="link">
                    <span role="button" onClick={toggleOpen}>
                      Speed Game
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/waitGame" className="link">
                    <span role="button" onClick={toggleOpen}>
                      Wait Game
                    </span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <h4> Conditional logic</h4>

              <ul className="sub_list">
                <li>
                  <NavLink to="/yellowOrBlue" className="link">
                    <span role="button" onClick={toggleOpen}>
                      Yellow or Blue
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/catOrDog" className="link">
                    <span role="button" onClick={toggleOpen}>
                      Cat or dog
                    </span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li></li>
            <li>
              <h4> Lists, Forms and Tables</h4>

              <ul className="sub_list">
                <li>
                  <NavLink to="/sortedList" className="link">
                    <span role="button" onClick={toggleOpen}>
                      Sorted list
                    </span>
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/formFill" className="link">
                    <span role="button" onClick={toggleOpen}>
                      {" "}
                      Form Fill
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/catshelter" className="link">
                    <span role="button" onClick={toggleOpen}>
                      Cat Shelter
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tables" className="link">
                    <span role="button" onClick={toggleOpen}>
                      Tables
                    </span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <h4> Bug reporting</h4>
              <ul className="sub_list">
                <li>
                  <NavLink to="/visualBugs" className="link">
                    <span role="button" onClick={toggleOpen}>
                      Visual Bugs
                    </span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <h4> DOM changes</h4>

              <ul className="sub_list">
                <li>
                  <NavLink to="/scramble" className="link">
                    <span role="button" onClick={toggleOpen}>
                      Scramble items
                    </span>
                  </NavLink>
                </li>
                {/* <li>
            <NavLink to="/multiScramble" className="link" >
            <span role="button" onClick={toggleOpen}>Multi-scramble</div>
            </NavLink>
          </li> */}
              </ul>
            </li>
            <li>
              <h4> Using data</h4>

              <ul className="sub_list">
                <li>
                  <NavLink to="/concatStrings" className="link">
                    <span role="button" onClick={toggleOpen}>
                      Concat strings
                    </span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="games">
              <h4> Games</h4>

              <ul className="sub_list">
                <li>
                  <NavLink to="/kittenCollect" className="link">
                    <span role="button" onClick={toggleOpen}>
                      Collecting kittens
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/canvasGame" className="link">
                    <span role="button" onClick={toggleOpen}>
                      Canvas Game
                    </span>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);
export default Navbar;
