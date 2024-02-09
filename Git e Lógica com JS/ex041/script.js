function tabuadaDoDoisSomenteImpares(){

    let numero = 1;

    while( numero <= 10 ){
        console.log(`Valor atual do contador : ${numero}`)

        console.log(`2 x ${numero} = ${numero * 2}`);

       
     numero += 2
    }
     console.log("saimos do loop")
}

//tabuadaDoDoisSomenteImpares()


function tabuadaDoDoisSomentePares(){

    let numero = 0

    while( numero <= 10){
        console.log(`Valor atual do contador: ${numero}`)

        if(numero % 2 == 0){
            console.log(`2 x ${numero} = ${numero * 2} `)
        }
        numero ++
    }
    console.log(" Saimos do loop")
}

tabuadaDoDoisSomentePares()