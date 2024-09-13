import { useState } from "react"
import { Login } from "./component/loginSection"
import { Restricted } from "./component/RestrictedSection"


function App() {

  const [isLogin, setLogin] = useState(false)
  return (
    <div>
      {isLogin ? <Restricted setLogin={setLogin} /> : <Login setLogin={setLogin} />}
    </div>
  )
}

export default App
