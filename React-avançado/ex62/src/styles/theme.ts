export const defaultTheme = {
  colors: {
    primary: "blue",
    secondary: "red",
    white: "white",
    black: "black",
  },
  
};
/*Bem como foi dito na aula anterior, o pacote @types/styled-components é essencial o uso da biblioteca em Typescript. Por isso, sempre verifique se o mesmo está instalado.

Com o pacote incluso na aplicação, podemos tipar nossas seguindo com base o seguinte exemplo


<ThemeProvider theme={defaultTheme}>
   <App />
</ThemeProvider

Foi criado um tema com uma paleta de cores simples e o mesmo foi associado ao theme provider envolvendo o componente App presente no arquivo main.tsx. Para que o tema possa fornecer informações sobre suas variáveis para os demais componentes, foi necessário realizar o seguinte procedimento:
*/
