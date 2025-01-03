/*
Os tipos básicos que o Typescript oferece são os referentes aos valores padrões do Javascript, são eles:

String: para tipar valores de string;
Number: para tipar valores núméricos, tanto inteiros (1) quanto flutuantes (1.21);
Boolean: para tipar valores booleanos (true e false).
*/

let nome: string = "alex";

const idade: number = 32;

let maiorDeIdade: boolean = true;

function message(message: string): number {
  console.log(message);
  return 3;
}
