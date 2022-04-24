import { NavLink } from "react-router-dom";
import "./_layout.scss";

const Navbar = ({ toggleOpen, isBtnOpen }) => (
  <section className={isBtnOpen ? "navbar navbar_is_open" : "navbar"}>
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="links">
            <li>
              <h4>Getting started</h4>

              <ul className="sub_list">
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/" exact={true} className="link">
                      Home
                    </NavLink>
                  </span>
                </li>
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/introduction" className="link">
                      Introduction
                    </NavLink>
                  </span>
                </li>
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/overview" className="link">
                      Overview of the tool
                    </NavLink>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <h4>Timing</h4>

              <ul className="sub_list">
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/speedGame" className="link">
                      {" "}
                      Speed Game
                    </NavLink>
                  </span>
                </li>
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/waitGame" className="link">
                      Wait Game
                    </NavLink>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <h4> Conditional logic</h4>

              <ul className="sub_list">
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/yellowOrBlue" className="link">
                      Yellow or Blue
                    </NavLink>
                  </span>
                </li>
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/catOrDog" className="link">
                      Cat or dog
                    </NavLink>
                  </span>
                </li>
              </ul>
            </li>

            <li>
              <h4> Lists, Forms and Tables</h4>

              <ul className="sub_list">
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/sortedList" className="link">
                      Sorted list
                    </NavLink>
                  </span>
                </li>
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/formFill" className="link">
                      Form Fill
                    </NavLink>
                  </span>
                </li>
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/catshelter" className="link">
                      Cat Shelter
                    </NavLink>
                  </span>
                </li>
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/tables" className="link">
                      Tables
                    </NavLink>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <h4> Bug reporting</h4>
              <ul className="sub_list">
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/visualBugs" className="link">
                      Visual Bugs
                    </NavLink>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <h4> DOM changes</h4>

              <ul className="sub_list">
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/scramble" className="link">
                      Scramble items
                    </NavLink>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <h4> Using data</h4>

              <ul className="sub_list">
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/concatStrings" className="link">
                      Concat strings
                    </NavLink>
                  </span>
                </li>
              </ul>
            </li>
            <li className="games">
              <h4> Games</h4>

              <ul className="sub_list">
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/kittenCollect" className="link">
                      Collecting kittens
                    </NavLink>
                  </span>
                </li>
                <li>
                  <span onClick={toggleOpen}>
                    <NavLink to="/canvasGame" className="link">
                      Canvas Game
                    </NavLink>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default Navbar;
