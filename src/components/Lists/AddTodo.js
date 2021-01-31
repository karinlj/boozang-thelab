import { useState, useEffect } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //add Todo in db
  const handleSubmit = (e) => {
    e.preventDefault();
    //json server makes id
    const todo = { title: title };
    setIsLoading(true);
    setTimeout(() => {
      fetch("http://localhost:9000/todos/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //what I post as json-format
        body: JSON.stringify(todo),
      })
        .then((res) => {
          // console.log("res: ", res);
          return res.json();
        })
        .then((data) => {
          console.log("new_todo_data: ", data);
          //call addTodo(), pass parameter to SortedList
          addTodo(data);
          setTitle("");
        });
      setIsLoading(false);
    }, 1000);
  };
  useEffect(() => {
    // console.log("title:", title);
  }, [title]);

  return (
    <div>
      <form className="add-todo-form" onSubmit={handleSubmit}>
        <label htmlFor="">Add new Todo:</label>
        <br />
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="text-center addTodo">
          {/* conditional rendering */}
          {isLoading && (
            <button className="addBtn adding">Adding Todo...</button>
          )}
          {!isLoading && (
            <button className="addBtn" title="Add">
              Add Todo
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default AddTodo;
