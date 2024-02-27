//const listaDeElementos = [1,5,7,9,3, "10", "11", "15", ]

function retornaTodosElementos(){
  alert(`${listaDeElementos}`)
}
//retornaTodosElementos()

function retornaValorEspecifico(numb){
    if(numb >= 0 && numb < listaDeElementos.length){
      return `o valor contido nesta posição é ${listaDeElementos[numb]}`
    }
    return "Valor não encontrado"
}

//console.log(retornaValorEspecifico(2))

function retornarTipoElemento(inteiro){
    for(let i = 0; i < listaDeElementos.length; i++){
        if(i == inteiro){
            if(typeof listaDeElementos[i] == "string"){
                alert(`O elemento ${listaDeElementos[i]} é um elemento do tipo texto`)
            } else if(i == inteiro){
                if(typeof listaDeElementos[i] == "number"){
                    alert(`O elemento ${listaDeElementos [i]} é um elemento do tipo número`)
                }

            }
        }
    }
}

//retornarTipoElemento(6)

function removeUltimoElementoString(){
    if(typeof listaDeElementos.pop() == "string" ){
        return `Elemento deletado com sucesso ${listaDeElementos}`
    }
    return "Falha ao remover o elemento da lista"
}

//console.log(removeUltimoElementoString())


const listaDeElementos = [1,5,7,9,3, "10", "11", "15", ]

function consultaPosicao(valor){
for( let i = 0; i < listaDeElementos.length; i++){
if(listaDeElementos[i] == valor){
    return`O valor procurado está na posição ${i}`
}   
}
return "Valor não encontrado"
}

//console.log(consultaPosicao(8))

function removerElementoEspecifico(valor){
    if(listaDeElementos.includes(valor)){
        listaDeElementos.splice(listaDeElementos.indexOf(valor), 1)
        return`Elemento ${valor} deletado com sucesso`
    }
    return "Elemento não encontrado"
}
//console.log(listaDeElementos);
//console.log(removerElementoEspecifico(3))
//console.log(listaDeElementos);

function inserirNaPosicaoCorreta(valor){
    if(valor <= 10 && typeof listaDeElementos.unshift(valor) == "number"){
     return "Lista atualizada com sucesso "
    } else if(typeof valor == "string"){
        typeof listaDeElementos.push(valor)
        return "Lista atualizada com sucesso1"
    }
}
console.log(listaDeElementos);
console.log(inserirNaPosicaoCorreta(300));
console.log(listaDeElementos)