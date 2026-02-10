const usersUrl = "http://api.boozang.com/users/";
const catsUrl = "http://api.boozang.com/cats";
const todosUrl = "http://api.boozang.com/todos/";

export const UsersDb = () => {
  return (
    <section className="db_info_box">
      <h3 className="db_url">JSON Server url: </h3>
      <a href={usersUrl} target="_blank" rel="noreferrer" aria-label="Users database opens in new window">
        {usersUrl}
      </a>
    </section>
  );
};
export const TodosDb = () => {
  return (
    <section className="db_info_box">
      <h3 className="db_url">JSON Server url: </h3>
      <a href={todosUrl} target="_blank" rel="noreferrer" aria-label="Todos database opens in new window">
        {todosUrl}
      </a>
    </section>
  );
};
export const CatsDb = () => {
  return (
    <section className="db_info_box">
      <h3 className="db_url">JSON Server url: </h3>
      <a href={catsUrl} target="_blank" rel="noreferrer" aria-label="Cats database opens in new window">
        {catsUrl}
      </a>
    </section>
  );
};
