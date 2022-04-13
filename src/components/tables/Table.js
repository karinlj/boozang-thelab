import { useState, useEffect } from "react";
import "./tables.scss";
//import { TablesVideos } from "../text/videos/VideoSections";
import { TablesIntro } from "../text/Intros";
import { TablesTestInfo } from "../text/WhyLearn";
import { TablesWhatToTest } from "../text/WhatToTest";
import { animalList } from "./animalList";

const Table = () => {
  const [animals, setAnimals] = useState(animalList);

  const [myFilter, setMyFilter] = useState([
    { id: 1, species: "lion", isChecked: true },
    { id: 2, species: "elephant", isChecked: true },
    { id: 3, species: "zebra", isChecked: true },
  ]);
  //set to all from start
  const [filteredAnimals, setFilteredAnimals] = useState(animals);
  const [startPageIndex, setStartPageIndex] = useState(0);
  const itemsPerPage = 6;

  const handleChange = (event) => {
    let updatedFilter = [...myFilter];
    //sets chosen input to checked/unchecked controlled input
    updatedFilter.map((item) => {
      //""=type checking
      if ("" + item.id === event.target.id) {
        item.isChecked = event.target.checked;
      }
      return item;
    });
    //sätter checked till true/false
    setMyFilter(updatedFilter);
  };
  const toggleLike = (animal) => {
    setAnimals([...animals, (animal.isLiked = !animal.isLiked)]);
  };
  const nextPage = (e) => {
    e.preventDefault();
    setStartPageIndex((startPageIndex) => startPageIndex + itemsPerPage);
  };
  const prevPage = (e) => {
    e.preventDefault();
    setStartPageIndex((startPageIndex) => startPageIndex - itemsPerPage);
  };

  useEffect(() => {
    //checked items species
    const checkedItemSpecies = myFilter
      .filter((item) => {
        return item.isChecked;
      })
      .map((item) => {
        return item.species;
      });

    const temp = animals.filter((animal) => {
      return checkedItemSpecies.includes(animal.species);
    });
    //sätter filtered animals
    setFilteredAnimals(temp);

    // console.log("filteredAnimals", filteredAnimals);
  }, [myFilter, animals]);
  return (
    <div className="row justify-content-between">
      {/* <div className="col-12 col-md-8 col-lg-12 col-xl-6"> */}
      <div className="col-12 col-md-6">
        <section className="tables_section">
          <TablesIntro />

          <section className="tables_filter_options">
            {myFilter.map((item, index) => {
              return (
                <label className="option" key={index}>
                  {item.species}s
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.species}
                    checked={item.isChecked}
                    onChange={handleChange}
                  />
                  <span className="checkmark" role="checkbox" aria-checked={item.isChecked}></span>
                </label>
              );
            })}
          </section>

          <table id="animalTable" className="table">
            <thead>
              <tr>
                <th></th>
                <th scope="col">Name</th>
                <th scope="col">Species</th>
                <th scope="col">Hairdo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredAnimals &&
                filteredAnimals.map((animal, index) => {
                  //slice(startPageIndex, startPageIndex + itemsPerPage);

                  return index > startPageIndex && index < startPageIndex + itemsPerPage ? (
                    <tr key={index}>
                      <td>
                        {" "}
                        <img src={require(`../../img/tableImg/${animal.name}.jpg`).default} alt={animal.name} />{" "}
                      </td>
                      <td>{animal.name}</td>
                      <td>{animal.species}</td>
                      <td>{animal.hairdo}</td>
                      <td>
                        <button className="icon_btn" aria-label="toggle liking animal">
                          <i
                            className={`fa fa-heart liked_icon ${animal.isLiked ? "liked" : ""}`}
                            onClick={() => toggleLike(animal)}
                            title="like"
                            aria-hidden="true"
                          />
                        </button>
                      </td>
                    </tr>
                  ) : (
                    <tr key={index}></tr>
                  );
                })}
            </tbody>
          </table>
          <div className="pagination">
            {startPageIndex !== 0 && (
              <button className="icon_btn" onClick={prevPage} aria-label="previous page">
                <i className="fas fa-angle-double-left" aria-hidden="true"></i>
                &nbsp; Previous
              </button>
            )}
            {animals && startPageIndex < animals.length - itemsPerPage && (
              <button className="icon_btn" onClick={nextPage} aria-label="next page">
                Next &nbsp;
                <i className="fas fa-angle-double-right" aria-hidden="true"></i>
              </button>
            )}
          </div>
        </section>
      </div>
      <div className="col-12 col-md-6">
        {/* <div className="col-12 col-md-4 col-lg-12 col-xl-5"> */}
        <TablesTestInfo />
        <TablesWhatToTest />
        {/* <TablesVideos /> */}
      </div>
    </div>
  );
};

export default Table;

//without {} and return
// const checkedItemNames = myFilter
//   .filter((item) => item.isChecked)
//   .map((item) => item.name);

//reduce
// const checkedItemNames = myFilter.reduce(
//   (result, { name, isChecked }) => [
//     ...result,
//     ...(isChecked ? [name] : []),
//   ],
//   []
// );
