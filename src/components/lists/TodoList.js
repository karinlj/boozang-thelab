import "./lists.scss";
import Todo from "./Todo";

const TodoList = ({ todos, handleDelete }) => {
  return (
    <ul className="collection">
      {todos && todos.map((todo) => <Todo todo={todo} handleDelete={handleDelete} key={todo.id} />)}
    </ul>
  );
};
export default TodoList;
