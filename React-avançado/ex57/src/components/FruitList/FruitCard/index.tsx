import { useContext } from "react";
import { FruitListContext } from "../../../providers/FruitListContext";
import { IFruit } from "../../../database/fruits";
import { ShoppingCartContext } from "../../../providers/shoppingCartContext";

interface IFruitCardProps {
  fruit: IFruit;
}

export const FruitCard = ({ fruit }: IFruitCardProps) => {
  const { setCurrentFruit } = useContext(FruitListContext);
  const {addFruitToCart} = useContext(ShoppingCartContext)
  return (
    <li>
      <h3>{fruit.name}</h3>
      <p>{fruit.category}</p>
      <p>{fruit.price}</p>
      <button onClick={() => addFruitToCart(fruit)}>Adicionar ao carrinho </button>
      <button onClick={() => setCurrentFruit(fruit)}>Saiba mais</button>
    </li>
  );
};
