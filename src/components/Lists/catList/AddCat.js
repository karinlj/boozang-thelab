import { useState, useEffect } from "react";
import { addData } from "../../fetchFunctions/fetchFunctions";

const AddCat = ({ addCat }) => {
  const [name, setName] = useState("");
  const [instruction, setInstruction] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const catsUrl = "http://localhost:9000/cats/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const cat = { name: name, instruction: instruction };
    setIsLoading(true);
    setTimeout(async () => {
      const data = await addData(catsUrl, cat);
      //   console.log("cat", cat);
      addCat(data);
      setIsLoading(false);
      //reset
      setName("");
      setInstruction("");
    }, 1000);
  };

  useEffect(() => {
    console.log("name", name);
  }, [name]);
  return (
    <div>
      <form className="add-todo-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="instruction" className="instruction">
          Feeding instructions:{" "}
        </label>
        <textarea
          type="text"
          name="instruction"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
        ></textarea>
        <div className="text-center addTodo">
          {isLoading && (
            <button className="addBtn adding">Adding Cat...</button>
          )}
          {!isLoading && (
            <button className="addBtn" title="Add">
              Add Cat
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddCat;
