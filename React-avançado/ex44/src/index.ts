let FruitList = [] as string[];

FruitList.push("banana"); /* assim o ts vai deixar pq é uma string*/

FruitList.push(
  322
); /*Já dar pra ver que deu erro, pq colocamos que iria receber uma string e colocamos um  valor de number  */

FruitList = [...FruitList, 123]; /* mesma coisa do erro de cima  */

/*A tipagem de arrays é muito simples, e se baseia nos valores que determinada lista contém ou deverá receber futuramente. Confira o exemplo abaixo:

let fruitList: string[] = ["Batata", "Uva", "Maçã"];

O string representa um tipo de valor que a lista deverá conter e os [] representam a marcação daquela tipagem como lista.

Valores esperados
Além disso, se tratando de listas (e também strings, números e objetos como veremos mais para frente), podemos definir um valor esperado, o que, neste cenário, pode ser muito eficiente para tipagem de uma lista vazia. Confira o exemplo:

let fruitList = [] as string[];  */
