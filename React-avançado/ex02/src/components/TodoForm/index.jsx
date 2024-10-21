import { useContext, useState } from "react"
import { TodoContext } from "../../providers/TodoContext"


export const TodoForm = () => {
    const {addTodo} = useContext(TodoContext)
    const [value, setValue] = useState("")
    const submit = (e) => {
        e.preventDefault();
        addTodo(value)
    }
    return(
        <form onSubmit={submit}> 
            <input type="text" name={value} onChange={(e) => setValue(e.target.value)} />
            <button>cadastrar nota</button>
        </form>
    )
}