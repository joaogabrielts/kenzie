
export const ListaDeFrutas = ({ props }) => {
    return (<>

      <ul>
        {props.map((Fruit, Index) => (
          <li key={Index}>
            <h3>{Fruit.name}</h3>
            <p>{Fruit.price}</p>
            <span>{Fruit.category}</span>
          </li>
        ))}
      </ul>
    </>)
}

