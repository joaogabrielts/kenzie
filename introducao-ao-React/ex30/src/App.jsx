import { useState } from "react"


function App() {
  // consegue armazenar na memoria qualquer tipo de valor

  /*
    const [count, setCount] = useState(0)
  
    const addCount = () => {
      setCount(count + 1)
    }
  
    const removeCount = () => {
      if(count > 0){
        setCount(count - 1)
        console.log(count);
        
      }
     
    }
       <h1>{count}</h1>
        <button onClick={addCount}>+1</button>
        <button onClick={removeCount}>-1</button>
  */
  const [nameList, setNameList] = useState(['alex', 'vilson'])
  const addName = () => {
    setNameList([...nameList, 'Gabriel'])


  }

  return (
    <>
      <ul>
        {nameList.map(name => <li key={name}>{name}</li>)}
      </ul>
      <button onClick={addName }>Adicionar nome</button>

    </>
  )
}

export default App
