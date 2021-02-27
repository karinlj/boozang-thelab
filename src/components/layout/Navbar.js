import { NavLink } from "react-router-dom";
import ToggleBtn from "./SideDrawer/ToggleBtn";

const Navbar = ({ handleDrawerClick }) => (
  <div className="navigation">
    <nav className="nav">
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              {/* passed prop from App.js where function is*/}
              <ToggleBtn click={handleDrawerClick} />
            </div>
            <h2 className="logo">
              <NavLink to="/">theLab</NavLink>
            </h2>

            <ul className="links">
              <li>
                Getting started
                <ul className="sub_list">
                  <li>
                    <NavLink
                      to="/introduction"
                      className="link"
                      activeClassName="current"
                    >
                      Introduction
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/overview"
                      className="link"
                      activeClassName="current"
                    >
                      Overview of the tool
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                Timing
                <ul className="sub_list">
                  <li>
                    <NavLink
                      to="/speedGame"
                      className="link"
                      activeClassName="current"
                    >
                      Speed Game
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/waitGame"
                      className="link"
                      activeClassName="current"
                    >
                      Wait Game
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                Conditional logic
                <ul className="sub_list">
                  <li>
                    <NavLink
                      to="/yellowOrBlue"
                      className="link"
                      activeClassName="current"
                    >
                      Yellow or Blue
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/catOrDog"
                      className="link"
                      activeClassName="current"
                    >
                      Cat or dog
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                Lists
                <ul className="sub_list">
                  <li>
                    <NavLink
                      to="/sortedList"
                      className="link"
                      activeClassName="current"
                    >
                      Sorted list
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/unsortedList"
                      className="link"
                      activeClassName="current"
                    >
                      Unsorted list
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/catshelter"
                      className="link"
                      activeClassName="current"
                    >
                      Cat Shelter
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                Forms and tables
                <ul className="sub_list">
                  <li>
                    <NavLink
                      to="/formFill"
                      className="link"
                      activeClassName="current"
                    >
                      Form Fill
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Tables"
                      className="link"
                      activeClassName="current"
                    >
                      Tables
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                Bug reporting
                <ul className="sub_list">
                  <li>
                    <NavLink
                      to="/visualBugs"
                      className="link"
                      activeClassName="current"
                    >
                      Visual Bugs
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                DOM changes
                <ul className="sub_list">
                  <li>
                    <NavLink
                      to="/scramble"
                      className="link"
                      activeClassName="current"
                    >
                      Scramble items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/multiScramble"
                      className="link"
                      activeClassName="current"
                    >
                      Multi-scramble
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                Using data
                <ul className="sub_list">
                  <li>
                    <NavLink
                      to="/concatStrings"
                      className="link"
                      activeClassName="current"
                    >
                      Concat strings
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* 
              <li>
                Users and roles
                <ul className="sub_list">
                  <li>
                    <NavLink to="/randomLogin">Random login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/roleBasedLogin">Role-based login</NavLink>
                  </li>
                </ul>
              </li> */}
              {/* <li>
                CI server
                <ul className="sub_list">
                  <li>
                    <NavLink to="/runningCli">Running from CLI</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ciIntegration">CI integration</NavLink>
                  </li>
                </ul>
              </li> */}
              <li className="games">
                Games
                <ul className="sub_list">
                  <li>
                    <NavLink
                      to="/kittenCollect"
                      className="link"
                      activeClassName="current"
                    >
                      Collecting kittens
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
);
export default Navbar;
