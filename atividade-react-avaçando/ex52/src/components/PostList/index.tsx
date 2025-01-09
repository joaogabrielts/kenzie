import { IPost } from "../../App";
import { PostCard } from "./FruitCard";
//import { PostCard } from "./FruitCard";

interface IPostListProps{
    postList: IPost[]
}


export const PostList = ({ postList } : IPostListProps) => {
  return (
    <ul>
      {postList.map((post) => (
      <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
};
