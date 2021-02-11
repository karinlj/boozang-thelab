import { useState, useEffect } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  //  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //call addTodo(), pass title as parameter to SortedList
    addTodo(title);
    setTitle("");
  };
  useEffect(() => {
    // console.log("title:", title);
  }, [title]);

  return (
    <div>
      <form className="list_form" onSubmit={handleSubmit}>
        <label htmlFor="">Add new Todo:</label>
        <br />
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="text-center addTodo">
          <button className="addBtn">Add Todo</button>
        </div>
      </form>
    </div>
  );
};
export default AddTodo;
