function fibonacciNumbers(){
let atual = 1
let anterior = 0
let proximo;

let listaFibonacci = []

for(let i = 1; i <= 15; i++){
    listaFibonacci.push(anterior)

 proximo = atual + anterior
 anterior = atual 
atual = proximo
}
return listaFibonacci
}

//console.log(fibonacciNumbers())


function graosNoTabuleiro(){
    soma = 0
    graos = 1

    for(let i = 1; i <= 64; i++){
        soma = soma + graos
        graos = graos * 2
       
    }
    return graos
}
console.log(graosNoTabuleiro())