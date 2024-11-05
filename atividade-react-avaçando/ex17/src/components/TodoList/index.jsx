import { useContext } from "react";
import { TodoContext } from "../../providers/TodoContext";

export const TodoList = () => {
  const { todoList, postDelete,setEditingPost } = useContext(TodoContext);
  
  return (
    <ul>
      {todoList?.map((todo) => (
        <li key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.content}</p>
          <button onClick={() => postDelete.mutate(todo.id)}>Excluir</button>
          <button onClick={() => setEditingPost (todo)}>Editar</button>
        </li>
      ))}
    </ul>
  );
};
