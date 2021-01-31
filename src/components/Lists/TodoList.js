import "./Lists.scss";
import Todo from "./Todo";

const TodoList = ({ todos, handleDelete }) => {
  return (
    <div className="collection">
      {todos.map((todo) => (
        <Todo todo={todo} handleDelete={handleDelete} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
