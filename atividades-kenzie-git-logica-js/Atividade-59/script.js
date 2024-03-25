
let ganhador = {
  nome: 'Adamastor',
  nascimento: '16/09/1986',
  cpf: '123.321.789-98',
  estadoCivil: 'Casado'
}



function  ganhadorOuNao(nome, cpf){
    ganhador
  primeiraLetraMaiuscula  = ''
   for(let i = 0; i < nome.length; i++){
    primeiraLetraMaiuscula = nome[0].toUpperCase() + nome.slice(1).toLowerCase()
   } if(ganhador.nome === primeiraLetraMaiuscula && ganhador.cpf === cpf){
    return  "É ganhador!"
   }
   return "Não é ganhador!"
}
console.log(ganhadorOuNao('Adamastor', '123.321.789-98' ));


let naoGanhador2 = {
    nome: 'Gabriel',
    nascimento: '16/09/1986',
    cpf: '123.321.679-98',
    estadoCivil: 'solteiro'
  }

let listaNaoGanhador = []

function naoGanhador(pessoa){
    if(ganhadorOuNao(pessoa.nome, pessoa.cpf) === "Não é ganhador!"){
        listaNaoGanhador.push(pessoa)
    }

    return `vieram reclamar o prêmio ${listaNaoGanhador.length} pessoa(s)`
}

console.log(naoGanhador(naoGanhador2));
  