import { IPost } from "../../../App";

interface IPostCardProps {
  post: IPost;
}
export const PostCard = ({ post }: IPostCardProps) => {
    console.log(post.id);
    
  return (
    <li>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <span>{post.author}</span>
    </li>
  );
};
