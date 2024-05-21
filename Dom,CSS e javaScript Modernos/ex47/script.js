const minhaFuncao = (param1, param2,) => {
    // corpo da função
  };


  // arrow function com dois parâmetros e corpo com instruções
const soma = (a, b) => {
    const resultado = a + b;
    return resultado;
  };
  console.log(soma(2,3));
  // arrow function com um parâmetro e corpo com uma instrução que é implicitamente retornada
  const quadrado = x => x * x;
  console.log(quadrado(2));
  
  // arrow function sem parâmetros e corpo com uma instrução que é implicitamente retornada
  const saudacao = () => "Olá, mundo!";



// arrow function com um parâmetro e corpo com uma instrução que é implicitamente retornada
const dobro = x => x * 2;
console.log(dobro(2));
// funciona da mesma forma que
const dobro2 = (x) => {
  return x * 2;
};

// arrow function sem parâmetros e corpo com uma instrução que é implicitamente retornada
const retornaObjeto = () => ({ nome: "João", idade: 30 });
// funciona da mesma forma que:
const retornaObjeto2 = () => {
  return {
    nome: "João",
    idade: 30,
  };
};