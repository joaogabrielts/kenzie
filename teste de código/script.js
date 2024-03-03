

function isPalindrome(str){
    let l = str.length - 1;
    for(let i = 0; i < l;i++){  
        let a = str[l].slice(1).toLowerCase(); // primeira posicao
        let b = str[l - 2].toLowerCase() // segunda posicao
        let x =str[l-1].toLowerCase()
        let y = str[l - i].toLowerCase(); // ultima posicao

        //console.log(a);

        if (x == y){
        return true;
    }
         return false
}

}
//console.log(isPalindrome("bolaeee"));



//-----------------------------------------------------------------------




function isPalindrome(str){
    let 
    //onsole.log(stringSemEspaco);
   //  let l = stringSemEspaco.length - 1;
    for(let i = 0; i < l;i++){
    let x = str[i].toLowerCase()  
    let a = str[l].toLowerCase()
    let b = str[l - 1].toLowerCase()// penultimo
    console.log(a, b);
    let y = str [l - i].toLowerCase() ;
    console.log(y);
    if (x == y && a == b){
        return true;
    } 
    return false
}

}
//console.log(isPalindrome('i torre da derrota'));


const str = 'A itorre da derrota'
let str1Semespaco = str.replace(/\s/g, "") 
console.log(str1Semespaco[1]);

function  palavra (str){
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
        return false
    }
    
}

console.log(palavra("Um senhor doutor"));//

let arr = ['']
for(let i = 0; i < arr.length;i++){
    
}
function vertical (text){
    for(let i = 0; i < text.length;i++ ){
        console.log(text[1]);
    }
}
vertical(arr)






function verticalText (text){
    let array = []
    for(let i = 0; i< text.length; i++){
         let elementoAtual = text[i]
        if(elementoAtual.length == array.length){
            array = elementoAtual
        }
        //let array = text[i].toLowerCase().split('')
        console.log(array);
    }
}
//verticalText("A mala nada na lama")





//palavra("fronttend");

let letra = 'bola'
let array = letra.toLowerCase().split('')
//console.log(array);


/*cadeira
   
.
.
.
.    
A Daniela ama a lei? Nada!

.
A droga do dote é todo da gorda.
A gorda ama a droga.
A grama é amarga.
Aí, Lima falou: “Olá, família!”.
Ajudem Edu, já!
A lupa pula.
*/




//let a2 = "bola"
//let b2 = a2.substr(1,0)
//console.log(a2.su);




/* 
A base do teto desaba.
.A cara rajada da jararaca

A dama admirou o rim da amada.
A Daniela ama a lei? Nada!
Adias a data da saída.
A diva em Argel alegra-me a vida.
A droga do dote é todo da gorda.
A gorda ama a droga.
A grama é amarga.
Aí, Lima falou: “Olá, família!”.

*/




//---------------------------------------------------------------
let arr1 = [1,52,59,16,13,9]	
let ar = [1,2,3]


for(let i =0 ; i < arr1.length; i++){
    maior = Math.max(...arr1)
    console.log();
}
console.log(maior);
ar.push(maior)
console.log(arr1);


  
function teste2(arr){
    let novoArry = [] 
    let maior = 0; 
    let menor = 0; 
    for(let i = 0; i < arr.length ; i++){
     maior = Math.max(...arr)
     menor = Math.min(...arr)
    }
    console.log(maior);
   novoArry.unshift(menor)
   novoArry.push(5)
   //console.log(novoArry[1]);
   return novoArry
}
console.log(teste2(arr1[1]));

    

  
 

   //--------------------------------------------------------------------
    function teste1(arr){
        let novoArray1 = []
        for(let i = 0; i < arr.length; i++ ){
        let max1 = Math.max(i, arr)
        let min = Math.min(...arr)
      // novoArray1 += novoArray1.unshift(min)
       //novoArray1 += novoArray1.push(max1) 
        }    
        console.log(max1);
      // return novoArray1 
    }
    
  //console.log(teste1(arr2));
   
    //adicionar uma if(arr.length >= 0)
   


//----------------------------------------------------------------------

    let arr12 = [1,52,59,16,13,9]	
   
    function arrayMaxMin(arr){
        let novoArray1 = []
        for(let i = 0; i < arr.length; i++){
      
        }
   
  
    }
   // arrayMaxMin()
    
               //  let min = Math.min(arr[i])
             //  novoArray1.unshift(min)
          //  novoArray1.push(max1) 
          //  console.log(arr[0]); 
          //  console.log(arr

    //  novoArray1 += novoArray1.unshift(min)
       //  novoArray1 +=novoArray1.push(max1)   
         //return novoArray1
