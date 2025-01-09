import { useContext } from "react";
import { FruitListContext } from "./providers/FruitListContext";
import { FruitList } from "./components/FruitList";
import { ShoppingCart } from "./components/ShoppingCart";

function App() {
  const { currentFruit, setCurrentFruit } = useContext(FruitListContext);

  return (
    <div>
      {currentFruit ? (
        <div>
          <button onClick={() => setCurrentFruit(null)}>Fechar</button>
          <h2>{currentFruit.name}</h2>
          <p>{currentFruit.category}</p>
          <p>{currentFruit.price}</p>
        </div>
      ) : null}
      <ShoppingCart />

      <FruitList />
    </div>
  );
}

export default App;
