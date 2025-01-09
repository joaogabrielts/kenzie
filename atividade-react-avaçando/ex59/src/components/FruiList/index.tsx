import { IFruit } from "../../App";
import { FruitCard } from "../FruitCard";

interface IFruitProps{
    fruit:IFruit[]
}


export const FruitList = ({fruit} : IFruitProps) => {

    return(
        <ul>
          {fruit.map((fruit) => (
               <FruitCard fruit={fruit} key={fruit.id}/>
          ))}
        </ul>
        
    )
}