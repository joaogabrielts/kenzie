export const PersonCard = ({name,surname, age}) => {
    return(
        <li>
            <h3>Nome completo: {name} {surname}</h3>
            <p>Idade: {age}</p>
        </li>
    )
}