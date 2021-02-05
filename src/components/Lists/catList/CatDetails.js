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
  }, [singleCatUrl]);

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
        <div className="catshelter_section">
          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loading">Loading...</div>}
          {singleCat && (
            <article className="single_cat">
              <header>
                <div className="cat_name">
                  <i className="fas fa-cat"></i>
                  <h2>{singleCat.name}</h2>
                </div>

                <button
                  className="delete"
                  onClick={() => handleDelete(singleCat.id)}
                >
                  Moved
                </button>
              </header>

              <div className="collection">
                <div className="collection-item">{singleCat.description}</div>
                <div className="collection-item">
                  {singleCat.inOrOutside === "outside" ? (
                    <div>Wants to go outside.</div>
                  ) : (
                    <div>Wants to stai inside.</div>
                  )}
                </div>
                <div className="collection-item">
                  {" "}
                  {singleCat.foundHome ? (
                    <div>Found a permanent home.</div>
                  ) : (
                    <div>Needs a permanent home</div>
                  )}
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatDetails;
