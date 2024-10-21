import { useEffect, useState } from "react";

function App() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const response = await fetch("https://blog-fake-api.onrender.com/news");
      const json = await response.json();
      setPostList(json);
    };
    getNews();
  }, []);
  return (
    <>
      <ul>
        {postList.map((list) => (
          <li key={list.id}>
            <h1>{list.title}</h1>
            <span>{list.category} - {list.author}</span>
            <p>{list.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
