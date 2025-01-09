import { IFruit } from "../../../App";

interface IFruitCardProps{
    fruit: IFruit;
    setCurrentFruit:React.Dispatch<React.SetStateAction<IFruit | null>>;
}

export const FruitCard = ({fruit,setCurrentFruit} : IFruitCardProps) => {

    return (
    <li >
      <h3>{fruit.name}</h3>
      <p>{fruit.category}</p>
      <p>{fruit.price}</p>
      <button onClick={() => setCurrentFruit(fruit)}>Saiba mais</button>
    </li>
  );
};
