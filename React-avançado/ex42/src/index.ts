/*
 De forma direta, o Typescript é uma linguagem que oferece todos os recursos presentes no Javascript, com uma camada adicional: o sistema de tipos (types) que dá nome a linguagem.
*/

type tType = "sum" | "sub";

export function operation(a: number, b: number, type: tType) {
  if (type === "sum") {
    return a + b;
  } else if (type === "sub") {
    return a - b;
  }
}

  
