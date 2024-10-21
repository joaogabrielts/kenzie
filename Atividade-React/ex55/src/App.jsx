import { useEffect, useState } from "react";
import { PostList } from "./components/PostList";
import { FavoriteList } from "./components/FavoriteList";
import { api } from "../services/api";

function App() {
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState([]);

  const localFavoritePosts = localStorage.getItem("@MYFAVORITEPOSTS");

  const [favoriteNews, setFavoriteNews] = useState(
    localFavoritePosts ? JSON.parse(localFavoritePosts) : []
  );

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("news", {});
        setPostList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, []);

  useEffect(() => {
    localStorage.setItem("@MYFAVORITEPOSTS", JSON.stringify(favoriteNews));
  }, [favoriteNews]);

  const addFavoritePost = (list) => {
    if (!favoriteNews.some((favoriteList) => favoriteList.id === list.id)) {
      setFavoriteNews([...favoriteNews, list]);
    } else {
      alert("Notícia já favoritada");
    }
  };

  const removeFavoritePost = (listId) => {
    const newFavoritePosts = favoriteNews.filter((post) => post.id !== listId);
    setFavoriteNews(newFavoritePosts);
  };

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <PostList postList={postList} addFavoritePost={addFavoritePost} />
          <FavoriteList
            favoriteNews={favoriteNews}
            removeFavoritePost={removeFavoritePost}
          />
        </div>
      )}
    </>
  );
}

export default App;
