import { Input } from "./components/Input/intex";

function App() {
  return (
    <>
      <form method="get">
        <label>Digite seu nome :</label>
        <Input type="text" />
        <button>enviar</button>
      </form>
    </>
  );
}
//como colocamos o extends InputHTMLAttributes<HTMLInputElement> no input agora podemos ter todos os atributos no type tambem !
export default App;
