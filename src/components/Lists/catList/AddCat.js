import { useState, useEffect } from "react";
import { addData } from "../../fetchFunctions/fetchFunctions";
import { useHistory } from "react-router-dom";

const AddCat = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const catsUrl = "http://localhost:9000/cats/";
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCat = { name: name, description: description, foundHome: false };
    setIsLoading(true);
    setTimeout(async () => {
      const addedCatToServer = await addData(catsUrl, newCat);
      if (addedCatToServer) {
        //redirecting so do not have to set gui state
        history.push("/catshelter");
      } else {
        setError("Ooops!! Could not fetch data...");
      }
      return addedCatToServer;
    }, 1000);
  };
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="todo-section">
          {error && <div className="error">{error}</div>}
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
