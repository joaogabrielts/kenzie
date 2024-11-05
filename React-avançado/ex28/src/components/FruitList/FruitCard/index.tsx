import { IFruit } from "../../../atoms/fruitListAtom"

interface IFruitCardProps{
    fruit:IFruit;
}

export const FruitCard = ({fruit} : IFruitCardProps) => {
    return(
        <li>
            Nome da fruta
        </li>
    )
}