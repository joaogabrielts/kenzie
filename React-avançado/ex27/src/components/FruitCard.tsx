import { IFruit, useFruitStore } from "../stores/useFruitStore";

interface IFruitCardProps {
  fruit: IFruit;
  //removeFruit: (id: number) => void;
}

export const FruitCard = ({ fruit }: IFruitCardProps) => {
    const removeFruit= useFruitStore((store) => store.removeFruit)
  return (
    <li>
      <h3>{fruit.name}</h3>
      <button onClick={() => removeFruit(fruit.id)}>Excluir</button>
    </li>
  );
};
 //