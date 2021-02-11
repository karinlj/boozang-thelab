import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getData } from "../../fetchFunctions/fetchFunctions";
import { deleteData } from "../../fetchFunctions/fetchFunctions";
import { updateData } from "../../fetchFunctions/fetchFunctions";

const CatDetails = () => {
  const [singleCat, setSingleCat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const [values, setValues] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [inOrOutside, setInOrOutside] = useState("");

  const { cat_id } = useParams();
  const catsUrl = "http://localhost:9000/cats/";
  const singleCatUrl = catsUrl + cat_id;
  const history = useHistory();

  useEffect(() => {
    const getSingleCat = async () => {
      const catFromServer = await getData(singleCatUrl);
      //setting Gui state
      setSingleCat(catFromServer);
      setIsLoading(false);
      if (catFromServer) {
        setError(null);
      } else {
        setError("Ooops!! Could not fetch data...");
      }
      //inital value
      setName(catFromServer.name);
      setDescription(catFromServer.description);
      setInOrOutside(catFromServer.inOrOutside);
    };
    getSingleCat();
  }, [singleCatUrl]);

  const handleDelete = async (id) => {
    const deletedCatFromServer = await deleteData(catsUrl, id);
    if (deletedCatFromServer) {
      //redirecting so do not have to set gui state
      history.push("/catshelter");
    } else {
      setError("Ooops!! Could not delete data...");
    }
    return deletedCatFromServer;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //creating cat with updated name and description
    const updatedCat = {
      ...singleCat,
      name: name,
      description: description,
      inOrOutside: inOrOutside,
    };
    //PUT request...send update
    const catFromServer = await updateData(singleCatUrl, updatedCat);
    if (catFromServer) {
      //redirecting so do not have to set gui state
      history.push("/catshelter");
    } else {
      setError("Ooops!! Could not update data...");
    }
  };

  const handleCancel = () => {
    history.push("/catshelter");
  };
  useEffect(() => {
    // console.log("new values:", name, description, inOrOutside);
  }, [name, description, inOrOutside]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <section className="catshelter_section">
          {error && <div className="error">{error}</div>}
          {singleCat && (
            <article className="single_cat">
              <form className="list_form" onSubmit={handleSubmit}>
                <header>
                  <div className="cat_name">
                    <i className="fas fa-cat"></i>
                    <h2>
                      <input
                        type="text"
                        name="name"
                        className="name"
                        required
                        placeholder="Enter name..."
                        defaultValue={singleCat.name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </h2>
                  </div>
                  <input
                    type="button"
                    value="Delete"
                    className="formBtn delete"
                    onClick={() => handleDelete(singleCat.id)}
                  />
                </header>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Enter description..."
                  defaultValue={singleCat.description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <div className="goOutOrNot">
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="location"
                        value="outside"
                        //checked if...
                        defaultChecked={singleCat.inOrOutside === "outside"}
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
                        defaultChecked={singleCat.inOrOutside === "inside"}
                        onChange={(e) => {
                          setInOrOutside(e.target.value);
                        }}
                      />
                      <span>Stay inside</span>
                    </label>
                  </div>
                </div>
                <section className="btn_section">
                  <div className="text-center addTodo">
                    {isLoading && (
                      <input
                        type="submit"
                        value="Saving..."
                        className="addBtn adding"
                      />
                    )}
                    {!isLoading && (
                      <input
                        type="submit"
                        value="Save"
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
          )}
        </section>
      </div>
    </div>
  );
};
export default CatDetails;
