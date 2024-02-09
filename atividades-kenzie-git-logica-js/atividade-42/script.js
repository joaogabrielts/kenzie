/*let  escolha = parseInt( prompt("Digite o código do produto ou 0 para sair "))
let valorTotalDoProduto = 0;
let Quantidade = 0;

while (escolha != 0) {100

    if(escolha == 100){
        Quantidade = parseInt(prompt("Qual é a quatidade desse item?"))
        valorTotalDoProduto += Quantidade * 1.20
    }else if(escolha == 101){
        Quantidade = parseInt(prompt("Qual é a quantidade desse item?"))
        valorTotalDoProduto += Quantidade * 1.20
    } else if(escolha == 102){
        Quantidade = parseInt(prompt(" Qual é a quantidade desse item? "))
        valorTotalDoProduto +=  Quantidade * 1.30
    } else if(escolha == 103){
        Quantidade = parseInt(prompt(" Qual é a quatidade desse item ?"))
        valorTotalDoProduto += Quantidade * 1.50
    } else if(escolha == 104){
        Quantidade = parseInt(prompt("Qual é a quantidae desse item ?"))
        valorTotalDoProduto += Quantidade * 1.20
    } else{
        alert('Produro indisponível')
    }
    escolha = parseInt(prompt("Digite o código do produto ou 0 para finalizar o pedido"))

}
alert(` Seu pedido ficou em R$ ${valorTotalDoProduto} reais`)*/


//-------------------------------------------------------

/*let valor = parseInt(prompt("Digite um valor de 0 á 10!"))


while(valor > 10 ){
  alert(" Valor incorreto")

  valor = parseInt(prompt("digite o valor novamente !"))
}
alert("Saiu do laçco de repetição ")
*/
//------------------------------------------------------

/*
let nomeUsuario = prompt('Digite seu nome!')
let senhaUsuario = prompt('Digite sua senha!')


while(nomeUsuario == senhaUsuario){
    alert('Erro: Nome de usuario e senha são iguais ');
     nomeUsuario = prompt('Digite seu nome!') 
     senhaUsuario = prompt('Digite sua senha!')


}

alert("Saiu do laço de repetoção"); */

//-------------------------------------------------------


/*let numero = parseInt(prompt("Digite numero"))
let soma= 0;
let quantidade = 0;

while(numero >= 0 && numero <= 10  ){
 soma += numero
 quantidade++
 numero =parseInt(prompt('digite seu numero'))
}


alert(`A  soma é : ${soma} e a  média é: ${parseInt(soma/quantidade)}`)*/



/*
let eleicao = prompt("Digite a letra correspondentea ao seu candidato ou  X para ver cada voto de cada candidato ")


let a = "candidato_A "
let b = ""
let c = ""

let quantidadeDeVoto
let quantidadeDeVotoA = 0;

while(eleicao == a && eleicao == b && eleicao == c){

    if(eleicao == a){
         quantidadeDeVoto = parseInt(prompt('O número de votos para o canditato?'))
         quantidadeDeVotoA += quantidadeDeVoto + 1
    } else{
        alert('Candidato não encntrado!')
    }
eleicao = prompt("Digite a letra correspondentea ao seu candidato ou  X para ver cada voto de cada candidato ")
}

alert(`seu voto foi em ${quantidadeDeVotoA}`) */


let candidato_A = 0;
let candidato_B = 0;
let candidato_C = 0;

let voto = prompt('Digite seu voto (A,B ou C')

while(voto != 'x'){
    if(voto == 'A'){
        candidato_A++;
        alert("Voto registrado com sucesso")
    }else if(voto == 'B'){
        candidato_B++
        alert("Voto registrado com sucesso")
    }else if(voto == 'C'){
        candidato_C++
        alert("Voto registrado com sucesso")            
    }else{
        alert('Candidato não encontrado')
    }

voto = prompt('Digite seu voto (A,B ou C')
}

alert(`Quantidade de votos do candidato A ${candidato_A}\n do candidato B ${candidato_B} \n e do candidato C ${candidato_C}`)

