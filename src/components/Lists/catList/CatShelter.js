import { useState, useEffect } from "react";
import "../Lists.scss";
import ReactPlayer from "react-player/lazy";
import CatList from "./CatList";
import { getData } from "../../fetchFunctions/fetchFunctions";
import { getSingleItem } from "../../fetchFunctions/fetchFunctions";
import { deleteData } from "../../fetchFunctions/fetchFunctions";
//import { updateData } from "../../fetchFunctions/fetchFunctions";
// import AddCat from "./AddCat";
import { CatShelterIntro } from "../text/Intros";
import { CatShelterTestInfo } from "../text/TestInfos";
import { Link } from "react-router-dom";

const CatShelter = () => {
  const [cats, setCats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const catsUrl = "http://localhost:9000/cats";

  useEffect(() => {
    const getCats = async () => {
      const catsFromServer = await getData(catsUrl);
      // console.log("catUrl:", catUrl);
      //setting Gui state
      setCats(catsFromServer);
      setIsLoading(false);
      if (catsFromServer) {
        setError(null);
      } else {
        setError("Ooops!! Could not fetch data...");
      }
    };
    getCats();
  }, []);
  //delete Todo in db and Gui
  const handleDelete = async (id) => {
    //id= argument in handleDelete() from TodoList component
    console.log("catsUrl", catsUrl);
    await deleteData(catsUrl, id);
    //setting Gui state
    setCats(
      cats.filter((cat) => {
        return cat.id !== id;
      })
    );
  };
  const togglefoundHome = async (id) => {
    console.log("id", id);
    //getting the cat
    const catToToggle = await getSingleItem(catsUrl, id);
    //creating cat with updated foundHome
    const updatedCat = { ...catToToggle, foundHome: !catToToggle.foundHome };
    //PUT request...
    const result = await fetch(catsUrl + "/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedCat),
    });
    const data = await result.json();

    //set Gui state
    setCats(
      cats.map((cat) => {
        return cat.id === id ? { ...cat, foundHome: data.foundHome } : cat;
      })
    );

    // if (cat.id === id) {
    //   console.log("cat.foundHome", cat.foundHome);
    //   return (cat.foundHome = !cat.foundHome);
    // }
  };
  // //set Gui state
  // const addCat = async (newCat) => {
  //   console.log("newCat", newCat);
  //   setCats(newCat);
  // };
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="todo-section">
          <CatShelterIntro />
          <header className="cat_shelter_heading">
            <button className="addBtn" title="Add">
              <Link to="/addcat">Add Cat</Link>
            </button>
          </header>

          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loading">Loading...</div>}
          {cats && <CatList items={cats} togglefoundHome={togglefoundHome} />}

          {/* <AddCat addCat={addCat} /> */}
        </div>
        <CatShelterTestInfo />
      </div>
      <div className="col-12 col-md-5">
        <div className="video_section"></div>
      </div>
    </div>
  );
};

export default CatShelter;
