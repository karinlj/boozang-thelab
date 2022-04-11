const PrintForm = ({ printForm, users, deleteUser }) => {
  return (
    <article className={`print_form ${printForm ? "show" : ""}`}>
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
                <td
                  className="delete_icon"
                  title="Delete"
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  x
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
};

export default PrintForm;
