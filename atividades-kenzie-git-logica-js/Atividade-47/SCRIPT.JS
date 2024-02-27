function tipoString(str){
    let arr = []
    if(str.length >= 5){
        arr.push(str)
    }
    return arr
}

//console.log(tipoString("Ola, mundo !"))

function tipoNUmber(numb){
    let arr = ["Hermanoteu", "Olonéia", "Migaleteia","Godart"]
    if(numb >= 0 && numb < arr.length){
      return arr[numb]
}
  return "Valor não encontrado"
}
//console.log(tipoNUmber(0));

function numeroInteiro(numb){
let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

if(arr[numb] % 2 === 0){
 return "O valor encontrado nesta posicão é par"
} 
 return " O valor encontrado nesta posição é impar"
}

//console.log(numeroInteiro(3))
//------------------------------------------------------

let nomes = ["Pedro" , "Rafael", "José"]

function maiorNome (nomes){
    let palavra =  ''
    for(let i = 0; i < nomes.length; i++){
        const elementoAtual = nomes[i]
        if(elementoAtual.length > palavra.length){
            palavra = elementoAtual
        }
        
    }
    return `O nome ${palavra} é o maior da lista`
}

const palavraFinal = maiorNome(nomes)

//console.log(palavraFinal)

//-------------------------------------------------------

 let numero3 = {
    lista : [1, 4, 6, 9, 11, 9]
}
function numeros(numb){
    let soma1 = numb.lista.at(-1)
    let soma2 = numb.lista.at(-2)
     let soma = soma1 + soma2
     if(soma % 2 === 0){
        return "A soma é um múltiplo de 2"
     }
     return " A soma não é um múltiplo de 2"
 
}
//console.log(numeros(numero3)) 
 
//-------------------------------------------------------

//let numeros =[1, 4, 6, 9, 11, 8]
function somaDeNumeros (numb){
    let soma1 = numb[numb.length - 1]
    let soma2 = numb[numb.length - 2]
    let somaTotal = soma1 + soma2
    if(somaTotal % 2 === 0){
        return " A soma é um múltiplo de 2"
    }
    return " A soma não é um múltiplo de 2"
}
//console.log(somaDeNumeros(numeros))

let nomes2 = ["Pedro", "Rafael" , "José" , "Carla", "Maria", "Josef" , "Raquel"]
function stringEnumber(nomes2, string, position){
    let mane = string.toLowerCase()
    let nameOntheList = nomes2[position].toLowerCase()

    if(mane === nameOntheList){
        return "Acertei"
    }
    return "Não é quem eu pensava"
}

//console.log(stringEnumber(nomes2, "pedro", 0));

//-------------------------------------------------------


let numeros4 = [1,2,3,4,5,6,10,7]
let numeros5 = [5,7,9,4,2,3,9]

function qualEmaior(arr1, arr2){
    let ultimo = arr1[arr1.length - 1]
    let ultimo2 = arr2[arr2.length - 1]
    if(arr1.length > arr2.length){
        return `A maior lista é a lista cujo último número é ${ultimo}`
    } else if(arr2.length > arr1.length){
        return `A maior lista é a lista cujo último número é ${ultimo2}`
    }
}
console.log(qualEmaior(numeros4,numeros5 ));
