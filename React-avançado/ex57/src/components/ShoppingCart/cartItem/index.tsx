import { useContext } from "react"
import { ShoppingCartContext } from "../../../providers/shoppingCartContext"
import { IFruit } from "../../../database/fruits"

interface ICartItemProps{
    fruit:IFruit;
}

export const CartItem = ({fruit} : ICartItemProps) => {
   const {removeFruitFromCart} = useContext(ShoppingCartContext)

   return(
    <li>
        <h3>{fruit.name}</h3>
        <p>Preço: {fruit.price}</p>
        <button onClick={() => removeFruitFromCart(fruit.id)}>Remover</button>
    </li>
    )
}