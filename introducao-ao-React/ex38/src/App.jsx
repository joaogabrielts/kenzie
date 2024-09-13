import { useState } from "react"
import { Example } from "./components/Example"
import "./style.css";


function App() {
  const [isActive, setIsActive] = useState(false)

  return (

    <div>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Desativar" : "Ativar"}
      </button>
      <Example isActive={isActive}/>
      <div className={isActive ? "active" : ""}>
        Exemplo
      </div>
    </div>

  )
}

export default App
