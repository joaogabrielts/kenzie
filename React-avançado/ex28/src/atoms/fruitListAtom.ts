import { atom } from "jotai";

export interface IFruit{
    id:number;
    name:string;
}

export const fruitListAtom = atom<IFruit[]>([
    {
        id:1,
        name:"Banana",
    }
])