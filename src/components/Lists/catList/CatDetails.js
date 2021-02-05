import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getData } from "../../fetchFunctions/fetchFunctions";
import { deleteData } from "../../fetchFunctions/fetchFunctions";

const CatDetails = () => {
  const [singleCat, setSingleCat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    };
    getSingleCat();
  }, []);

  //delete Todo in db and Gui
  const handleDelete = async (id) => {
    //console.log("id:", id);
    const deletedCatFromServer = await deleteData(catsUrl, id);
    if (deletedCatFromServer) {
      //redirecting so do not have to set gui state
      history.push("/catshelter");
    } else {
      setError("Ooops!! Could not fetch data...");
    }
    return deletedCatFromServer;
  };

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="todo-section">
          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loading">Loading...</div>}
          {singleCat && (
            <article className="single_cat">
              <header>
                <h2>{singleCat.name}</h2>
                <button
                  className="delete"
                  onClick={() => handleDelete(singleCat.id)}
                >
                  Moved
                </button>
              </header>

              <div>{singleCat.description}</div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatDetails;
