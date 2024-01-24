//Escopo global
let  minhaVariavel = 'Estou no escopo global'

function primeiraFuncao(){
    console.log(minhaVariavel)
}

primeiraFuncao()

 // Escopo de Função
function minhaFuncao(){
    let minhaVariavel2 = 'Estou no escopo da minha funcao'
    function outraFuncao(){
        console.log(minhaVariavel2)
    }
    // Esta dentro da  minhaFuncao
    outraFuncao()
    console.log(minhaVariavel2)
} 

minhaFuncao()
// não vai funcionar porque a variavel esta dentro minhaFuncao
//onsole.log(minhaVariavel2)

// Escopo do Bloco

const idade  = 18
const temCNH = true

if( idade >= 18 ){
    //Variavel sendo declarada no escopo do bloco if
    let podeDirigir = true
     if(temCNH){
      // A variavel pode ser acessada de dentro desse bloco de if
      //Isso acontece porque esse bloco esta dentro do escopo 
      console.log(podeDirigir)
     }
}