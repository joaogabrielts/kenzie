
/*
let nome = prompt("Digite seu nome !")
if(nome.length < 5){
    alert("nome é inválido")
}
let presenca = Number(prompt('informe sua presença !'))
let nota = []
let somaNota = 0
        console.log(nota.length);
for(let i = 0; i < 5; i++){
   let  notas = Number(prompt("informe sua nota:"))
    if(notas < 0 || notas > 10){
     alert(" valor é inválido")
    } 
     nota.push(notas)
    }
    for(let j = 0; j < nota.length; j ++){
       somaNota += nota[j]
    
}
let mediaNota = somaNota / 5
if(mediaNota >= 8 && presenca >= 6){
    alert(`A nota do aluno ${nome} é ${mediaNota} e sua presença é ${presenca}: Aluno aprovado!`)
}
alert(`A nota do aluno ${nome} é ${mediaNota} e sua presença é ${presenca}: Aluno reprovado!`) */


//-------------------------------------------------------------------

let nome = prompt("Digite seu nome !")
if(nome.length < 5){
    alert("nome é inválido")
} 
let presenca = parseInt(prompt('informe sua presença !'))
if(presenca < 0 || presenca > 10){
    alert("valor de presença inválido")
}
let materiaNota = {
    notas: [
       {nota:10},
       {nota:8,},
       {nota:10}, 
       {nota:10},
       {nota:9},
       {nota:9},
       {nota:10},
       {nota:8},
       {nota:10},
      {nota:7},
    ]
}
let somaNota = 0
for(let i = 0; i < materiaNota.notas.length; i++){
    somaNota += materiaNota.notas[i].nota
}
let mediaNota = somaNota / 10
if(mediaNota >= 8 && presenca >= 6){
    alert(`A nota do aluno ${nome} é ${mediaNota} e sua presença é ${presenca}: Aluno aprovado!`)
}
alert(`A nota do aluno ${nome} é ${mediaNota} e sua presença é ${presenca}: Aluno reprovado!`) 























