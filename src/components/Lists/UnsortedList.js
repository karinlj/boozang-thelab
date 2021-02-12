import { useState, useEffect } from "react";
import "./Lists.scss";
import { UnsortedListIntro } from "../text/Intros";
import { UnsortedListTestInfo } from "../text/TestInfos";
import ReactPlayer from "react-player/lazy";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { getData } from "../fetchFunctions/fetchFunctions";
import { deleteData } from "../fetchFunctions/fetchFunctions";

const UnsortedList = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const todosUrl = "http://localhost:9000/todos";

  useEffect(() => {
    const getTodos = async () => {
      const todosFromServer = await getData(todosUrl);
      //setting Gui state
      setTodos(todosFromServer);
      setIsLoading(false);
      if (todosFromServer) {
        setError(null);
      } else {
        setError("Ooops!! Could not fetch data...");
      }
    };
    getTodos();
  }, []);

  //delete Todo in db and Gui
  const handleDelete = async (id) => {
    //id= argument in handleDelete() from TodoList component
    //fetch(`http://localhost:9000/todos/${id}`
    await deleteData(todosUrl, id);
    //setting Gui state
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  //addTodo in Gui
  const addTodo = (newTodo) => {
    let todosNew = [...todos];
    let randomIndex = Math.floor(Math.random() * todosNew.length);
    //add todo at random index (replace 0)
    todosNew.splice(randomIndex, 0, newTodo);
    setTodos(todosNew);
  };

  useEffect(() => {
    // console.log("todos:", todos);
  }, [todos]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="todo-section">
          <UnsortedListIntro />
          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loading">Loading...</div>}
          {todos && <TodoList todos={todos} handleDelete={handleDelete} />}
          <AddTodo addTodo={addTodo} />
        </div>
        <UnsortedListTestInfo />
      </div>
      <div className="col-12 col-md-5">
        <div className="video_section">
          <ReactPlayer
            controls
            url="https://www.youtube.com/embed/Fh1HH-BVJkE"
            width="280px"
            height="180px"
          />
          <ReactPlayer
            controls
            url="https://www.youtube.com/embed/3c4ZX7IESyM"
            width="280px"
            height="180px"
          />
          <ReactPlayer
            controls
            url="https://www.youtube.com/embed/nFzlyKzNHHg"
            width="280px"
            height="180px"
          />
          <ReactPlayer
            controls
            url="https://www.youtube.com/embed/6ZztczG5VCQ"
            width="280px"
            height="180px"
          />
        </div>
      </div>
    </div>
  );
};

export default UnsortedList;
