function nome_da_sua_funcao1(){
    for(let i = 15; i <= 200; i++){
        console.log(Math.pow(i,2))
    }
}

//nome_da_sua_funcao1()

//----------------------------------------------------------------

function nome_da_sua_funcao2(){
    let somaTotal = 0

   for(let i = 1; i <= 100; i++){
    somaTotal = somaTotal + i 
}
 return somaTotal;
}
//console.log(nome_da_sua_funcao2())
 
//----------------------------------------------------------------



function nome_da_sua_funcao3(){
    for(let i = 0; i < 200; i ++){
        if(i % 4 === 0){
         console.log(i)
        }
    }
}
//nome_da_sua_funcao3()

//----------------------------------------------------------------

function somaEMediaPares(){
    let soma = 0
    let qtdDePares = 0
    for(let i = 50; i <= 70; i++){
        if(i % 2 === 0){
        soma = soma + i
        qtdDePares ++
        }
    }
    const media_aritmetica = soma / qtdDePares
    return `A soma é ${soma} e a média é ${media_aritmetica}.`

}
console.log(somaEMediaPares())