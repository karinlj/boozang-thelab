import { useState, useEffect } from "react";
import "./Lists.scss";
import { SortedListIntro } from "../text/Intros";
import { SortedListTestInfo } from "../text/TestInfos";
import { SortedListVideos } from "../text/videos/VideoSections";
//import ReactPlayer from "react-player/youtube";
//import ReactPlayer from "react-player/lazy";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { getData } from "../fetchFunctions/fetchFunctions";
import { deleteData } from "../fetchFunctions/fetchFunctions";

const SortedList = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const todosUrl = "http://localhost:9000/todos/";
  useEffect(() => {
    const getTodos = async () => {
      const todosFromServer = await getData(todosUrl);
      // console.log("todosUrl:", todosUrl);
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
    // console.log("todosUrl", todosUrl);
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
    setTodos([...todos, newTodo]);
  };
  useEffect(() => {
    // console.log("todos:", todos);
  }, [todos]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <section className="todo-section">
          <SortedListIntro />
          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loading">Loading...</div>}
          {todos && <TodoList todos={todos} handleDelete={handleDelete} />}
          <AddTodo addTodo={addTodo} />
        </section>
      </div>
      <div className="col-12 col-md-5">
        <SortedListTestInfo />
        <SortedListVideos />
        {/* <div className="video_section">
          <ReactPlayer
            controls
            url="https://www.youtube.com/embed/9zIJX5v9vhE"
            width="280px"
            height="180px"
          />
          <ReactPlayer
            controls
            url="https://www.youtube.com/embed/SgEpi29xTQ0"
            width="280px"
            height="180px"
          />
          <ReactPlayer
            controls
            url="https://www.youtube.com/embed/QngusW1ODWA"
            width="280px"
            height="180px"
          />
        </div> */}
      </div>
    </div>
  );
};
export default SortedList;
