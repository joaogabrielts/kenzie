import { useAtom } from "jotai"
import { darkModeAtom } from "../../atoms/darkModeAtom"
import styled from "styled-components";


const MyComponent = styled.div`
  background: ${({ theme }) => theme.colors.background}; 
  color:${({ theme }) => theme.colors.text};
  width: 100vw;   /* Faz a div ocupar 100% da largura da tela */
  height: 100vh;  /* Faz a div ocupar 100% da altura da tela */
`;

export const Header = () => {
    const [themeCard,setThemeCard]= useAtom(darkModeAtom)
    console.log(themeCard);

    const toggleTheme = () => {
        const newTheme = !themeCard;
        setThemeCard(newTheme); // Altera o estado
        localStorage.setItem("darkMode", newTheme.toString()); // Salva no localStorage
      };


    return(
        <MyComponent>
        <h1>Ola, mundo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur natus aut enim quis suscipit reiciendis dolorum provident similique nobis necessitatibus laudantium facere, quisquam recusandae rerum mollitia porro, sint voluptates voluptas?</p>
        <button onClick={toggleTheme}>altera tema</button>
        </MyComponent>
    )
}

