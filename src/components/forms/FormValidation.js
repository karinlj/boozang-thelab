import { useState, useEffect } from "react";
import "./form.scss";
import { FormValidationVideos } from "../text/videos/VideoSections";

import { FormValidationIntro } from "../text/Intros";
import { FormValidationTestInfo } from "../text/TestInfos";
import { addData } from "../fetchFunctions/fetchFunctions";
//import { getData } from "../fetchFunctions/fetchFunctions";

function FormValidation() {
  const [error, setError] = useState(null);
  const [printForm, setPrintForm] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });
  const usersUrl = "http://localhost:9000/users/";

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
    if (data.username.length < 4) {
      return [status, "Username needs to be al least 4 characters."];
    } else if (data.password.length < 6) {
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
    setPrintForm(true);
  };
  useEffect(() => {
    //console.log("formData", formData);
  }, [formData]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <section className="form_section">
          <FormValidationIntro />
          {error && <div className="error">{error}</div>}
          <form className="list_form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
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
            <label htmlFor="name">User name: </label>
            <input
              name="username"
              type="text"
              required
              value={formData.username}
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
              <div className="text-center">
                <input type="submit" value="Save" className="formBtn add" />
              </div>
            </section>
          </form>

          {printForm && (
            <article className="print_form show">
              <div className="card">
                <div className="card-body">
                  <ul>
                    <li>
                      <strong>Name: &nbsp;</strong>
                      {formData.firstname}
                    </li>
                    <li>
                      <strong>Lastname: &nbsp;</strong>
                      {formData.lastname}
                    </li>
                    <li>
                      <strong>Username: &nbsp;</strong>
                      {formData.username}
                    </li>
                    <li>
                      <strong>Email: &nbsp;</strong>
                      {formData.email}
                    </li>
                    <li>
                      <strong>Password: &nbsp;</strong>
                      {formData.password}
                    </li>
                  </ul>
                </div>
              </div>
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
