import styled, { css } from "styled-components";

export const StyledButtonA = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0 20px;
  height: 58px;

  background: blue;
  color: blue;
`;

interface IStyledButtonProps {
  buttonSize: "lg" | "sm";
}

export const StyledButtonB = styled.button<IStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: ${({theme}) => theme.colors.secondary};

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "lg":
        return css`
          padding: 0 30px;
          height: 3.625rem;
        `;
      case "sm":
        return css`
          padding: 0 15px;
          height: 3rem;
        `;
    }
  }}
`;
/*
No exemplo acima, o componente StyledButtonB utiliza a prop buttonSize para retornar diferentes propriedades de altura em padding como base no valor fornecido na prop. Para realizar a tipagem da mesma, poderíamos criar uma interface que tratasse o cenário de forma genérica.

Com o procedimento realizado, e a tipagem mais específica apontada, podemos ao utilizar esse componente de estilo, ter informação de quais props são exigidas, bem como, quais valores são possível para aquela respectiva prop. Isso fica bem evidente na vídeo aula.
 */
