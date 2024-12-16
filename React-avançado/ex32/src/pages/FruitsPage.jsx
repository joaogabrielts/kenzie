// Importar o useSelector do react-redux
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFruit } from "../store/modules/fruits/actions";

const FruitsPage = () => {
  // Selecionar os dados do estado global (store)
  const fruits = useSelector((state) => state.fruits);
  const [fruit, setFruit] = useState("");
  const dispatch = useDispatch();

  const handleAddFruit = () => dispatch(addFruit(fruit));
  return (
    <div>
      <input onChange={(e) => setFruit(e.target.value) } />
      <button onClick={handleAddFruit}>Adicionar fruta</button>
      <h1>Lista de Frutas</h1>
      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  );
};

export default FruitsPage;
