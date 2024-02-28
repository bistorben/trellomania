import axios from "axios";
import "./CreateBoard.css";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

const CreateBoard = () => {
  const [title, setTitle] = useState("");
  const { authUser } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const boardData = { title, userId: authUser.sub };
    try {
      const response = await axios.post(
        "http://localhost:3000/board",
        boardData
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  return (
    <section className="CreateBoard">
      <h1>Create Board</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={titleHandler}
          value={title}
        />
        <button>submit</button>
      </form>
    </section>
  );
};

export default CreateBoard;
