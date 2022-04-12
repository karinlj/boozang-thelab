import CatListItem from "./CatListItem";

const CatList = ({ items, togglefoundHome }) => {
  return (
    <ul className="collection">
      {items && items.map((item) => <CatListItem item={item} togglefoundHome={togglefoundHome} key={item.id} />)}
    </ul>
  );
};
export default CatList;
