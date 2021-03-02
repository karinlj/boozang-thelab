import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo_noDb";
import "./Lists.scss";
import { SortedListIntro } from "./text/SortedListIntro";
import { SortedListTestInfo } from "./text/SortedListTestInfo";
//import ReactPlayer from "react-player/youtube";
import ReactPlayer from "react-player/lazy";

const SortedList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Buy some milk" },
    { id: 2, title: "Cuddle with cats" },
    { id: 3, title: "Walk with cats" },
  ]);

  const addTodo = (title) => {
    //title= argument in addTodo() from AddTodo component
    const newTodo = {
      title: title,
      id: Math.floor(Math.random() * 10000) + 1,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    //id= argument in handleDelete() from TodoList component
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  useEffect(() => {
    //console.log("todos:", todos);
  }, [todos]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="list_section">
          <SortedListIntro />
          <TodoList todos={todos} handleDelete={handleDelete} />
          <AddTodo addTodo={addTodo} />
        </div>
        <SortedListTestInfo />
      </div>

      <div className="col-12 col-md-5">
        <ReactPlayer
          controls
          url="https://www.youtube.com/embed/9zIJX5v9vhE"
          style={{ float: "right", paddingBottom: "1rem" }}
          width="280px"
          height="180px"
        />
        <ReactPlayer
          controls
          url="https://www.youtube.com/embed/SgEpi29xTQ0"
          style={{ float: "right", paddingBottom: "1rem" }}
          width="280px"
          height="180px"
        />
        <ReactPlayer
          controls
          url="https://www.youtube.com/embed/QngusW1ODWA"
          style={{ float: "right", paddingBottom: "1rem" }}
          width="280px"
          height="180px"
        />
      </div>
    </div>
  );
};
export default SortedList;
