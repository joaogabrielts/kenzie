
let array1 = [10, 5, 20, 15]
function encontrarMaiorNumero(array){
    let maiorNumero = [0]

    for(let i = 1; i < array.length; i++){
        if(array[i] > maiorNumero){
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}
//console.log(encontrarMaiorNumero(array1));



function encontrarMenorNumero(numb){
    let menorNumero = numb[0]
    for(let i = 1; i < numb.length; i++){
        if(numb[i] < menorNumero){
            menorNumero = numb[i]
        }
    }
    return menorNumero
}

//console.log(encontrarMenorNumero(array1));



  function encontrarMaiorEMenor(numero){
    let NumeroMaiorMenor = numero[0]
    let maior = 0
    let menor = 0
    for(let i = 1; i < numero.length; i++){
       
        if(numero[i] < NumeroMaiorMenor){
              menor = numero[i]
              

        } else if(numero[i] > NumeroMaiorMenor){
               maior  = numero[i]
            }
        
    }
    NumeroMaiorMenor = menor
    NumeroMaiorMenor = maior
    console.log(numero);
    return NumeroMaiorMenor
  }
  console.log(encontrarMaiorEMenor(array1));

  function arrayMaxMin(arr){
    let novoArry = arr[0] 
    let maior = 0;
    let menor = 0 
    for(let i = 0; i < arr.length ; i++){
        console.log(arr[i]);
      maior = Math.max(arr[i])
      console.log(`Maior numero é ${maior}`);
     menor = Math.min( ...arr)
      //console.log(menor)
    
    }
   // novoArry.unshift(menor)

   // novoArry.push(maior)
   return novoArry
}
console.log(arrayMaxMin(array1[1]));

function encontrarMaiorEMenorNumero(array) {
    let maiorNumero = array[0];
    let menorNumero = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
        if (array[i] < menorNumero) {
            menorNumero = array[i];
        }
    }

    return [menorNumero,maiorNumero];
}

let array = [10, 5, 20, 15];
let resultado = encontrarMaiorEMenorNumero(array);
console.log("O maior e o menor número são:", resultado[0]);

function isPalindrome (str){
    let resultAoContrario = ""
    let palavraAoNormal = "" 
    let len = str.length - 1
    for(let i = len; i >= 0; i--){
        resultAoContrario += str[i]    
    }
     let palavra = resultAoContrario.toLowerCase().replace(/\s/g, "") 
     console.log(palavra);
     let palavraFrase = str.toLowerCase().replace(/\s/g, "") 
    
     if(palavra === palavraFrase){
         return true
     }
     return false    
}
 console.log( isPalindrome("  A sacada da casa"));

//str.replace(/\s/g, "") 
 /* 
 palavra e frase true 
 Ovo
 Ursinho
 Radar
Arara
    
 palavra e frase false 
 	Kenzie
    Cadeira
    Monitor
   	
   	 Um senhor doutor
    
    function  isPalindrome (str){
    let l = str.length ;
    for(let i = 0; i < l;i++){
        let primeiroLetra = str [0].toLowerCase() ;
        console.log(primeiroLetra);
        let segundaLetra = str[1].toLowerCase()  
        console.log(segundaLetra);
        let segundaFrase = str[i + 2].toLowerCase() 
        console.log(segundaFrase);
        let penultimoLetra = str[l - 2].toLowerCase()
        console.log(penultimoLetra);
         let ultimaLetra = str[l - 1].toLowerCase()
        console.log(ultimaLetra);
    if (primeiroLetra == ultimaLetra && segundaLetra == penultimoLetra || segundaFrase == penultimoLetra){
        return true;
        } 
    
    }
   return false
}
let le = "a sacada da casa"
let la = "asacad ad casa a"
console.log(le == la );
    
    */