function criaFrase(){
    const nome = prompt("digite seu nome ");
    const comida = prompt("Digite sua comida favorita");

    const frase = " Ola, meu nome é " + nome+ " e eu gosto de comer " + comida

    return frase
}
const fraseMontada = criaFrase()

alert(fraseMontada)

console.log(fraseMontada)