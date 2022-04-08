import { NavLink } from "react-router-dom";
import "./navbarLinks.scss";

const NavbarLinks = ({ toggleOpen }) => {
  return (
    <ul className="links">
      <li>
        Getting started
        <ul className="sub_list">
          <li>
            <NavLink to="/introduction" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Introduction</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/overview" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Overview of the tool</div>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        Timing
        <ul className="sub_list">
          <li>
            <NavLink to="/speedGame" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Speed Game</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/waitGame" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Wait Game</div>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        Conditional logic
        <ul className="sub_list">
          <li>
            <NavLink to="/yellowOrBlue" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Yellow or Blue</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/catOrDog" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Cat or dog</div>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        {/* Lists
        <ul className="sub_list">
          <li>
            <NavLink to="/sortedList" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Sorted list</div>
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/unsortedList" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Unsorted list</div>
            </NavLink>{" "}
          </li>
        </ul> */}
      </li>
      <li>
        Lists, Forms and Tables
        <ul className="sub_list">
          <li>
            <NavLink to="/sortedList" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Sorted list</div>
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/formFill" className="link" activeClassName="current">
              <div onClick={toggleOpen}> Form Fill</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/catshelter" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Cat Shelter</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tables" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Tables</div>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        Bug reporting
        <ul className="sub_list">
          <li>
            <NavLink to="/visualBugs" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Visual Bugs</div>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        DOM changes
        <ul className="sub_list">
          <li>
            <NavLink to="/scramble" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Scramble items</div>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/multiScramble" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Multi-scramble</div>
            </NavLink>
          </li> */}
        </ul>
      </li>
      <li>
        Using data
        <ul className="sub_list">
          <li>
            <NavLink to="/concatStrings" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Concat strings</div>
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="games">
        Games
        <ul className="sub_list">
          <li>
            <NavLink to="/kittenCollect" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Collecting kittens</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/canvasGame" className="link" activeClassName="current">
              <div onClick={toggleOpen}>Canvas Game</div>
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavbarLinks;
