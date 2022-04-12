import { useState, useEffect } from "react";
import { addData } from "../fetchFunctions/fetchFunctions";

const AddTodo = ({ addTodo, todos }) => {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const totalTodos = todos;
  const todosUrl = "http://localhost:9000/todos/";

  //add Todo in db
  const handleSubmit = async (e) => {
    e.preventDefault();
    //(json server makes id)
    const todo = { title: title };
    setIsLoading(true);

    if (totalTodos.length < 5) {
      const data = await addData(todosUrl, todo);
      addTodo(data);
      //reset
      setTitle("");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    //console.log("totalTodos:", totalTodos);
  }, [totalTodos]);

  return (
    <div>
      <form className="list_form" onSubmit={handleSubmit}>
        {totalTodos && totalTodos.length >= 5 && <h5 className="error">Your schedule is full!</h5>}
        <label>
          Add new Todo:
          <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <section className="btn_section">
          <div className="text-center">
            {!isLoading && (
              <button onClick={handleSubmit} className="form_btn add">
                Add todo
              </button>
            )}
            {isLoading && <button className="form_btn adding">Adding Todo...</button>}
          </div>
        </section>
      </form>
    </div>
  );
};
export default AddTodo;
