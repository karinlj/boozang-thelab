import React from "react";
import SortedList from "./SortedList";
import TodoList from "./TodoList";
import AddItem from "./AddItem";
// import Sidebar from "../Sidebar";
import "./Lists.scss";
// import HeaderText from "../HeaderText";
// import VideoSidebar from "../Video/VideoSidebar";

class UnsortedList extends SortedList {
  addTodo = (todo) => {
    todo.id = Math.random();
    //new array with spread op
    let todosNew = [...this.state.todos];

    let randomIndex = Math.floor(Math.random() * todosNew.length);
    //alert(randomIndex);
    //add todo at random index
    todosNew.splice(randomIndex, 0, todo);
    this.setState({
      todos: todosNew,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { newContent } = this.state;
    //temporary new object
    let tmpItem = { id: Math.random(), content: newContent };

    //new array with spread op
    let todos = [...this.state.todos];

    if (newContent) {
      // console.log("state.newContent", newContent)

      let randomIndex = Math.floor(Math.random() * todos.length);
      //console.log("randomIndex", randomIndex);
      //add todo at random index
      todos.splice(randomIndex, 0, tmpItem);

      this.setState({
        todos,
        newContent: "",
      });
    }
  };

  render() {
    const { todos, newContent } = this.state;

    return (
      <div className="row justify-content-between">
        <div className="col-12 col-md-6">
          <div className="todo-section">
            {/* <header>
              <HeaderText componentName={this.constructor.name} />
            </header> */}
            {/* <Items items={todos} onDelete={this.handleDelete} /> */}

            <AddItem
              inputContent={newContent}
              onInputChange={this.handleChange}
              onFormSubmit={this.handleSubmit}
            />
          </div>
        </div>

        <div className="col-12 col-md-5">
          {/* <Sidebar componentName={this.constructor.name} />

          <VideoSidebar
            src="https://www.youtube.com/embed/Fh1HH-BVJkE"
            height="230"
            width="100%"
            title="getting-started"
          />

          <VideoSidebar
            src="https://www.youtube.com/embed/3c4ZX7IESyM"
            height="230"
            width="100%"
            title="getting-started"
          />

          <VideoSidebar
            src="https://www.youtube.com/embed/nFzlyKzNHHg"
            height="230"
            width="100%"
            title="getting-started"
          />

          <VideoSidebar
            src="https://www.youtube.com/embed/6ZztczG5VCQ"
            height="230"
            width="100%"
            title="getting-started"
          /> */}
        </div>
      </div>
    );
  }
}

export default UnsortedList;
