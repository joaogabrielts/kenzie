import { useContext } from "react";
import { IForm } from "../../../dataBase";
import { FormListContext } from "../../../providers/TodoContext";
import { StyledButtonB } from "../../../styles/button";

interface IFormCardProps {
  form: IForm;
}

export const TodoCard = ({ form }: IFormCardProps) => {
  const { removeFormCart } = useContext(FormListContext);

  return (
    <li>
      <h1>{form.text}</h1>
      <p>{form.textarea}</p>
      <StyledButtonB onClick={() => removeFormCart(form.id)} buttonSize="lg">
        Excluir
      </StyledButtonB>
    </li>
  );
};
