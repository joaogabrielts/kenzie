import { IForm, useFruitStore } from "../../stores/useTodoStore";

interface IFormCardProps {
  form: IForm;
}

export const FormCard = ({ form }: IFormCardProps) => {
  const removeFruit = useFruitStore((store) => store.removeForm);
  return(
    <li>
          Nome: {form.name}, Idade: {form.age}
          <button onClick={() => removeFruit(form.id)}>Excluir</button>
    </li>
  )
};
