import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    // 2 e colocamos ela bem aqui
    event.preventDefault();
    setEmail("");
    console.log({ email, password });
  };

  // 1  <form onSubmit={(e) => e}> vamos passa o mouse encima do e pra saber qual é melhor tipagem pra utilizar, nesse caso foi a  React.FormEvent<HTMLFormElement>
  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="email"
          autoComplete="on"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Entrar</button>
      </form>
    </div>
  );
}

export default App;

/*Eventos diferentes
Uma observação relevante sobre tipagens de eventos é se atentar que cada grupo de evento tem um tipo específico disponibilizado pelo React.

Seguem abaixo alguns exemplos:

React.MouseEvent: click, mousedown, mouseup, mousemove e etc
React.DragEvent: drag-start, drag-end, drag-hover e etc
React.FormEvent: submit
React.ChangeEvent: change
Utilizar o atributo de evento pode ser um ótimo recurso para colher a tipagem de evento correta por conta da inferência. */
