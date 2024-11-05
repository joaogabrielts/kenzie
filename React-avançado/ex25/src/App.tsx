import { useEffect } from "react"
import { useFruitDataStore } from "./stores/useFruitDataStore"

function App() {
  const {loading,loadFruitData,fruitData,error} = useFruitDataStore((store) => store)
 useEffect(() => {
  loadFruitData();
 }, [])
  return (
    <>
    {loading ? <p>Carregando...</p> : (
      <ul>
        {fruitData.map(fruit => (
          <li key={fruit.id}>
            {fruit.name}
          </li>
        ))}
      </ul>
    )}
    {error ? <p>{error}</p> : null}
    </>
  )
}

export default App
