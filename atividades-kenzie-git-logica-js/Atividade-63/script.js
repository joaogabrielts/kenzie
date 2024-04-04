
let caixaSuprimentos = [
   higiene = ['papel', 'lava roupa', 'pasta de dente','detergente','shampoo'], 
   alimentacao = ['Pão de forma', 'Pão de Sal', 'Salsicha', 'Água', 'Molho de Tomate'],
   farmacia = ['dipirona', 'dorflex','antialergico','cimegripe','remedio pra garganta '],
   lazer = ['celular', 'videoGame','bola de futebol', 'bola de basquete', 'bola'],
  
]

function caixaDeSuprimentos(caixa){ 
if(caixa.length === 4){
    for(let i = 0; i < caixa.length; i++){
        if(caixa[i].length === 5){
            return "Podemos ir acampar"
            }else if(caixa[i].length > 5){
             return "Tem itens demais, não precisamos de tantos." 
            }else if(caixa[i].length < 5){
             return "Precisamos de mais itens desta seção." 
         }  
    }
}else if(caixa.length < 4){
    return "Algum amigo ainda não retornou com os itens."
} else if(caixa.length > 4){
   return "Acho que temos um intruso."
}
}

console.log(caixaDeSuprimentos(caixaSuprimentos)); 