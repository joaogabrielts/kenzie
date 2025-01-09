import { useContext } from "react";
//import { IFruit } from "../../App";
import { FruitCard } from "./FruitCard";
import { FruitListContext } from "../../providers/FruitListContext";

//interface IFruitListProps {
//fruitList: IFruit[];
//setCurrentFruit: React.Dispatch<React.SetStateAction<IFruit | null>>;
//}

export const FruitList = () => {
  const { fruitList } = useContext(FruitListContext);
  return (
    <ul>
      {fruitList.map((fruit) => (
        <FruitCard key={fruit.id} fruit={fruit} />
      ))}
    </ul>
  );
};
