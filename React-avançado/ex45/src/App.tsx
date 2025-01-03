import { Cook } from ".";


function App() {
 
  const comida = Cook("feijão")
console.log(Cook("arroz"));

  return (
    <>
   <h1>{comida}</h1>
    </>
  )
}

export default App
