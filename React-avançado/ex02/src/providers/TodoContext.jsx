import { createContext, useState } from "react";

export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (value) => {
    setTodoList([...todoList, {text: value, id: crypto.randomUUID()}])
    console.log(todoList);
    
  }

  const removeTodo = (todoId) => {
    const newTodoList = todoList.filter(todo => todo.id !== todoId);
    setTodoList(newTodoList)
  }
   
  return (
  <TodoContext.Provider value={{todoList,addTodo,removeTodo}}>
    {children}
    </TodoContext.Provider>
  )
}
