import { FruitCard } from "./components/FruitCard";
import { useFruitStore } from "./stores/useFruitStore";
import React from "react";

function App() {
  const fruitList = useFruitStore((store) => store.fruitList);
  const addFruit = useFruitStore((store) => store.addFruit);

  return (
    <div className="App">
      <button onClick={() => addFruit({ id: 1, name: 'Morango' })}>
        Adicionar morango
      </button>
      <button onClick={() => addFruit({ id: 2, name: 'Banana' })}>
        Adicionar banana
      </button>

      {fruitList.map(fruit => (
        <FruitCard key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
}

export default App;
