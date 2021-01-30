import "./Backdrop.scss";

const Backdrop = ({ clickBackdrop }) => {
  return <div className="backdrop" onClick={clickBackdrop} />;
};

export default Backdrop;
