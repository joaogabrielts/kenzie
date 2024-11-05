import { useAtom,useAtomValue } from "jotai/react";
import { FruitCard } from "./FruitCard";
import { fruitListAtom } from "../../atoms/fruitListAtom";

export const FruitList = () => {
  const FruitList = useAtomValue(fruitListAtom);
  return (
    <ul>
      {FruitList.map((fruit) => (
        <FruitCard key={fruit.id} fruit={fruit}/>
      ))}
    </ul>
  );
};
