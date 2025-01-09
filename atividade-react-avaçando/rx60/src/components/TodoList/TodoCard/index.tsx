import { useContext } from "react"
import { IForm } from "../../../dataBase"
import { FormListContext } from "../../../providers/TodoContext"

interface IFormCardProps{
    form:IForm
}

export const TodoCard = ({form} : IFormCardProps) => {
    const {removeFormCart} = useContext(FormListContext)

    return(
        <li>
            <h1>{form.text}</h1>
            <p>{form.textarea}</p>
            <button onClick={() => removeFormCart(form.id)}>Excluir</button>
        </li>
    )
}