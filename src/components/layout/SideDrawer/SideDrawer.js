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
                <ul className="sub-list">
                  <li>
                    <NavLink to="/introduction">
                      <div onClick={props.clickLink}>Introduction</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/overview">
                      <div onClick={props.clickLink}>Overview of the tool</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                Lists, tables and forms
                <ul className="sub-list">
                  <li>
                    <NavLink to="/sortedList">
                      <div onClick={props.clickLink}>Sorted list</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/unsortedList">
                      <div onClick={props.clickLink}>Unsorted list</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Tables">
                      <div onClick={props.clickLink}>Tables</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/formValidation">
                      <div onClick={props.clickLink}>Form validation</div>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                Timing
                <ul className="sub-list">
                  <li>
                    <NavLink to="/speed">
                      <div onClick={props.clickLink}>Speed</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/wait">
                      <div onClick={props.clickLink}>Wait</div>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                Bug reporting
                <ul className="sub-list">
                  <li>
                    <NavLink to="/visualBugs">
                      <div onClick={props.clickLink}>Visual bugs</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                Conditional logic
                <ul className="sub-list">
                  <li>
                    <NavLink to="/yellowOrRed">
                      <div onClick={props.clickLink}>Yellow or red</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/catOrDog">
                      <div onClick={props.clickLink}>Cat or dog</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                DOM changes
                <ul className="sub-list">
                  <li>
                    <NavLink to="/scramble">
                      <div onClick={props.clickLink}>Scramble items</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/multiScramble">
                      <div onClick={props.clickLink}>Multi-scramble</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                Using data
                <ul className="sub-list">
                  <li>
                    <NavLink to="/concatStrings">
                      <div onClick={props.clickLink}>Concat strings</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                Users and roles
                <ul className="sub-list">
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
              </li>

              <li>
                CI server
                <ul className="sub-list">
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
              </li>
              <li className="games">
                Games
                <ul className="sub-list">
                  <li>
                    <NavLink to="/kittenCollect">
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
