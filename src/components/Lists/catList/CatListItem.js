import { Link } from "react-router-dom";

const CatListItem = ({ handleDelete, item }) => {
  return (
    <div>
      <Link to={`/cats/${item.id}`}>
        <div className="collection-item">
          <span>{item.name} </span>
        </div>
      </Link>
    </div>
  );
};
export default CatListItem;
