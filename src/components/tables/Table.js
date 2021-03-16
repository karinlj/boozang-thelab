import { useState, useEffect } from "react";
import "./tables.scss";
//import { TablesVideos } from "../text/videos/VideoSections";
import { TablesIntro } from "../text/Intros";
import { TablesTestInfo } from "../text/TestInfos";
//import { intersection } from "../../HelpFunctions";

const Table = () => {
  const [animals, setAnimals] = useState([
    {
      id: 1,
      name: "Arthur",
      species: "zebra",
      hairdo: "mohawk",
      isLiked: false,
    },
    { id: 2, name: "Oscar", species: "lion", hairdo: "mohawk", isLiked: false },
    {
      id: 3,
      name: "Trudy",
      species: "elephant",
      hairdo: "bald",
      isLiked: true,
    },
    { id: 4, name: "Miles", species: "zebra", hairdo: "mohawk", isLiked: true },
    { id: 5, name: "Millie", species: "lion", hairdo: "short", isLiked: true },
    { id: 6, name: "Theo", species: "zebra", hairdo: "mohawk", isLiked: true },
    {
      id: 7,
      name: "Dandy",
      species: "elephant",
      hairdo: "bald",
      isLiked: true,
    },
    { id: 8, name: "Sally", species: "zebra", hairdo: "mohawk", isLiked: true },
    { id: 9, name: "Ruby", species: "elephant", hairdo: "bald", isLiked: true },
    {
      id: 10,
      name: "Charlie",
      species: "lion",
      hairdo: "short",
      isLiked: true,
    },
  ]);
  const [myFilter, setMyFilter] = useState([
    { id: 1, species: "lion", isChecked: true },
    { id: 2, species: "elephant", isChecked: true },
    { id: 3, species: "zebra", isChecked: true },
  ]);
  //set to all from start
  const [filteredAnimals, setFilteredAnimals] = useState(animals);
  const [startPageIndex, setStartPageIndex] = useState(0);
  const itemsPerPage = 4;

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
    console.log("startPageIndex", startPageIndex);
  }, [startPageIndex]);

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
    setFilteredAnimals(temp);

    //console.log("filteredAnimals", filteredAnimals);
  }, [myFilter, animals]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-8 col-lg-12 col-xl-6">
        <section className="tables_section">
          <TablesIntro />

          <div className="filter_options">
            {myFilter.map((item, index) => {
              return (
                <label className="option" htmlFor="react" key={index}>
                  {item.species}s
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.species}
                    checked={item.isChecked}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                </label>
              );
            })}
          </div>
          <table id="animalTable" className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Species</th>
                <th>Hairdo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredAnimals &&
                filteredAnimals.map((animal, index) => {
                  if (index < itemsPerPage) {
                    return (
                      <tr key={index}>
                        <td>
                          {" "}
                          <img src={require(`../../img/tableImg/${animal.name}.jpg`).default} alt={animal} />{" "}
                        </td>
                        <td>{animal.name}</td>
                        <td>{animal.species}</td>
                        <td>{animal.hairdo}</td>
                        <td>
                          <i
                            className={`fa fa-heart ${animal.isLiked ? "red" : ""}`}
                            onClick={() => toggleLike(animal)}
                            title="like"
                          />
                        </td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </table>

          <div className="pagination">
            {startPageIndex > 0 && (
              <button onClick={prevPage}>
                <i className="fas fa-angle-double-left"></i>
                &nbsp; Previous
              </button>
            )}

            {startPageIndex < animals.length && (
              <button onClick={nextPage}>
                Next &nbsp;
                <i className="fas fa-angle-double-right"></i>
              </button>
            )}
          </div>
        </section>
      </div>
      <div className="col-12 col-md-4 col-lg-12 col-xl-5">
        <TablesTestInfo />
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
