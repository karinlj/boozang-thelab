const Form = ({ handleChange, formData, saveMessage, handleSubmit }) => {
  return (
    <form className="list_form" onSubmit={handleSubmit}>
      <label>
        First name:
        <input type="text" name="firstname" required value={formData.firstname} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        Last name:
        <input type="text" name="lastname" required value={formData.lastname} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        Email:
        <input name="email" type="email" required value={formData.email} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        Password:
        <input name="password" type="password" required value={formData.password} onChange={(e) => handleChange(e)} />
      </label>

      <section className="btn_section">
        <button className="form_btn add">Save to db</button>
        <p className={`save_message ${saveMessage ? "show" : ""}`}>Data saved to DB</p>
      </section>
    </form>
  );
};

export default Form;
