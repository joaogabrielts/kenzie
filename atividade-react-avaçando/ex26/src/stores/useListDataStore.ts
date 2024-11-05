import { create } from "zustand";
import { api } from "../services/api";

export interface IList {
  id: number;
  category: string;
  title:string;
  content: string;
  author: string;
}

interface IListDataStore {
  loading: boolean;
  error: string;
  newsData: IList[];
  loadNewsData: () => Promise<void>;
}

/* {
      "id": 1,
      "category": "economia",
      "title": "Entenda o que é o arcabouço fiscal, ponto a ponto",
      "content": "Conjunto de regras para substituir o teto de gastos foi divulgado nesta quinta-feira pela equipe econômica. Objetivo é permitir gastos considerados prioritários e possibilitar o aumento dos investimentos públicos, mas sem gerar descontrole nas contas do governo.",
      "author": "Raphael Martins"
   },*/
export const useListDataStore = create<IListDataStore>((set) => ({
  loading: false,
  error: "",
  newsData: [],
  loadNewsData: async () => {
    try {
      set({ loading: true, error: "" });
      const { data } = await api.get<IList[]>("/news");
      set({ newsData: data });
    } catch (error) {
      console.log(error);
      set({ error: "Ocorreu um erro." });
    } finally{
        set({loading:false})
    }
  },
}));
