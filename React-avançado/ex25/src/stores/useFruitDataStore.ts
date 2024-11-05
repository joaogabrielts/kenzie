import { create } from "zustand";
import { api } from "../services/api";

interface IFruit {
    id:number;
    name:string;
    category:string;
    price:number;
}

interface IFruitDataStore {
    loading:boolean;
    error:string;
    fruitData:IFruit[];
    loadFruitData: () => Promise<void>
    
}

export const useFruitDataStore = create<IFruitDataStore>((set) => ({
  loading: false,
  error: "",
  fruitData:[],
  loadFruitData: async () => {
    try {
        set({loading:true,error:""});
        const {data} = await api.get<IFruit[]>("/fruits");
        set({fruitData: data})
    } catch (error) {
        console.log(error);
        set({error: "Ocorreu um erro . "});
    } finally{
        set({loading:false})
    }
  }
}));
