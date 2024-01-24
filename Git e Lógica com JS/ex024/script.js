function somaNumeros(a,b){

    let resultadoSoma = a + b;
    return resultadoSoma
}

let resultado = somaNumeros(5, 9)
let resultado2 = somaNumeros(5,3)
console.log(resultado)
console.log(resultado2)

function subtraiNumero(a,b){
    let resultadoSoma = a - b ;
    return resultadoSoma
}
console.log(subtraiNumero(2, 1));
console.log(subtraiNumero(5, 3));

function calculandoAreaDoCirculo(raio){
    const pi =3.14;
    const areaCirculoDeRaioQuatro = pi * raio * raio;
    return areaCirculoDeRaioQuatro;
}
console.log(calculandoAreaDoCirculo(5))

function calcularAreaTriangulo(base, altura){
    console.log(` base é igual a: ${base}`);
    console.log(` altura é igual a: ${altura}`);

    const areaDoTriangulo = (base * altura) / 2
    return areaDoTriangulo
}

const resultado5  = calcularAreaTriangulo(5, 10)
console.log(resultado5)