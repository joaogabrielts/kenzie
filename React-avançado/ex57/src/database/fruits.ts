// database/fruits.ts

export interface IFruit {
    id: number;
    name: string;
    category: string;
    price: number;
  }
  
  export const fruits: IFruit[] = [
    {
      id: 1,
      name: "Maçã",
      category: "Frutas Frescas",
      price: 3.5,
    },
    {
      id: 2,
      name: "Banana",
      category: "Frutas Frescas",
      price: 2.0,
    },
    {
      id: 3,
      name: "Laranja",
      category: "Cítricos",
      price: 2.8,
    },
    {
      id: 4,
      name: "Manga",
      category: "Frutas Tropicais",
      price: 4.5,
    },
  ];
  