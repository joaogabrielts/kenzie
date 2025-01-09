import { createContext, useState } from "react";
import { IFruit, fruits as fruitListData } from "../database/fruits"; // Importamos os dados e a interface

interface IFruitListProviderProps {
  children: React.ReactNode;
}

interface IFruitListContext {
  fruitList: IFruit[];
  currentFruit: IFruit | null;
  setCurrentFruit: React.Dispatch<React.SetStateAction<IFruit | null>>;
}

export const FruitListContext = createContext({} as IFruitListContext);

export const FruitListProvider = ({ children }: IFruitListProviderProps) => {
  const [fruitList] = useState<IFruit[]>(fruitListData); // Estado inicial com a lista de frutas
  const [currentFruit, setCurrentFruit] = useState<IFruit | null>(null); // Estado com a fruta selecionada

  return (
    <FruitListContext.Provider
      value={{ fruitList, currentFruit, setCurrentFruit }}
    >
      {children}
    </FruitListContext.Provider>
  );
};

/*Neste primeiro contexto, a interface IFruit criada em aulas anteriores, foi movida para o arquivo de contexto e utilizada para tipagem dos estados no interior do componente provider.

Conforme demonstrado no vídeo, o fluxo para tipagem do contexto foi o seguinte:

Criar uma interface para tipar a prop children do componente provider;
Tipar todos os estados, variáveis e funções dentro do contexto;
Exportar o que for desejado;
Criar uma interface replicando os tipos estabelecidos no interior do contexto (IFruitListContext);
Associar essa interface ao objeto vazio como parâmetro do createContext.
Este fluxo, é um excelente exemplo para tipagens de contexto, porque permite o reaproveitamento das tipagens externas para construção da interface que será associada ao contexto. */
