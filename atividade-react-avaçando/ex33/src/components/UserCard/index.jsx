import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import { useState } from "react";

const UserCard = () => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const name = useSelector((state) => state.user.name);

  const handleClick = () => {
    dispatch(changeName(newName));
    setNewName("");
  };

  return (
    <div>
      <h2>User name:{name || "Kenzie"} </h2>

      <input onChange={(e) => setNewName(e.target.value)} />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UserCard;
