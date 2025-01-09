import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

function App() {
  /*Uso
O Styled Components, diferente da maioria das bibliotecas que utilizamos anteriormente, não tem tipos nativos, por isso, para trabalhar com Typescript e Styled Components será necessário a instalação de um pacote, o @types/styled-components.

Rode o seguinte comando para instalar a dependência:

npm install @types/styled-components */

  return (
    <>
      <Form />
      <TodoList />
    </>
  );
}

export default App;
