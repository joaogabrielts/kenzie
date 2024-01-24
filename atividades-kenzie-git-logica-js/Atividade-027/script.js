function verificaNumero(num){ // = -12
    let str = '';

    if(num % 2 == 0){
        str = 'par';
    } else {
        str = 'impar';
    }

 str += ' ,'
 
 if (num > 0) {
    str += ' positivo '
 } else {
     str += ' negativo ';
 }

 str += ' e ';

 if (num === parseInt(num)) {
 str += ' não possui casas decimais';
 } else {
    str += 'possui casas decimais'
 }

 str = ' O numero ' + num + ' é ' + str;

 return str;
}
console.log(verificaNumero(12));

// EXERCICIOS 2 

let valor = 18;
let result = valor / 2 // valor = 9
console.log(result) // result = 9

result = result /3 // result = 3
console.log(result)  // result = 3

let isPair = (result == 3) // true
console.log(isPair)// true

if (isPair) {
    result = result * 6; // 3x6=18
} else{
    result = result * 12
}
console.log(result)


function algarismosEmUmNumero(n){
    let str = `${n}`;// str = 3.141517
    let contagem = str.length;// para mostra quantidade de digitos
   console.log(contagem);// contos digitos 8

    if(n != parseInt(n)){// O numero e diferente de numero inteiro
      console.log("Entrou aqui");// entrou aqui pq eles são diferentes
      contagem = contagem - 1;// tirando um digito da contagem, va fica igual a: 7

    }

    console.log(contagem);//7

    return contagem
}

algarismosEmUmNumero(3.141517)
