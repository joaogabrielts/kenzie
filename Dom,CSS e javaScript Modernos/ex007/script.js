function imprimeMensagem(mensagem,callback){
console.log(mensagem);
callback()
}


imprimeMensagem('ola,mundo', function(){
    console.log("callback executado");
})

const letras = [ "a","b","c","d","e"]

function mostraItems(array,callback){
    for(let i = 0 ;i < array.length ; i++){
        const letraAtual = [array[i]]
        callback(letraAtual)
    }
}

function fazConsoleLog(item){
console.log(item);
}

mostraItems(letras,fazConsoleLog)
