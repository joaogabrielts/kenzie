import { useContext } from "react"
import { ShoppingCartContext } from "../../providers/shoppingCartContext"
import { CartItem } from "./cartItem"

export const ShoppingCart = () => {
    const {shoppingCart} = useContext(ShoppingCartContext)
    return(
        <div>
            <ul>
        {shoppingCart.map(cartFruit => (
            <CartItem key={cartFruit.id} fruit={cartFruit}/>
        ))}
            </ul>
        </div>
    )
}