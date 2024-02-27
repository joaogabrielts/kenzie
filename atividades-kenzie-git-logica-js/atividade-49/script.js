function verticalText (text){
    for(let i = 0; i < text.length; i++){
        console.log(text[i])
    }
}
//verticalText("FronTend")

function incrementText(text){
    let result = ""
    for(let i = 0; i < text.length; i ++){
        result += text[i]
        console.log(result);
    }
}

//incrementText("Backend")

function incrementextBackwards(text){
    let result = ""
    let initialIndice = text.length - 1
   for(let i = initialIndice ; i >= 0 ; i--){
    result = text[i] + result
    console.log(result)
    
   }
}

//incrementextBackwards("Fullstack")


function padEnd(texte, numero, string){
    let result = texte

    for( let i = 0; i <= numero; i++ ){
        result += string
    }
    return result
}

console.log(padEnd("kenzie", 5, "foo")); 


function padEnd2(teste,numero, string){
    let result = teste
    for(let i = 0; i <= numero; i++){
        result += string
    }
    return result
}

console.log(padEnd2("Kata", 8, "*"));