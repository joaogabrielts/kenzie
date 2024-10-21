import { useState } from "react"

function App() {
  const [postList, setPostList] = useState([])
  const GetNews = async () => {
    const response = await fetch("https://blog-fake-api.onrender.com/news");
    const json = await response.json()
    setPostList(json);

  }
  return (
    <>
      <button onClick={GetNews}>Requisição</button>
      <ul>
        {postList.map(post => (
          <li key={post.id}>
            <span>{post.category}</span>
            <h2>{post.title} - {post.author}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
