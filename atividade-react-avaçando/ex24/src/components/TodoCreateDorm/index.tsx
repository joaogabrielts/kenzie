import { useForm } from "react-hook-form"
import { useFruitStore } from "../../stores/useTodoStore"

export const Form = () => {
    const  addForm = useFruitStore((store) => store.addForm)

    const {register,handleSubmit} = useForm()

    const submit = (newForm: {id:number; name: string; age: string }) => {
      addForm(newForm)
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" {...register("name")} />
            </div>
            <div>
                <label htmlFor="age">age:</label>
                <input type="text"id="age"  {...register("age")}/>
            </div>
            <button type="submit">Cadastrar uma nota</button>
            
       
        </form>
    )
}