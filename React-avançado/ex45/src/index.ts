
type tFoods = "pure de batata" | "macarrão" | "arroz" | "feijão"

let iFoods: tFoods = "macarrão"

 export function Cook(food: tFoods){
    return " cozinhou " + food
}
Cook('pure de batata')


/*Mais do que usar os tipos pré-definidos do Typescript ou se restringir ao uso de interfaces, podemos também criar nossos próprios tipos, o que engloba desde tipagem de variáveis até o comportamento completo de funções.

Por exemplo, o Union type abaixo poderia ser convertido em um tipo:

let foods: "pure de batata" | "macarrão"  | "risoto" = "risoto";

Confira o exemplo:

type tFoods = "pure de batata" | "macarrão"  | "risoto";
 
let foods: tFoods = "risoto";

Neste formato, tipos complexos podem se tornar muito mais escaláveis.

 */