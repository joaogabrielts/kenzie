import React from "react";
// Importar o useSelector do react-redux
import { useSelector } from "react-redux";

const FruitsPage = () => {
  // Selecionar os dados do estado global (store)
  const fruits = useSelector((state) => state.fruits);

  return (
    <div>
      <h1>Lista de Frutas</h1>
      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  );
};

export default FruitsPage;
