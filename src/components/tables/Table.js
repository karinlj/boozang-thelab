import { useState, useEffect } from "react";
import "./tables.scss";
//import { TablesVideos } from "../text/videos/VideoSections";
import { TablesIntro } from "../text/Intros";
import { TablesTestInfo } from "../text/TestInfos";
//import { Link } from "react-router-dom";

const Table = () => {
  const [filter, setFilter] = useState([
    { id: 1, name: "lion", isChecked: true },
    { id: 2, name: "elephant", isChecked: true },
    { id: 3, name: "zebra", isChecked: false },
  ]);

  const animals = [
    { name: "Oscar", species: "lion" },
    { name: "Trudy", species: "elephant" },
    { name: "Miles", species: "zebra" },
    { name: "Theo", species: "lion" },
  ];

  const handleChange = (event) => {
    console.log("event.currentTarget", event.currentTarget);
    console.log("handleChange_checked", event.target.checked);
    console.log("handleChange_id", event.target.id);
    let updatedFilter = [...filter];
    //sets chosen input to checked/unchecked
    updatedFilter.map((item) => {
      if ("" + item.id === event.target.id) {
        item.isChecked = event.target.checked;
      }
      return item;
    });
    //set state
    setFilter(updatedFilter);
  };

  useEffect(() => {
    console.log("filter", filter);
  }, [filter]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-8 col-lg-12 col-xl-5">
        <section className="tables_section">
          <TablesIntro />

          <div className="filter_options">
            {/* looping through filters from 'big' component */}
            {filter.map((item, index) => {
              return (
                <label className="option" htmlFor="react" key={index}>
                  {item.name}
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.name}
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
                return (
                  <tr key={index}>
                    <td>image</td>
                    <td>{animal.name}</td>
                    <td>{animal.species}</td>
                    <td>Mohawk</td>
                    <td>Like</td>
                  </tr>
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
