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
    loadFruitData: (setLoading: React.Dispatch<React.SetStateAction<boolean>>,callback?: () => void) => Promise<void>
    
}

export const useFruitDataStore = create<IFruitDataStore>((set) => ({
  loading: false,
  error: "",
  fruitData:[],
  loadFruitData: async (setLoading,callback) => {
    try {
        setLoading(true)
        set({error:""});
        const {data} = await api.get<IFruit[]>("/fruits");
        set({fruitData: data})
        if(callback) callback()
    } catch (error) {
        console.log(error);
        set({error: "Ocorreu um erro . "});
    } finally{
        setLoading(false)
    }
  }
}));
