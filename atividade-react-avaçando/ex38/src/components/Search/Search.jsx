import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {
    if (input.trim()) {
      dispatch(addDigimonsThunk(input, setError));
      setInput("");
    } else {
      setError("Por favor, digite o nome do Digimon!");
    }
  };

  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite o nome do Digimon"
      />
      <button onClick={handleSearch}>Pesquisar</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Search;
