import { useState, useEffect } from "react";
import "./Lists.scss";
import ReactPlayer from "react-player/lazy";
import CatList from "./CatList";
import { getData } from "../fetchFunctions/fetchFunctions";
import { deleteData } from "../fetchFunctions/fetchFunctions";
import { TaskTrackerIntro } from "./text/Intros";
import { TaskTrackerTestInfo } from "./text/TestInfos";

const TaskTracker = () => {
  const [tasks, setTasks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const tasksUrl = "http://localhost:9000/catList/";
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await getData(tasksUrl);
      // console.log("tasksUrl:", tasksUrl);
      //setting Gui state
      setTasks(tasksFromServer);
      setIsLoading(false);
      if (tasksFromServer) {
        setError(null);
      } else {
        setError("Ooops!! Could not fetch data...");
      }
    };
    getTasks();
  }, []);
  //delete Todo in db and Gui
  const handleDelete = async (id) => {
    //id= argument in handleDelete() from TodoList component
    await deleteData(tasksUrl + id);
    //setting Gui state
    setTasks(
      tasks.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="todo-section">
          <TaskTrackerIntro />
          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loading">Loading...</div>}
          {tasks && <CatList items={tasks} handleDelete={handleDelete} />}
          {/* <AddTodo /> */}
        </div>
        <TaskTrackerTestInfo />
      </div>
      <div className="col-12 col-md-5">
        <div className="video_section">Videos</div>
      </div>
    </div>
  );
};

export default TaskTracker;
