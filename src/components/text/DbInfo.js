const usersUrl = "http://localhost:9000/users/";
const catsUrl = "http://localhost:9000/cats";
const todosUrl = "http://localhost:9000/todos/";

export const UsersDb = () => {
  return (
    <section className="db_info_section">
      <h6>JSON Server url: </h6>
      <a href={usersUrl} target="_blank" rel="noreferrer">
        {usersUrl}
      </a>
    </section>
  );
};
export const TodosDb = () => {
  return (
    <section className="db_info_section">
      <h6>JSON Server url: </h6>
      <a href={todosUrl} target="_blank" rel="noreferrer">
        {todosUrl}
      </a>
    </section>
  );
};
export const CatsDb = () => {
  return (
    <section className="db_info_section">
      <h6>JSON Server url: </h6>
      <a href={catsUrl} target="_blank" rel="noreferrer">
        {catsUrl}
      </a>
    </section>
  );
};
