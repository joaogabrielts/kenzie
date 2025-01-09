import { useEffect, useState } from "react";
import { api } from "./services/api";
import { PostList } from "./components/PostList";

export interface IPost {
  id: number;
  title:string;
  content: string;
  author:string;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState<IPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/news");

        setPostList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);
  

  return (
    <div className="App">
      <PostList postList={postList} />
    </div>
    
  );
}

export default App;
