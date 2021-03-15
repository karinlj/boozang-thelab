import { Link } from "react-router-dom";

const usersUrl = "http://localhost:9000/users/";
const catsUrl = "http://localhost:9000/cats";
const todosUrl = "http://localhost:9000/todos/";

export const UsersDb = () => {
  return (
    <section className="db_info_section">
      <h6>JSON Server url: </h6>
      <a href={usersUrl} target="_blank">
        {usersUrl}
      </a>
    </section>
  );
};
export const TodosDb = () => {
  return (
    <section className="db_info_section">
      <h6>JSON Server url: </h6>
      <a href={todosUrl} target="_blank">
        {todosUrl}
      </a>
    </section>
  );
};
export const CatsDb = () => {
  return (
    <section className="db_info_section">
      <h6>JSON Server url: </h6>
      <a href={catsUrl} target="_blank">
        {catsUrl}
      </a>
    </section>
  );
};
