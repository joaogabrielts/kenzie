function exercicio(){
const frase = 'Estou estudando JavaScript'

console.log(frase)

const novaFrase = frase.replace('JavaScript', 'HTML')
console.log(novaFrase)
}
exercicio()


// Com o replaceall ele naoo vai trocar apenas uma palavra 

const frase1 = 'Estou estudando JavaScript, e estou gostando muito de JavaScript'

console.log(frase1)

const novaFrase1 = frase1.replaceAll('JavaScript', 'HTML');
console.log(novaFrase1)

// Esse é o booleanos, ele indica true se a primeira palavra for a mesma que esta no parametro dele

const frase2 = 'Estou estudando JavaScript, e estou gostando muito de JavaScript'

const comecaCom = frase2.startsWith('est', 6)//  o numero e pra direcionar como letra ele dever vereficar 
console.log(comecaCom)


// Métodos de números 

//  você escolher quantas casas de decimas dever aparecer 

// ele tem um porém ele troca um numero para uma strick

const valor =10.133550

console.log(valor)

const valorFormatado = valor.toFixed(3)
// como essa strick em um numero

const valorSomado = parseFloat(valorFormatado) + 1;
// também temos o parseInt que vai transforma ele em um inteiro

console.log(valorSomado)

// Agora pra ver se o valor é inteiro 

//console.log(Number.isInteger(valor))