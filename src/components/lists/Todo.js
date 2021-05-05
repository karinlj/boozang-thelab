const Todo = ({ handleDelete, todo }) => {
  return (
    <div className="collection-item" data-testid="todo">
      <span>{todo.title}</span>
      {/* call handleDelete(), pass todo.id as parameter to SortedList */}
      <i className="fas fa-trash-alt delIconBtn" title="Delete" onClick={() => handleDelete(todo.id)}></i>
    </div>
  );
};
export default Todo;
