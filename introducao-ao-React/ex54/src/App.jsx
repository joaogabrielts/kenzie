import { useEffect, useState } from "react";
import { FormList } from "./components/Form";

function App() {

  const localTodoList = localStorage.getItem("@MYTODOLIST");

  const [todoList, setTodoList] = useState(localTodoList ? JSON.parse(localTodoList) : []);

  const addtodo = (formData) => {
    const newTodo = { ...formData, id: crypto.randomUUID() };
    setTodoList([...todoList, newTodo]);
  };

  useEffect(() => {
    localStorage.setItem("@MYTODOLIST", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <>
      <FormList addTodo={addtodo} />
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
