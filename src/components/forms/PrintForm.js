const PrintForm = ({ printForm, users, deleteUser }) => {
  return (
    <section className={`print_form ${printForm ? "show" : ""}`}>
      <table className="table">
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
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                    className="delete_btn"
                    title="Delete"
                    aria-label="Delete person from db"
                  >
                    x
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default PrintForm;
