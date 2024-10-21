export const FavoriteList = ({favoriteNews,removeFavoritePost}) => {
    return(
        <ul>
            {favoriteNews.map(list => (
                <li key={list.id}> 
                    <h1> {list.title} - {postMessage.author}</h1>
                    <button onClick={() => removeFavoritePost(list.id)}>Remover</button>
                </li>
            ))}
        </ul>
    )
}