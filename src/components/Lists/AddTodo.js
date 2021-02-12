import { useState, useEffect } from "react";
import { addData } from "../fetchFunctions/fetchFunctions";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const todosUrl = "http://localhost:9000/todos/";

  //add Todo in db
  const handleSubmit = async (e) => {
    e.preventDefault();
    //(json server makes id)
    const todo = { title: title };
    setIsLoading(true);
    const data = await addData(todosUrl, todo);
    addTodo(data);
    setIsLoading(false);
    //reset
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
