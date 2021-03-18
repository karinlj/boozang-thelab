import { NavLink } from "react-router-dom";
import "./navbarLinks.scss";

const NavbarLinks = ({ handleClickLink }) => {
  return (
    <ul className="links">
      <li>
        Getting started
        <ul className="sub_list">
          <li>
            <NavLink to="/introduction" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Introduction</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/overview" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Overview of the tool</div>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        Timing
        <ul className="sub_list">
          <li>
            <NavLink to="/speedGame" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Speed Game</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/waitGame" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Wait Game</div>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        Conditional logic
        <ul className="sub_list">
          <li>
            <NavLink to="/yellowOrBlue" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Yellow or Blue</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/catOrDog" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Cat or dog</div>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        Lists
        <ul className="sub_list">
          <li>
            <NavLink to="/sortedList" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Sorted list</div>
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/unsortedList" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Unsorted list</div>
            </NavLink>{" "}
          </li>
        </ul>
      </li>
      <li>
        Forms and Tables
        <ul className="sub_list">
          <li>
            <NavLink to="/formFill" className="link" activeClassName="current">
              <div onClick={handleClickLink}> Form Fill</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/catshelter" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Cat Shelter</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tables" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Tables</div>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        Bug reporting
        <ul className="sub_list">
          <li>
            <NavLink to="/visualBugs" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Visual Bugs</div>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        DOM changes
        <ul className="sub_list">
          <li>
            <NavLink to="/scramble" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Scramble items</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/multiScramble" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Multi-scramble</div>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        Using data
        <ul className="sub_list">
          <li>
            <NavLink to="/concatStrings" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Concat strings</div>
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="games">
        Games
        <ul className="sub_list">
          <li>
            <NavLink to="/kittenCollect" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Collecting kittens</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/canvasGame" className="link" activeClassName="current">
              <div onClick={handleClickLink}>Canvas Game</div>
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavbarLinks;
