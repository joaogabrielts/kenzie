import { TodoForm } from "../../components/TodoForm"
import { TodoList } from "../../components/TodosList"


export const HomePage = () => {
    return(
    <main>
        <TodoForm/>
        <TodoList/>
    </main>
    )
}