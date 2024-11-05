import { useEffect, useState } from "react"
import { useFruitDataStore } from "./stores/useFruitDataStore"

function App() {
  const [loading,setLoading] = useState(false)
  console.log(loading);
  
  const {loadFruitData,fruitData,error} = useFruitDataStore((store) => store)
 useEffect(() => {
  loadFruitData(setLoading, () => console.log('Executei uma função callback'));
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
