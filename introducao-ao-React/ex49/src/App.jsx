import { useState } from "react"
import { Modal } from "./components/Modal"

function App() {

  
const [isOpen, setOpen] = useState(false)
  
  return (
    <>
      <button onClick={() => setOpen(!isOpen)}>button</button>
      {isOpen ? <Modal/> : null}
    </>
  )
}

export default App
