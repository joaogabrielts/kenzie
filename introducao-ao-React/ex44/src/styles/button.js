import styled, {css} from "styled-components";

export const StyledButton = styled.button`
display:flex;
align-items:center;
justify-content: center;
gap: 10px;
 
padding: 0 20px;
height: 54px;

${({buttonStyle}) => {
  if(buttonStyle === 'style1'){
    return css`
    background-color:blue;
    border-radius: 255px;
    `
  } else if(buttonStyle === 'style2'){
    return css`
    background: green;
    border-radius: 2px;
    `
  }
}
}

color: white;
`   