import { useContext } from "react"
import { TodoContext } from "../../providers/TodoContext"
import { TodoCard } from "./TodoCard"


export const TodoList = () => {
    const {todoList} = useContext(TodoContext)
    return(
        <ul>
        {todoList.map(todo => <TodoCard key={todo.id} todo={todo}/>)}
        </ul>
    )
}