import { useState } from "react"
import { Card } from "./component/UserCard"


function App() {
  const [isLogin, isCard] = useState(false)
  return (
    <>
    <Card name="Gabriel" email="gabriel@gmail.com" status={true}/>
    <Card name="Davi" email="Davi@gmail.com" status={false}/>
    <Card name="Juliana" email="Juliana@gmail.com" status={true}/>
    </>
  ) 
}

export default App
