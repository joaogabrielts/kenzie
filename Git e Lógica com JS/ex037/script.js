for(let contador = 0; contador <= 10; contador++){
    console.log(`contador = ${contador}`)
}

for(let contador = 10; contador <= 20; contador++){
    if(contador % 2 == 0){
        console.log(`O numero ${contador} é par`)
    } else if(contador % 2 !== 0){
        console.log(`O número ${contador} é impar`)
    }
}

function paresDeDezAteDezenove(){
    for(let contador = 10; contador < 20; contador ++){
        if(contador % 2 == 0){
            // Esse trecho só será executada caso o contador seja par 
            console.log(`O número ${contador} é par`)
        }
    }
    console.log("Saímos do laço de repetição !!!")
}
