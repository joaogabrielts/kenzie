import { useEffect, useState } from "react";
import { api } from "./services";
import { AxiosError } from "axios";

interface IFruit {
  id: number;
  name: string;
  category: string;
  price: number;
}

function App() {
  const [fruitList, setFruitList] = useState<IFruit[]>([]);

  useEffect(() => {
    const loadFruits = async () => {
      try {
        const response = await api.get<IFruit[]>("/fruits");
        /*Por meio da Generics no método get, foi apontado um tipo para resposta desta requisição. No cenário desta rota, foi reaproveitada a interface IFruit tendo em vista que essa correspondia exatamente ao conjunto de valores fornecidos pela resposta /fruits.

        Todos os tipos de requisição poderão ter tipagem atribuída da mesma forma.

       Uma adendo importante: será necessário sempre avaliar exatamente qual o formato da resposta fornecida pela API para perceber se será possível reaproveitar uma interface existente ou será necessário criar uma nova.
    
         Sempre consulte a documentação, debug a rota no Insomnia ou utilize o console.log para ter certeza do conjunto de valores que estão sendo recebidos.

 */
        setFruitList(response.data);
      } catch (error) {
        //Erros também podem ser tipados e só exigirão tipagem caso sejam compostos por objetos, ainda assim, tal como a tipagem de sucesso, a informação de tipagem a respeito do erro também é valiosa.
        const currentError = error as AxiosError<string>;
        //O error, fornecido pelo catch foi associado a uma constante e a ele foi apontado o tipo AxiosError<string>, o tipo string é também uma particularidade dessa api em especial e vai variar com base no comportamento de cada api.
        console.log(currentError.response?.data);
      }
    };

    loadFruits();
  }, []);

  return (
    <div>
      <ul>
        {fruitList.map((fruit) => (
          <li key={fruit.id}>
            <h3>{fruit.name}</h3>
            <p>{fruit.price}</p>
            <p>{fruit.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
