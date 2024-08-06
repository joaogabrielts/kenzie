export const EmployeeCard = ({employee}) => {
    return(
        <li>
            <h3>{employee.name}</h3>
            <p>{employee.category}</p>
            <p>{employee.price}</p>
        </li>
    )
}