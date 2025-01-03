import { operation } from ".";

function App() {
  const result = operation(1, 2, "sum");

  return (
    <>
      <h1>Resultado {result}</h1>
    </>
  );
}

export default App;
