import { useState, useEffect } from "react";
import "./form.scss";
import { FormValidationVideos } from "../text/videos/VideoSections";

import { FormValidationIntro } from "../text/Intros";
import { FormValidationTestInfo } from "../text/TestInfos";
import { addData } from "../fetchFunctions/fetchFunctions";
import { getData } from "../fetchFunctions/fetchFunctions";

function FormValidation() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [saveMessage, setSaveMessage] = useState(false);
  const [printForm, setPrintForm] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const usersUrl = "http://localhost:9000/users/";

  const getUsers = async () => {
    console.log("hej");
    const usersFromServer = await getData(usersUrl);
    //setting Gui state
    setUsers(usersFromServer.reverse());
    if (usersFromServer) {
      setError(null);
    } else {
      setError("Ooops!! Could not fetch data...");
    }
    setPrintForm(true);
    setSaveMessage(false);
  };

  const handleChange = (e) => {
    //console.log("hej", e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //hantera fel i formuläret
  const validate = (data) => {
    let status = 0;
    if (data.password.length < 6) {
      return [status, "Password needs to be al least 6 characters."];
    } else {
      return [1, "ok"];
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
    };
    let [status, message] = validate(newUser);
    //om det finns fel
    if (status !== 1) {
      setError(message);
      return;
    }
    setError(null);
    const addUserToServer = await addData(usersUrl, newUser);
    //hantera fel i datahämtning
    if (!addUserToServer) {
      setError("Ooops!! Could not add data...");
      return;
    }
    setSaveMessage(true);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
    setPrintForm(false);
  };
  useEffect(() => {
    console.log("users", users);
  }, [users]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <section className="form_section">
          <FormValidationIntro />
          {error && <div className="error">{error}</div>}
          <form className="list_form" onSubmit={handleSubmit}>
            <label htmlFor="name">First name: </label>
            <input
              type="text"
              name="firstname"
              required
              value={formData.firstname}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="name">Last name: </label>
            <input
              type="text"
              name="lastname"
              required
              value={formData.lastname}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="name">Email: </label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="name">Password: </label>
            <input
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
            <section className="btn_section">
              <input type="submit" value="Save to db" className="formBtn add" />
              <h6 className={`save_message ${saveMessage ? "show" : ""}`}>
                Data saved to DB
              </h6>
            </section>
          </form>
          <section className="get_from_db">
            {!printForm && (
              <input
                type="button"
                value="Show users in db"
                className="formBtn orange"
                onClick={getUsers}
              />
            )}
            {printForm && (
              <input
                type="button"
                value="Hide users in db"
                className="formBtn orange"
                onClick={() => {
                  setPrintForm(false);
                }}
              />
            )}
          </section>

          {users && (
            <article className={`print_form ${printForm ? "show" : ""}`}>
              {/* <div className="collection">
                {users.map((user) => {
                  return (
                    <div className="collection-item" key={user.id}>
                      <p>
                        {user.firstname} {user.lastname}
                      </p>
                      <p>{user.email}</p>
                    </div>
                  );
                })}
              </div> */}
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>
                          {user.firstname} {user.lastname}
                        </td>
                        <td>{user.email}</td>
                        <td className="delIconBtn ">x</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </article>
          )}
        </section>
      </div>
      <div className="col-12 col-md-5">
        <FormValidationTestInfo />
        <FormValidationVideos />
      </div>
    </div>
  );
}

export default FormValidation;
