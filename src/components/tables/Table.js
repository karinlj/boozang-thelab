import { useState, useEffect } from "react";
import "./tables.scss";
//import { TablesVideos } from "../text/videos/VideoSections";
import { TablesIntro } from "../text/Intros";
import { TablesTestInfo } from "../text/TestInfos";
//import { Link } from "react-router-dom";

const Table = () => {
  const handleChange = () => {};
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-8 col-lg-12 col-xl-5">
        <section className="tables_section">
          <TablesIntro />

          <div className="filter_options">
            {/* looping through filters from 'big' component */}

            <label className="option" htmlFor="react" key="">
              Lions
              <input
                type="checkbox"
                id=""
                name=""
                checked="checked"
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
            <label className="option" htmlFor="react" key="">
              Zebras
              <input
                type="checkbox"
                id=""
                name=""
                checked="checked"
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
            <label className="option" htmlFor="react" key="">
              Elephants
              <input
                type="checkbox"
                id=""
                name=""
                checked="checked"
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>

            {/* {filter.map((item, index) => {
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
            })} */}
          </div>

          <table id="animalTable" className="table">
            <thead>
              <tr>
                <th></th>
                <th>name</th>
                <th>species</th>
                <th>hairdo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>image</td>
                <td>Simba</td>
                <td>Lion</td>
                <td>Mohawk</td>
                <td>Like</td>
              </tr>
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
