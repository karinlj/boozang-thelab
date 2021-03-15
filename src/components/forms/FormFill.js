import { useState, useEffect } from "react";
import "./form.scss";
import { FormFillVideos } from "../text/videos/VideoSections";
import { FormFillIntro } from "../text/Intros";
import { FormFillTestInfo } from "../text/TestInfos";
import { addData } from "../fetchFunctions/fetchFunctions";
import { getData } from "../fetchFunctions/fetchFunctions";
import { deleteData } from "../fetchFunctions/fetchFunctions";
import Form from "./Form";
import PrintForm from "./PrintForm";
import { UsersDb } from "../text/DbInfo";

function FormFill() {
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
  const deleteUser = async (id) => {
    await deleteData(usersUrl, id);
    setUsers(
      users.filter((user) => {
        return user.id !== id;
      })
    );
  };
  useEffect(() => {
    //console.log("users", users);
  }, [users]);
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-xl-5">
        <section className="form_section">
          <FormFillIntro />
          {error && <div className="error">{error}</div>}
          <Form
            formData={formData}
            handleChange={handleChange}
            saveMessage={saveMessage}
            handleSubmit={handleSubmit}
          />

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
            <PrintForm
              printForm={printForm}
              users={users}
              deleteUser={deleteUser}
            />
          )}
        </section>
      </div>
      <div className="col-12 col-md-5">
        <FormFillTestInfo />
        <UsersDb />
        <FormFillVideos />
      </div>
    </div>
  );
}
export default FormFill;
