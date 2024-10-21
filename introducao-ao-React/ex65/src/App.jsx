import { useState } from "react"
import { Modal } from "./components/Modal"

function App() {
 const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
      {isOpen ? <Modal setIsOpen={setIsOpen}><h1>exemplo</h1></Modal> : null}
    </div> 
  )
}

export default App
