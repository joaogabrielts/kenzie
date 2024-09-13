import { StyledButton } from "../../styles/button"
import { StyledTitle } from "../../styles/typograpnhy"
import { StyledExample } from "./style"

export const Example = () => {
    return (

        <StyledExample>
            <StyledTitle>  <h1>Componente Exemplo</h1></StyledTitle>
            <p>Esse é um componente de exemplos</p>
            <StyledButton buttonStyle="style2" type="button ">Button</StyledButton>
        </StyledExample>
    )
}