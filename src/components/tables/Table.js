import { useState, useEffect } from "react";
import "./tables.scss";
//import { TablesVideos } from "../text/videos/VideoSections";
import { TablesIntro } from "../text/Intros";
import { TablesTestInfo } from "../text/TestInfos";
//import { intersection } from "../../HelpFunctions";

const Table = () => {
  const animals = [
    { id: 1, name: "Arthur", species: "zebra", isLiked: false },
    { id: 2, name: "Oscar", species: "lion", isLiked: true },
    { id: 3, name: "Trudy", species: "elephant", isLiked: true },
    { id: 4, name: "Miles", species: "zebra", isLiked: true },
    { id: 5, name: "Millie", species: "lion", isLiked: true },
    { id: 6, name: "Theo", species: "zebra", isLiked: true },
    { id: 7, name: "Dandy", species: "elephant", isLiked: true },
    { id: 8, name: "Sally", species: "zebra", isLiked: true },
    { id: 9, name: "Ruby", species: "elephant", isLiked: true },
    { id: 10, name: "Charlie", species: "lion", isLiked: true },
  ];
  const [myFilter, setMyFilter] = useState([
    { id: 1, species: "lion", isChecked: true },
    { id: 2, species: "elephant", isChecked: true },
    { id: 3, species: "zebra", isChecked: true },
  ]);
  const [checkedAnimalSpecies, setCheckedAnimalSpecies] = useState([]);

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
    animal.isLiked = !animal.isLiked;
    console.log("animal: ", animal);
    console.log("isLiked: ", animal.isLiked);
  };
  useEffect(() => {
    //names of checked items
    const checkedItemSpecies = myFilter
      .filter((item) => {
        return item.isChecked;
      })
      .map((item) => {
        return item.species;
      });
    setCheckedAnimalSpecies(checkedItemSpecies);
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

    // console.log("animals", animals);
    // console.log("checkedAnimalSpecies", checkedAnimalSpecies);
  }, [myFilter]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-8 col-lg-12 col-xl-5">
        <section className="tables_section">
          <TablesIntro />

          <div className="filter_options">
            {/* looping through myFilters from 'big' component */}
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
              {animals.map((animal, index) => {
                return checkedAnimalSpecies.includes(animal.species) ? (
                  <tr key={index}>
                    <td>
                      <img
                        src={
                          require(`../../img/tableImg/${animal.name}.jpg`)
                            .default
                        }
                        alt={animal}
                      />
                    </td>
                    <td>{animal.name}</td>
                    <td>{animal.species}</td>
                    <td>Mohawk</td>
                    <td>
                      <i
                        className={`fa fa-heart ${animal.isLiked ? "red" : ""}`}
                        onClick={() => toggleLike(animal)}
                      />

                      {/* <div className={`btn-group pull-right ${this.props.showBulkActions ? 'shown' : 'hidden'}`}> */}
                    </td>
                  </tr>
                ) : (
                  <tr key={index}></tr>
                );
              })}
            </tbody>
          </table>
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
