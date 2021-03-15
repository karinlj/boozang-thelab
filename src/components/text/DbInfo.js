import { Link } from "react-router-dom";

const usersUrl = "http://localhost:9000/users/";
const catsUrl = "http://localhost:9000/cats";
const todosUrl = "http://localhost:9000/todos/";

export const UsersDb = () => {
  return (
    <section className="db_info_section">
      <h6>Database url: </h6>
      {/* <Link to={usersUrl} target="_blank">
        {usersUrl}
      </Link> */}
      <p>{usersUrl}</p>
    </section>
  );
};
export const TodosDb = () => {
  return (
    <section className="db_info_section">
      <h6>Database url: </h6>
      <p>{todosUrl}</p>
    </section>
  );
};
export const CatsDb = () => {
  return (
    <section className="db_info_section">
      <h6>Database url: </h6>
      <p>{catsUrl}</p>
    </section>
  );
};
// const DbInfo = (props) => {
//   const { children } = props;
//   return (
//     <section className="db_info_section">
//       <h6>Database url: </h6>

//       {/* <Link to={usersUrl} target="_blank">
//         {usersUrl}
//       </Link> */}
//       <p>{children}</p>
//     </section>
//   );
// };
// export default DbInfo;
