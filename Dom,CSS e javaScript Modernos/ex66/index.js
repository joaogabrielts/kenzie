const dados = '{"nome": "João", "idade": 25, "cidade": "São Paulo"';
//const objeto = JSON.parse(dados); // Uncaught SyntaxError: Expected ',' or '}' after property value in JSON

console.log('ola');
const dados1 = '{"nome": "João", "idade": 25}'
const objeto1 = JSON.parse(dados1);

if ("cidade" in objeto1) {
    console.log(objeto1.cidade);
} else {
    console.log("Cidade não encontrada.");
}


const dados2 = '{"nome":"João","idade":null}'
const objeto2 = JSON.parse(dados2);

if (objeto2.idade === null) {
  console.log("Idade não fornecida.");
} else {
  console.log(objeto.idade);
}