import "./sideDrawer.scss";
import NavbarLinks from "../navbarLinks/NavbarLinks";

const SideDrawer = ({ handleClickLink, show }) => {
  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col">
    <nav className={`side_drawer ${show ? "open" : ""}`}>
      <NavbarLinks handleClickLink={handleClickLink} />
    </nav>
    //     </div>
    //   </div>
    // </div>
  );
};
export default SideDrawer;
