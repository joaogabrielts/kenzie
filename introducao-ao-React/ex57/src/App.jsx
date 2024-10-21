import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
  const [fruitList, setFruitList] = useState([]);

  useEffect(() => {
    const getFruits = async () => {
      //const response = await fetch("https://fruit-fake-api.onrender.com/fruits");

      const {data} = await api.get("fruits");
      console.log(data);
      
      //const json = await response.json();
      setFruitList(data);
    };
    getFruits();
  },[]);
  return (
    <div>
      <ul>
        {fruitList.map((fruit) => (
          <li key={fruit.id}>
            <h2>{fruit.name}</h2>
            <p>{fruit.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
