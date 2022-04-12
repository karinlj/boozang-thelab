import { Link } from "react-router-dom";

const CatListItem = ({ togglefoundHome, item }) => {
  return (
    <li className="collection_item">
      <Link to={`/cats/${item.id}`} className="cat_name_link" aria-label={`${item.name} details page`}>
        <i className="fas fa-paw" aria-hidden="true"></i>
        <span>{item.name} </span>
      </Link>

      <button onClick={() => togglefoundHome(item.id)} className={`new_home ${item.foundHome ? "found" : ""}`}>
        <i className="fas fa-home" title="Found home" aria-hidden="true"></i>
      </button>
    </li>
  );
};
export default CatListItem;
