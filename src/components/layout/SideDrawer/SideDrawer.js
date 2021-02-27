import React from "react";
import { NavLink } from "react-router-dom";
import "./SideDrawer.scss";

//functional/stateless component
const SideDrawer = (props) => {
  let drawerClasses = ["side-drawer"]; //base class

  //if show = true
  if (props.show) {
    drawerClasses = ["side-drawer open"]; //extra open class
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className={drawerClasses}>
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
                      <div onClick={props.clickLink}>Introduction</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/overview"
                      className="link"
                      activeClassName="current"
                    >
                      <div onClick={props.clickLink}>Overview of the tool</div>
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
                      <div onClick={props.clickLink}>Speed Game</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/waitGame"
                      className="link"
                      activeClassName="current"
                    >
                      <div onClick={props.clickLink}>Wait Game</div>
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
                      <div onClick={props.clickLink}>Yellow or Blue</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/catOrDog"
                      className="link"
                      activeClassName="current"
                    >
                      <div onClick={props.clickLink}>Cat or dog</div>
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
                      <div onClick={props.clickLink}>Sorted list</div>
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink
                      to="/unsortedList"
                      className="link"
                      activeClassName="current"
                    >
                      <div onClick={props.clickLink}>Unsorted list</div>
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink
                      to="/catshelter"
                      className="link"
                      activeClassName="current"
                    >
                      <div onClick={props.clickLink}>Cat Shelter</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                Lists, tables and forms
                <ul className="sub_list">
                  <li>
                    <NavLink
                      to="/formFill"
                      className="link"
                      activeClassName="current"
                    >
                      <div onClick={props.clickLink}> Form Fill</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Tables"
                      className="link"
                      activeClassName="current"
                    >
                      <div onClick={props.clickLink}>Tables</div>
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
                      <div onClick={props.clickLink}>Visual Bugs</div>
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
                      <div onClick={props.clickLink}>Scramble items</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/multiScramble"
                      className="link"
                      activeClassName="current"
                    >
                      <div onClick={props.clickLink}>Multi-scramble</div>
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
                      <div onClick={props.clickLink}>Concat strings</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* <li>
                Users and roles
                <ul className="sub_list">
                  <li>
                    <NavLink to="/randomLogin">
                      <div onClick={props.clickLink}>Random login</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/roleBasedLogin">
                      <div onClick={props.clickLink}>Role-based login</div>
                    </NavLink>
                  </li>
                </ul>
              </li> */}

              {/* <li>
                CI server
                <ul className="sub_list">
                  <li>
                    <NavLink to="/runningCli">
                      <div onClick={props.clickLink}>Running from CLI</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/ciIntegration">
                      <div onClick={props.clickLink}>CI integration</div>
                    </NavLink>
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
                      <div onClick={props.clickLink}>Collecting kittens</div>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default SideDrawer;
