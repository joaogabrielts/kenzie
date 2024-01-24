function positivoNegativo(um){
 if(um>0){
    return "p"
 } else( um <= 0  );{
    return "N"
 }
 
}
console.log(positivoNegativo(3))



function quantidadeDeDigitos(numero){

 return numero.toString().length

}
console.log(quantidadeDeDigitos(10))



function somaNumeros(numA, numB){
    if(numA>numB){
        return numA + numB
    }else{
        return "O primeiro número não é maior que o segundo"
    }
}
console.log( somaNumeros(6, 5))


function palavraLetra(palavra, Letra){

if(palavra[0].toLowerCase() == Letra.toLowerCase()){
    return true
} else{
    return false
}
}
console.log( palavraLetra('fone', 'F'))

function atendimento(horaAtendimento){   if(horaAtendimento >= 11 && horaAtendimento  < 23){
    return "O /pergunta está em horário de funcionamento"
}else{
    return "O /pergunta não está em horário de funcionamento."
}

}
console.log(atendimento(23))