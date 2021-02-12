import { useState, useEffect } from "react";

import "./form.scss";
import ReactPlayer from "react-player/lazy";
import { FormValidationIntro } from "../text/Intros";
import { FormValidationTestInfo } from "../text/TestInfos";
import { addData } from "../fetchFunctions/fetchFunctions";
import { getData } from "../fetchFunctions/fetchFunctions";

function FormValidation() {
  const [error, setError] = useState(null);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
    };

    let [status, message] = validate(newUser);
    if (status === 1) {
      const addUserToServer = await addData(usersUrl, newUser);
      return addUserToServer;
    } else {
      setError(message);
      return;
    }
    // if (addUserToServer) {
    //   console.log("addUserToServer", addUserToServer);
    // } else {
    //   setError("Ooops!! Could not add data...");
    // }
    // return addUserToServer;
  };
  const validate = (data) => {
    let status = 0;
    if (data.password.length < 6) {
      return [status, "Password needs to be al least 6 characters."];
    } else if (data.username.length < 4) {
      return [status, "Username needs to be al least 4 characters."];
    }
    return [1, "ok"];
  };

  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="form-section">
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
          <FormValidationTestInfo />
        </div>
      </div>
      <div className="col-12 col-md-5">
        <div className="video_secttion">
          <ReactPlayer
            controls
            url="https://www.youtube.com/embed/6L6CLCKSf1s"
            width="280px"
            height="180px"
          />
          <ReactPlayer
            controls
            url="https://www.youtube.com/embed/1blw4gEsr9M"
            width="280px"
            height="180px"
          />
          <ReactPlayer
            controls
            url="https://www.youtube.com/embed/xBMvng8KDx0"
            width="280px"
            height="180px"
          />
          <ReactPlayer
            controls
            url="https://www.youtube.com/embed/6fp2SNvSE-g"
            width="280px"
            height="180px"
          />
          <ReactPlayer
            controls
            url="https://www.youtube.com/embed/l3pFnkSVrMs"
            width="280px"
            height="180px"
          />
        </div>
      </div>
    </div>
  );
}

export default FormValidation;
