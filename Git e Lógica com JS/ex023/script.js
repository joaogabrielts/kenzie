function exibirMensagem(){
    console.log('Olá, mundo!')
}

exibirMensagem()

function calculaAreacircula(){
    const pi = 3.14;
    const areaCirculoDeRaioQuatro = pi * 4 * 4;

    return areaCirculoDeRaioQuatro
}

const resultado = calculaAreacircula();
console.log(resultado)

function umaFuncaoSemRetorno(){
    let mensagem = "Olá, eu sou uma função sem retorno T_T"
    console.log(mensagem);

 
}

const resultado1 = umaFuncaoSemRetorno()
console.log(resultado1)