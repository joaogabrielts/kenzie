//Exercício
function calculaIMC(peso, altura){
    let alturaAoQuadrado = altura * altura;
    let calculaIMC = peso / alturaAoQuadrado;
    const resultado = calculaIMC
    return resultado
}
console.log(calculaIMC(80, 1.80))

//Exercício 2
function calculaIdade(nome, anoNascimento, anoFuturo){
    let idade =  anoFuturo - anoNascimento ;
    return `Em ${anoFuturo} ${nome} terá ${idade} anos de idade`
}
console.log(calculaIdade("Pedro", 2002, 2030))

//Exercícios 3

function algarismoEmNumero(n){
    let str = `${n}`;
    let contagem = str.length;


    if(n != parseInt(n)){
        contagem = contagem - 1
    }

    return contagem;
}

console.log(algarismoEmNumero(3.14159265))

function diaDaSemana(n){
    let resultado = ""

    if(n == 1 && n == '1'){
        resultado = 'Domingo';
    } else if(n == 2){
    resultado = 'Segunda-Feira'
    }
    else if(n == 3){
    resultado = 'Terça-Feira'
        }
     else if(n == 4){
      resultado = 'Quarta-Feira'
     }
     else if(n == 5){
      resultado = 'Quinta-Feira'
    }
    else if(n == 6){
        resultado = 'Sexta-feira'
    }
    else if(n == 7){
        resultado = 'Sábado'
    }
     else{
        resultado = 'Valor Inválido'
    }
return resultado

}
console.log(diaDaSemana(7))
