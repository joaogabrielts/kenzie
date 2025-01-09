import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addCommentThunk } from "../../store/modules/user/thunks";

const AddComment = () => {
  const dispatch = useDispatch();

  // Estado local para capturar o valor do input
  const [comment, setComment] = useState("");
  const user = useSelector((state) => state.user);

  return (
    <div>
        <h1>Kenzie</h1>
      <ul>
        {user.comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
      {/* Input para capturar o valor */}
      <input
        type="text"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      {/* Botão que dispara o dispatch */}
      <button onClick={() => dispatch(addCommentThunk(comment))}>
        New Comment
      </button>
    </div>
  );
};

export default AddComment;

/*
import { useState } from "react";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../store/modules/user/actions";

export const Card = () => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const name = useSelector((state) => state.user);


  const handleClick = () => {
    dispatch(addComment(newName));
    setNewName("");
  };
  return (
    <>
      <h1>Kenzie</h1>
      <p>{name}</p>
      <input onChange={(e) => setNewName(e.target.value)} />
      <button onClick={() => dispatch(addCommentThunk("Primeiro comentário!"))}>
        new comment
      </button>
    </>
  );
};
/* 

*/
