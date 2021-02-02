const CatListItem = ({ handleDelete, item }) => {
  return (
    <div className="collection-item">
      <span>{item.name}</span>
      {/* call handleDelete(), pass todo.id as parameter to SortedList */}
      <i
        className="fas fa-trash-alt delBtn"
        title="Delete"
        onClick={() => handleDelete(item.id)}
      ></i>
    </div>
  );
};
export default CatListItem;
