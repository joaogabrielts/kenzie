import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [fruitList, setFruitList] = useState([]);

  useEffect(() => {
    const getFruits = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("fruits", {
          params: {
            category: category !== "" ? category : undefined,
          },
        });
        setFruitList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getFruits();
  }, [category]);
  return (
    <div>
      <ul>
        <li onClick={() => setCategory("")}>
          <button>Todos</button>{" "}
        </li>
        <li onClick={() => setCategory("vermelha")}>
          <button>Vermelhas</button>{" "}
        </li>
        <li onClick={() => setCategory("amarela")}>
          <button>Amarela</button>
        </li>
      </ul>
      <ul>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ul>
            {fruitList.map((fruit) => (
              <li key={fruit.id}>
                <h2>{fruit.name}</h2>
                <p>{fruit.price}</p>
              </li>
            ))}
          </ul>
        )}
      </ul>
    </div>
  );
}

export default App;
