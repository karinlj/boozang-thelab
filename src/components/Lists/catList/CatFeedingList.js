import { useState, useEffect } from "react";
import "../Lists.scss";
import ReactPlayer from "react-player/lazy";
import CatList from "./CatList";
import { getData } from "../../fetchFunctions/fetchFunctions";
import { deleteData } from "../../fetchFunctions/fetchFunctions";
import AddCat from "./AddCat";
import { CatFeedingIntro } from "../text/Intros";
import { CatFeedingTestInfo } from "../text/TestInfos";

const CatFeedingList = () => {
  const [cat, setCats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const catsUrl = "http://localhost:9000/cats/";

  useEffect(() => {
    const getCats = async () => {
      const catFromServer = await getData(catsUrl);
      // console.log("catUrl:", catUrl);
      //setting Gui state
      setCats(catFromServer);
      setIsLoading(false);
      if (catFromServer) {
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
      cat.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  //set Gui state
  const addCat = async (newCat) => {
    console.log("newCat", newCat);
    setCats(newCat);
  };

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="todo-section">
          <CatFeedingIntro />
          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loading">Loading...</div>}
          {cat && <CatList items={cat} handleDelete={handleDelete} />}
          <AddCat addCat={addCat} />
        </div>
        <CatFeedingTestInfo />
      </div>
      <div className="col-12 col-md-5">
        <div className="video_section"></div>
      </div>
    </div>
  );
};

export default CatFeedingList;
