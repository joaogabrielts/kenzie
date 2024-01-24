function somaReutilizavel(a, b){
    return a + b
    
}
let resultado = 0
resultado = somaReutilizavel(10,10) * 5
console.log(resultado)

function letraInicial(nome, sobrenome){
 const primeiraLetraDoNome = nome[0].toUpperCase()
 const primeiraLetraDoSobrenome = sobrenome[0].toUpperCase()
  
 return `${primeiraLetraDoNome} e ${primeiraLetraDoSobrenome}`
}
console.log(letraInicial('Gabriel', 'Teixeira'))

function nomeCompleto(){ 
    const letrasIniciais = letraInicial('gabriel', 'texeira')

    return `As letras inicias do meu nome completo são  ${letrasIniciais}`
}

console.log(nomeCompleto())

function par(n){
if(n % 2 == 0){
    return true
}
    return false
}
console.log(par(2))

function impar(n){
    if(n % 2 !== 0){
        return true
    }
    return false
}
console.log(impar(3))

function letraProduto(produto){

    const tamanhoProduto = produto.length

    if(par(tamanhoProduto)){
        return "O número de letra deste produto é par "
    } else if(impar(tamanhoProduto)){
        return "O número de letras desde produto é ímpar"
    }

}
console.log(letraProduto("bola"))


