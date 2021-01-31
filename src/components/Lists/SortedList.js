import { useState, useEffect } from "react";
import "./Lists.scss";
import { SortedListIntro } from "./text/SortedListIntro";
import { SortedListTestInfo } from "./text/SortedListTestInfo";
//import ReactPlayer from "react-player/youtube";
import ReactPlayer from "react-player/lazy";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const SortedList = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Tasks
  const fetchTodos = async () => {
    //fetch() returns promise
    const res = await fetch("http://localhost:9000/todos");
    //res.json(); returns promise
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    setTimeout(() => {
      const getTodos = async () => {
        const todosFromServer = await fetchTodos();
        setTodos(todosFromServer);
        setIsLoading(false);
        setError(null);
      };
      getTodos();
    }, 1000);
  }, []);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       fetch("http://localhost:8000/todos")
  //         //returns a promise
  //         .then((res) => {
  //           // console.log(res);
  //           //this also returns a promise
  //           return res.json();
  //         })
  //         .then((data) => {
  //           console.log("all todos:", data);
  //           setTodos(data);
  //           setIsLoading(false);
  //           setError(null);
  //         })
  //         //if connection error
  //         .catch((err) => {
  //           setError(err.message);
  //           setIsLoading(false);
  //         });
  //     }, 1000);
  //   }, []);

  //delete Todo in db and Gui
  const handleDelete = (id) => {
    //id= argument in handleDelete() from TodoList component

    fetch(`http://localhost:8000/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("deleted_todo:", id);
      //setting Gui state
      setTodos(
        todos.filter((todo) => {
          return todo.id !== id;
        })
      );
    });
  };

  //addTodo in Gui
  const addTodo = (newTodo) => {
    //setting Gui state
    setTodos([...todos, newTodo]);
  };
  //   useEffect(() => {
  //     console.log("todos:", todos);
  //   }, [todos]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="todo-section">
          <SortedListIntro />
          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loading">Loading...</div>}
          {todos && <TodoList todos={todos} handleDelete={handleDelete} />}
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
