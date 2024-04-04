let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

function parOuImpar(lista){
let numeroPar = 0
let numeroImpar = 0
for(let i = 0; i < lista.length; i++){
    if(lista[i] % 2 === 0){
        numeroPar ++
    } else if(lista[i] % 2 !== 0){
        numeroImpar++
    }
}
return `A lista recebida possui ${numeroPar} elementos pares e ${numeroImpar} elementos ímpares.
`
}

//console.log(parOuImpar(a));


let b = [1,2,3,4,5,6,7,8,9,10]
let lista10Elements = [57,87,92,1,36,29,48,44,52,66 ]

function imparesComMatriz(lista){
   let numeroImpar = 0
   let totalLista = 0
   for(let i = 0; i < lista.length; i++){
     totalLista++
    if(lista[i] % 2 !== 0){
        numeroImpar++
    }
   }
 let total = (numeroImpar / totalLista) * 100
 return `O total de valores ímpares é ${numeroImpar} e corresponde a ${total}% da lista`
}

console.log(imparesComMatriz(lista10Elements));
  
let listaA = [6,12,18,24,30,36,42,48,54,60]
 let listaB = [5,10,15,20,25,30,35,40,45,50]

function DivisiesPor(a,b){
 let comprimentoA = a.length
 let comprimentoB = b.length
 if(comprimentoA !== 10 || comprimentoB !== 10){
    return "Lista fora dos padrões necessários"
} for(let i = 0; i < a.length; i++ ){
    let listaA = a[i]
    for (let j = 0; j < b.length; j++) {
       let listaB = b[j] 
        if(listaA % 2 === 0 && listaA % 3 === 0 ||   listaB % 5 === 0){
         return  "Valid Lists"
    } 
    }
  
} 
  return "Valores não permitidos encontrados"
    }
//DivisiesPor(listaA,listaB)
console.log(DivisiesPor(listaA,listaB));










//---------------------correção----------------------------------------







