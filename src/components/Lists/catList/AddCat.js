import { useState, useEffect } from "react";
import { addData } from "../../fetchFunctions/fetchFunctions";
import { useHistory } from "react-router-dom";

const AddCat = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inOrOutside, setInOrOutside] = useState("outside");

  const catsUrl = "http://localhost:9000/cats/";
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCat = {
      name: name,
      description: description,
      inOrOutside: inOrOutside,
      foundHome: false,
    };
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
  useEffect(() => {
    console.log("inOrOutside", inOrOutside);
  }, [inOrOutside]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="catshelter_section">
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

              <div className="goOutOrNot">
                <div>
                  <label>
                    <input
                      type="radio"
                      name="location"
                      // checked={true}
                      value="outside"
                      checked={inOrOutside === "outside"}
                      onChange={(e) => {
                        setInOrOutside(e.target.value);
                      }}
                    />
                    <span>Wants to go outside</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="location"
                      value="inside"
                      checked={inOrOutside === "inside"}
                      onChange={(e) => {
                        setInOrOutside(e.target.value);
                      }}
                    />
                    <span>Stay inside</span>
                  </label>
                </div>
              </div>

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
