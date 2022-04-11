const usersUrl = "http://localhost:9000/users/";
const catsUrl = "http://localhost:9000/cats";
const todosUrl = "http://localhost:9000/todos/";

export const UsersDb = () => {
  return (
    <section className="db_info_box">
      <h3 className="db_url">JSON Server url: </h3>
      <a href={usersUrl} target="_blank" rel="noreferrer" aria-label="Url to users database">
        {usersUrl}
      </a>
    </section>
  );
};
export const TodosDb = () => {
  return (
    <section className="db_info_box">
      <h3 className="db_url">JSON Server url: </h3>
      <a href={todosUrl} target="_blank" rel="noreferrer" aria-label="Url to todos database">
        {todosUrl}
      </a>
    </section>
  );
};
export const CatsDb = () => {
  return (
    <section className="db_info_box">
      <h3 className="db_url">JSON Server url: </h3>
      <a href={catsUrl} target="_blank" rel="noreferrer" aria-label="Url to cats database">
        {catsUrl}
      </a>
    </section>
  );
};
