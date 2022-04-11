import { useState, useEffect } from "react";
import "./lists.scss";
import { SortedListIntro } from "../text/Intros";
import { SortedListTestInfo } from "../text/WhyLearn";
import { SortedListVideos } from "../text/videos/VideoSections";
import { SortedListWhatToTest } from "../text/WhatToTest";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { getData } from "../fetchFunctions/fetchFunctions";
import { deleteData } from "../fetchFunctions/fetchFunctions";
import { TodosDb } from "../text/DbInfo";

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
    //console.log("todos_sortedList:", todos);
  }, [todos]);

  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <section className="list_section">
          <SortedListIntro />
          {error && <p className="error">{error}</p>}
          {isLoading && <p className="loading">Loading...</p>}
          {todos && <TodoList todos={todos} handleDelete={handleDelete} />}
          <AddTodo addTodo={addTodo} todos={todos} />
        </section>
      </div>
      <div className="col-12 col-md-6">
        <SortedListTestInfo />
        <SortedListWhatToTest />
        <TodosDb />
        <SortedListVideos />
      </div>
    </div>
  );
};
export default SortedList;
