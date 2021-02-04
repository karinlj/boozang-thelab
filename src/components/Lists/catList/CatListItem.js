import { Link } from "react-router-dom";

const CatListItem = ({ togglefoundHome, item }) => {
  return (
    <div>
      <div className="collection-item">
        <div className="cat_name">
          <Link to={`/cats/${item.id}`}>
            <div>
              <span>
                {" "}
                <i className="fas fa-paw"></i>
              </span>
              <span>{item.name} </span>
            </div>
          </Link>
        </div>
        <i
          className={`fas fa-home new_home ${item.foundHome ? "found" : ""}`}
          onClick={() => togglefoundHome(item.id)}
          title="Found home"
        ></i>
      </div>
    </div>
  );
};
export default CatListItem;
