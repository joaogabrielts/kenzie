import { useState } from "react";

export const FormList = ({ addTodo }) => {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addTodo({ text });
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite a tarefa..."
      />
      <button type="submit">Cadastrar nota</button>
    </form>
  );
};