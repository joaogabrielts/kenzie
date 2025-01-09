import "styled-components";

/*export const defaultTheme = {
  colors: {
    primary: "blue",
    secondary: "red",
    white: "white",
    black: "black",
  },
};
 */
interface IDefaultTheme {
  colors: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends IDefaultTheme {}
}

/*E dentro deste arquivo criar uma interface descrevendo exatamente a estrutura do tema, em seguida, dentro de uma declaração de módulo, extender a interface criada na interface padrão do styled components DefaultTheme.

Realizado o procedimento corretamente, ao utilizarmos nossas variáveis de tema em nossos componentes teremos autocomplete e informações precisas sobre cada variável presente no tema. Isso fica evidente na video aula. */
