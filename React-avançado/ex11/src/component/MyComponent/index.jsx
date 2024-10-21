// Arquivo: MyComponent.js
import styled from "styled-components";

// Acessando as propriedades do tema
const MyComponent = styled.div`
background: ${({theme}) => theme.colors.primary}; 
color: white;
width: 100vw;   /* Faz a div ocupar 100% da largura da tela */
height: 100vh;  /* Faz a div ocupar 100% da altura da tela */
`;

export default MyComponent;
