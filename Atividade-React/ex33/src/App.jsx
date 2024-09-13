import { useState } from "react";
import { ListaDeFrutas } from "./fragments/lista/index.jsx";

function App() {

  const initialValue = [
    {
      name: "Morango",
      price: 15,
      category: "Frutas",
    },
    {
      name: "Uva",
      price: 23,
      category: "Frutas",
    },
    {
      name: "Banana",
      price: 23,
      category: "Frutas",
    },
    {
      name: "Beterraba",
      price: 5,
      category: "Legumes",
    },
  ];

  const [fruitList, setFruitList] = useState(initialValue)

  const totalValue = fruitList.reduce((preco, precoFinal) => {
    return preco + precoFinal.price
  }, 0)
  const filtroCategory = fruitList.filter(lista =>
    lista.category.toLowerCase() === 'Legumes'.toLowerCase()
  )
  console.log(filtroCategory);

  const filtroFrutas = fruitList.filter(lista =>
    lista.category.toLowerCase() === 'frutas'.toLowerCase()
  )
  console.log(filtroFrutas);

  const addFruta = () => {
    setFruitList([...fruitList, { name: 'maça', price: 6, category: 'Frutas' }])
  }

  return (

    <div>

      <h1>{totalValue}</h1>
      <ul>
        <ListaDeFrutas props={fruitList} />
      </ul>
      <button onClick={addFruta}>Adicionar Fruta</button>


    </div>



  )
}

export default App
