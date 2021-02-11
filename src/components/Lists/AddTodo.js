import { useState, useEffect } from "react";
import { addData } from "../fetchFunctions/fetchFunctions";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const todosUrl = "http://localhost:9000/todos/";

  //add Todo in db
  const handleSubmit = (e) => {
    e.preventDefault();
    //(json server makes id)
    const todo = { title: title };
    setIsLoading(true);
    setTimeout(async () => {
      const data = await addData(todosUrl, todo);
      addTodo(data);
      setIsLoading(false);
      //reset
      setTitle("");
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
        <section className="btn_section">
          <div className="text-center">
            {/* conditional rendering */}
            {isLoading && (
              <input
                type="submit"
                value="Adding Todo..."
                className="formBtn adding"
              />
            )}
            {!isLoading && (
              <input type="submit" value="Add Todo" className="formBtn add" />
            )}
          </div>
        </section>
      </form>
    </div>
  );
};
export default AddTodo;
