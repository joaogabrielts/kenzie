import { useEffect, useState } from "react";
import { api } from "./services/api";
import { FruitList } from "./components/FruiList";
import { AxiosError } from "axios";

export interface IFruit {
  id: number;
  name: string;
  category: string;
  price: string;
}

function App() {
  const [fruit, setFruit] = useState<IFruit[]>([]);
  useEffect(() => {
    const loading = async () => {
      try {
        const response = await api.get<IFruit[]>("/fruits");
        setFruit(response.data);
      } catch (error) {
        const currentError = error as AxiosError<string>
        console.log(currentError.response?.data);

      }
    };
    loading()
  },[]);
  console.log(fruit);
  
  return <>
  <FruitList fruit={fruit}/>
  </>;
}

export default App;
