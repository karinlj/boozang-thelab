import { useState, useEffect } from "react";
import { addData } from "../../fetchFunctions/fetchFunctions";
import { useHistory } from "react-router-dom";

const AddCat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newValues, setNewValues] = useState({
    name: "",
    description: "",
    inOrOutside: "",
  });

  const catsUrl = "http://localhost:9000/dogs/";
  const history = useHistory();

  const handleChange = (e) => {
    // console.log("hej", e.target.value);
    //name-attributet
    const { name, value } = e.target;
    setNewValues({
      ...newValues, //all the values +
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCat = {
      ...newValues,
      foundHome: false,
    };
    setIsLoading(true);
    const addedCatToServer = await addData(catsUrl, newCat);
    if (addedCatToServer) {
      //redirecting so do not have to set gui state
      history.push("/catshelter");
    } else {
      setError("Ooops!! Could not add data...");
    }
    return addedCatToServer;
  };
  const handleCancel = () => {
    history.push("/catshelter");
  };
  useEffect(() => {
    // console.log("newValues.inOrOutside", newValues.inOrOutside);
  }, [newValues]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <section className="catshelter_section">
          {error && <div className="error">{error}</div>}
          <article className="add_cat">
            <h2>Add Cat</h2>
            <form className="list_form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                required
                value={newValues.name}
                onChange={(e) => handleChange(e)}
                //onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label htmlFor="description" className="description">
                Description:{" "}
              </label>
              <textarea
                type="text"
                name="description"
                value={newValues.description}
                onChange={(e) => handleChange(e)}
              ></textarea>

              <div className="goOutOrNot">
                <div>
                  <label>
                    <input
                      type="radio"
                      name="inOrOutside"
                      value="outside"
                      checked={newValues.inOrOutside === "outside"}
                      onChange={(e) => handleChange(e)}
                    />
                    <span>Wants to go outside</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="inOrOutside"
                      value="inside"
                      checked={newValues.inOrOutside === "inside"}
                      onChange={(e) => handleChange(e)}
                    />
                    <span>Stay inside</span>
                  </label>
                </div>
              </div>
              <section className="btn_section">
                <div className="text-center">
                  {isLoading && (
                    <input
                      type="submit"
                      value="Adding Cat..."
                      className="formBtn adding"
                    />
                  )}
                  {!isLoading && (
                    <input
                      type="submit"
                      value="Add Cat"
                      className="formBtn add"
                    />
                  )}
                </div>
                <input
                  type="button"
                  value="Cancel"
                  className="formBtn cancel"
                  onClick={handleCancel}
                />
              </section>
            </form>
          </article>
        </section>
      </div>
    </div>
  );
};

export default AddCat;
