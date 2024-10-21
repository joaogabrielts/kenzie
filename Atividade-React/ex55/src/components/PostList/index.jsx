export const PostList = ({ postList,addFavoritePost  }) => {
  return (
    <ul>
      {postList.map((list) => (
        <li key={list.id}>
          <h1>{list.title}</h1>
          <span>
            {list.category} - {list.author}
          </span>
          <p>{list.content}</p>
          <button onClick={() => addFavoritePost(list) }>Adicionar</button>
         
        </li>
      ))}
    </ul>
  );
};
