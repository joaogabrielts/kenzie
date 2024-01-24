function soma(a, b){
    return a + b;
}
const minhaVariavel = soma
console.log(minhaVariavel(4, 2));

function par(num){
    if(num % 2 == 0){
        return true
    }
    return false
}
console.log(par(2))

function nomesPares(etiqueta){
    if(par(etiqueta.length)){
        return "verde"
    }
    return "vermelho"
}
console.log(nomesPares("sabonete"))