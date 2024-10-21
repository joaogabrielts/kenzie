import { useContext } from "react";
import { TodoContext } from "../../../providers/TodoContext";

export const TodoCard = ({todo}) => {
    const {removeTodo} = useContext(TodoContext)
    return(
        <li>
       <p>{todo.text}</p>
       <button onClick={() => removeTodo(todo.id)}>Remover</button>
        </li>
    )
};
