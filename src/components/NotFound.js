import { Link } from "react-router-dom";
import CuteCat from "../img/cuteCat.png";
const NotFound = () => {
  return (
    <div className="not_found">
      <h1>Sorry...</h1>
      <p>That page cannot be found.</p>
      <img src={CuteCat} alt="Cat" />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;
