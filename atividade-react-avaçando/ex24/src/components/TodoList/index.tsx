import { useFruitStore } from "../../stores/useTodoStore";
import { FormCard } from "../TodoCard";
import { Form } from "../TodoCreateDorm";

export const TodoList = () => {
  const FormList = useFruitStore((store) => store.formList);

  return (
    <>
      <Form />
      <ul>
        {FormList.map((form) => (
          <FormCard key={form.id} form={form} />
        ))}
      </ul>
    </>
  );
};
