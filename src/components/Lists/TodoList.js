import "./Lists.scss";

const TodoList = ({ TodoList, handleDelete }) => {
  return (
    <div>
      {TodoList.map((todo) => (
        <div className="collection-item" key={todo.id}>
          <span>{todo.title}</span>
          {/* call handleDelete(), pass todo.id as parameter to SortedList */}
          <i
            className="fas fa-trash-alt delBtn"
            title="Delete"
            onClick={() => handleDelete(todo.id)}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
