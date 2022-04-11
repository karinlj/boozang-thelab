const Todo = ({ handleDelete, todo }) => {
  return (
    <li className="collection_item" data-testid="todo">
      <span>{todo.title}</span>
      {/* call handleDelete(), pass todo.id as parameter to SortedList */}
      <button onClick={() => handleDelete(todo.id)} className="delete_btn" title="delete" aria-label="Delete todo">
        {" "}
        <i className="fas fa-trash-alt delete_icon" aria-hidden="true"></i>
      </button>
    </li>
  );
};
export default Todo;
