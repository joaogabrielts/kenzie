import { useState } from "react";
import { FruitList } from "./components/FruitList";

// a interface ficar fora da Function App

//Na call como argumento do método map, podemos perceber que fruit, fragmento de fruitList, se trata de um objeto e, na estrutura renderizada, são referenciadas as respectivas chaves: id, name, category e price.

//Por isso, o tipo esperado seria um array do respectivo objeto: { id, name, category, price}. No entanto, nesse caso a inferência sugere never[], ou seja, não foi inferido o tipo adequado. Quando isso acontece, precisamos estabelecer um tipo manualmente.

//Para isso, criamos um interface para descrever o objeto fruit :
export interface IFruit {
  id: number;
  name: string;
  category: string;
  price: number;
}

function App() {
  const [IsOpen, SetIsOpen] = useState(false);
  const [fruitList, setFruitList] = useState<IFruit[]>([]); // aqui como vamos adicionar a interface Ifruit ao estado
  const [currentFruit, setCurrentFruit] = useState<IFruit | null>(null); // nesse estado já esta diferente, pq esse estado tambem ficar null, entao na logica colocamos que ele pode ser o Ifruit tanto quanto null e aqui vamos passar o mouse encima pra pegar tipagem pra  usar nas outras interfaces

  return (
    <div>
      {IsOpen ? <p>O modal está aberto</p> : null}
      {currentFruit ? (
        <div>
          <button onClick={() => setCurrentFruit(null)}>Fechar</button>
          <h2>{currentFruit.name}</h2>
          <p>{currentFruit.category}</p>
          <p>{currentFruit.price}</p>
        </div>
      ) : null}
      <FruitList fruitList={fruitList} setCurrentFruit={setCurrentFruit} />
    </div>
  );
}

export default App;
