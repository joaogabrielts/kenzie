import { useContext } from "react"
import { FormListContext } from "../../providers/TodoContext"
import { TodoCard } from "./TodoCard";


export const TodoList = () => {
    const {formList} = useContext(FormListContext);

    return(
        <ul>
          {formList.map((form) => (
            <TodoCard key={form.id} form={form}/> 
        ))}   
        </ul>
       
    )
}
