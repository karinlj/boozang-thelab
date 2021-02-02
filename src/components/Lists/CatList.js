import "./Lists.scss";
import CatListItem from "./CatListItem";

const CatList = ({ items, handleDelete }) => {
  return (
    <div className="collection">
      {items &&
        items.map((item) => (
          <CatListItem item={item} handleDelete={handleDelete} key={item.id} />
        ))}
    </div>
  );
};
export default CatList;
