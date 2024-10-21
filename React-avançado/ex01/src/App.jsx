import { useState } from "react"
import { FeedPage } from "./components/FeedPage"


function App() {
 const [comments,setComments] = useState([])

  return (
    <>
     <FeedPage/>
    </>
  )
}

export default App
