import { IFruit } from "../../App";
import { FruitCard } from "./FruitCard";

interface IFruitListProps {
  fruitList: IFruit[];
  setCurrentFruit: React.Dispatch<React.SetStateAction<IFruit | null>>;
}

export const FruitList = ({ fruitList, setCurrentFruit }: IFruitListProps) => {
  return (
    <ul>
      {fruitList.map((fruit) => (
        <FruitCard
          fruit={fruit}
          setCurrentFruit={setCurrentFruit}
          key={fruit.id}
        />
      ))}
    </ul>
  );
};
