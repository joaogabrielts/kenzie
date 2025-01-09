//Não necessariamente uma variável, parâmetro ou retorno de função precisa estar restrito a um único tipo. Por isso, existe no Typescript um recurso chamado de Union Type, que funciona de forma muito semelhante ao operador lógico OR da programação

let age: string | number = 24;//Neste exemplo, a variável age permite tanto valores do tipo string, quanto do tipo number.
let cardapio: "macarrão" | "risoto" | "ravioli" = "risoto";


//Typeof
//Entendendo essa possibilidade de tipagem múltipla, podemos também, fazer verificações de tipos com o typeof e produzir tratativas diferentes dentro da nossa lógica. Observe:
function sum(a: string | number, b: string | number) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return Number(a) + Number(b);
  }
}
export default sum
