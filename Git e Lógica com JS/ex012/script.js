const nome = "João da Silva";

const nomeEmMaiusculas = nome.toUpperCase();
console.log(nomeEmMaiusculas);

const nomeEmMinusculas = nome.toLowerCase();
console.log(nomeEmMinusculas);


const primeiraString = "olá";
const segundaString = "mundo";

 const terceiraString = primeiraString + " " +
segundaString;
console.log(terceiraString)

const quartaString = primeiraString.concat( " ", segundaString);
console.log(quartaString);

const nome1 = "joão";
const sobrenome = "Teixeira";
const idade = 30;
const cidade = "Rio de Janeiro";

const mensagem = (`Olá, meu nome é ${nome1} ${sobrenome}
e tennho ${idade} anos, e moro em ${cidade}`);
console.log(mensagem)

const numero1 = "10";
const numero2 = "20.5";
 console.log( typeof numero1);

 const resultado1 = parseInt(numero1);
 console.log(resultado1);
 console.log(typeof resultado1);

 const resultado2 = parseFloat(numero2);
 console.log(resultado2);
 console.log(typeof resultado2);