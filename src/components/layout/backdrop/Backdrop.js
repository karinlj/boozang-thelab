import "./backdrop.scss";

const Backdrop = ({ handleClick }) => {
  return <div className="backdrop" onClick={handleClick} />;
};

export default Backdrop;
