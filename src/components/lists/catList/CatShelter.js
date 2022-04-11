import { useState, useEffect } from "react";
import "../lists.scss";
import { CatShelterVideos } from "../../text/videos/VideoSections";
import CatList from "./CatList";
import { getData } from "../../fetchFunctions/fetchFunctions";
import { updateData } from "../../fetchFunctions/fetchFunctions";
import { CatShelterIntro } from "../../text/Intros";
import { CatShelterTestInfo } from "../../text/WhyLearn";
import { CatShelterWhatToTest } from "../../text/WhatToTest";
import { Link } from "react-router-dom";
import { CatsDb } from "../../text/DbInfo";

const CatShelter = () => {
  const [cats, setCats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const catsUrl = "http://localhost:9000/cats";

  useEffect(() => {
    const getCats = async () => {
      const catsFromServer = await getData(catsUrl);
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

  const togglefoundHome = async (id) => {
    const singleCatUrl = catsUrl + "/" + id;
    //getting the cat from db
    const catToToggle = await getData(singleCatUrl);
    //creating cat with updated foundHome
    const updatedCat = { ...catToToggle, foundHome: !catToToggle.foundHome };

    //PUT request...send update
    const catFromServer = await updateData(singleCatUrl, updatedCat);
    console.log("catFromServer", catFromServer);

    //set Gui state
    setCats(
      cats.map((cat) => {
        return cat.id === id ? { ...cat, foundHome: catFromServer.foundHome } : cat;
      })
    );
  };
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="catshelter_section">
          <CatShelterIntro />
          <header className="cat_shelter_heading">
            {" "}
            <button className="form_btn add" title="Add">
              <Link to="/addcat">Add Cat</Link>
            </button>
          </header>
          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loading">Loading...</div>}
          {cats && <CatList items={cats} togglefoundHome={togglefoundHome} />}
        </section>
      </div>
      <div className="col-12 col-md-5">
        <CatShelterTestInfo />
        <CatShelterWhatToTest />
        <CatsDb />
        <CatShelterVideos />
      </div>
    </div>
  );
};
export default CatShelter;
