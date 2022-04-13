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
                    <div onClick={toggleOpen}>Home</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/introduction" className="link">
                    <div onClick={toggleOpen}>Introduction</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/overview" className="link">
                    <div onClick={toggleOpen}>Overview of the tool</div>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <h4>Timing</h4>

              <ul className="sub_list">
                <li>
                  <NavLink to="/speedGame" className="link">
                    <div onClick={toggleOpen}>Speed Game</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/waitGame" className="link">
                    <div onClick={toggleOpen}>Wait Game</div>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <h4> Conditional logic</h4>

              <ul className="sub_list">
                <li>
                  <NavLink to="/yellowOrBlue" className="link">
                    <div onClick={toggleOpen}>Yellow or Blue</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/catOrDog" className="link">
                    <div onClick={toggleOpen}>Cat or dog</div>
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
                    <div onClick={toggleOpen}>Sorted list</div>
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/formFill" className="link">
                    <div onClick={toggleOpen}> Form Fill</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/catshelter" className="link">
                    <div onClick={toggleOpen}>Cat Shelter</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tables" className="link">
                    <div onClick={toggleOpen}>Tables</div>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <h4> Bug reporting</h4>
              <ul className="sub_list">
                <li>
                  <NavLink to="/visualBugs" className="link">
                    <div onClick={toggleOpen}>Visual Bugs</div>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <h4> DOM changes</h4>

              <ul className="sub_list">
                <li>
                  <NavLink to="/scramble" className="link">
                    <div onClick={toggleOpen}>Scramble items</div>
                  </NavLink>
                </li>
                {/* <li>
            <NavLink to="/multiScramble" className="link" >
              <div onClick={toggleOpen}>Multi-scramble</div>
            </NavLink>
          </li> */}
              </ul>
            </li>
            <li>
              <h4> Using data</h4>

              <ul className="sub_list">
                <li>
                  <NavLink to="/concatStrings" className="link">
                    <div onClick={toggleOpen}>Concat strings</div>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="games">
              <h4> Games</h4>

              <ul className="sub_list">
                <li>
                  <NavLink to="/kittenCollect" className="link">
                    <div onClick={toggleOpen}>Collecting kittens</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/canvasGame" className="link">
                    <div onClick={toggleOpen}>Canvas Game</div>
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
