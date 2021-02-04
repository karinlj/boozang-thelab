import { useState, useEffect } from "react";
import { addData } from "../../fetchFunctions/fetchFunctions";
import { useHistory } from "react-router-dom";

const AddCat = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const catsUrl = "http://localhost:9000/cats/";
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const cat = { name: name, description: description, foundHome: false };
    setIsLoading(true);
    setTimeout(async () => {
      const data = await addData(catsUrl, cat);
      // addCat(data);
      history.push("/catshelter");
      //   setIsLoading(false);
      //   setName("");
      //   setDescription("");
    }, 1000);
  };

  useEffect(() => {
    //console.log("name", name);
  }, [name]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="todo-section">
          <article className="add_cat">
            <h2>Add Cat</h2>
            <form className="add-todo-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label htmlFor="description" className="description">
                Description:{" "}
              </label>
              <textarea
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <div className="text-center addTodo">
                {isLoading && (
                  <button className="addBtn adding">Adding Cat...</button>
                )}
                {!isLoading && (
                  <button className="addBtn" title="Add">
                    Add Cat
                  </button>
                )}
              </div>
            </form>
          </article>
        </div>
      </div>
    </div>
  );
};

export default AddCat;
