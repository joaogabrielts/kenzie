function isPositivo(number){
    if(number > 0){
      
        return  true
     
    } else{
        return false
    }
    
}
console.log(isPositivo(0))

function isPositivo2(number){
    if(number > 0){
        return true
        console.log("Esse console não vai aparecer porque está depois de um return ")
    } else{
        return false

        console.log("Esse console não vai aparecer porque está depois de um return ")
    }
}


function semElse(numero){
    if(numero > 0){
        return true
    } // podemos so usar o return false sem usar o else, mas sempre lembra da legibilidade do codigo, escolher a melhor opção 
    return false 
}