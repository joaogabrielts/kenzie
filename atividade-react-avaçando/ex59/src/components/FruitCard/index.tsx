import { IFruit } from "../../App"

interface IFruitPropsCard{
    fruit:IFruit
}

export const FruitCard = ({fruit} : IFruitPropsCard) => {
    return(
        <li>
            <h3>{fruit.name}</h3>
            <p>{fruit.category}</p>
            <p>{fruit.price}</p>
        </li>
    )
}