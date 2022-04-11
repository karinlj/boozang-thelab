const Form = ({ handleChange, formData, saveMessage, handleSubmit }) => {
  return (
    <form className="list_form" onSubmit={handleSubmit}>
      <label htmlFor="name">First name: </label>
      <input type="text" name="firstname" required value={formData.firstname} onChange={(e) => handleChange(e)} />
      <label htmlFor="name">Last name: </label>
      <input type="text" name="lastname" required value={formData.lastname} onChange={(e) => handleChange(e)} />
      <label htmlFor="name">Email: </label>
      <input name="email" type="email" required value={formData.email} onChange={(e) => handleChange(e)} />
      <label htmlFor="name">Password: </label>
      <input name="password" type="password" required value={formData.password} onChange={(e) => handleChange(e)} />
      <section className="btn_section">
        <input type="submit" value="Save to db" className="form_btn add" />
        <h6 className={`save_message ${saveMessage ? "show" : ""}`}>Data saved to DB</h6>
      </section>
    </form>
  );
};

export default Form;
