import CatListItem from "./CatListItem";

const CatList = ({ items, togglefoundHome }) => {
  return (
    <div className="collection">
      {items &&
        items.map((item) => (
          <CatListItem
            item={item}
            togglefoundHome={togglefoundHome}
            key={item.id}
          />
        ))}
    </div>
  );
};
export default CatList;
