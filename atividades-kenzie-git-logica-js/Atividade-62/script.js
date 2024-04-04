' '
let list = []     
    
function addToList(elemento){
    if(list.length >= 10 || elemento.length > 7){
        return ' não foi possivel inserir este valor '
    } 
    list.push(elemento)
          return `Elemento inserido com sucesso, a lista agora ${list  } ` 
        
}
console.log(addToList(1234567890));




let listaInteiro = [2,3,4,5,7,6,8,9,10,11,12,13,14,15,16]


function matrizQuadrada(a){
  let listaQuadrda =[]
 for(let i =0; i < a.length; i++){ 
    let raiz = a[i] * a[i] 
    listaQuadrda.push(raiz) 
}
return listaQuadrda
}
console.log(matrizQuadrada(listaInteiro));
