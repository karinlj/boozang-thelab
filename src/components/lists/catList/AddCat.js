import { useState, useEffect } from "react";
import { addData } from "../../fetchFunctions/fetchFunctions";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const AddCat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newValues, setNewValues] = useState({
    name: "",
    description: "",
    inOrOutside: "",
  });

  const catsUrl = "http://localhost:9000/cats/";
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
    //  console.log("newValues", newValues);
  }, [newValues]);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <section className="catshelter_section">
          <header className="add_cat_header">
            <h1>Add cat</h1>
            <Link to="/catshelter" className="" aria-label="Back to Cat shelter page">
              <i className="fas fa-arrow-left" aria-hidden="true"></i>
              Back to Cat shelter
            </Link>
          </header>
          {error && <p className="error">{error}</p>}

          <form className="list_form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" required value={newValues.name} onChange={(e) => handleChange(e)} />{" "}
            </label>
            <br />
            <label className="description">
              Description:
              <textarea
                type="text"
                name="description"
                value={newValues.description}
                onChange={(e) => handleChange(e)}
              ></textarea>
            </label>
            <div className="go_out_or_not ">
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
                {!isLoading && <button className="form_btn add">Add Cat</button>}
                {isLoading && <button className="form_btn adding">Adding Cat...</button>}
              </div>

              <button className="form_btn cancel" onClick={handleCancel}>
                Cancel
              </button>
            </section>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddCat;
