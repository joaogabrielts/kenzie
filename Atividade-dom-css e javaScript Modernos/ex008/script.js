function somaNumeros(a,b,callback){
    let resultado =  a + b
    callback(resultado);

}
 somaNumeros(2,3,imprimirResultado)


function imprimirResultado(resultado){
 console.log(`o resultando da soma è: ${resultado}`);
}


