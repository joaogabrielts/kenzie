import { useEffect, useState } from "react"


function App() {
  const [fruitList, setFruitList] = useState([])
  
  useEffect(() => {
    const getFruits = async () => {
      const response = await fetch("https://fruit-fake-api.onrender.com/fruits");
      const json = await response.json();
      setFruitList(json)
    };
    getFruits()    
  },[])


  return (
    <>
    <ul>
      
      {fruitList.map(list => (
        <li key={list.id}>
       <h1>{list.name}</h1>
       <h2>{list.price}</h2>
        </li>
      ))}
    </ul>

    </>
  )
}

export default App
