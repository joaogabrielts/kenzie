import {IList} from "../../stores/useListDataStore"
//useListDataStore

interface IListCardProps {
  list: IList;
}

export const NewsCard = ({list}: IListCardProps) => {
 return(
    <li>
        <p>{list.title}</p>
        <span>{list.category}</span>
        <p>{list.content}</p>

    </li>
 )
}