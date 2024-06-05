const dados = '{"nome": "João", "idade": 25, "cidade": "São Paulo"}';
const objeto = JSON.parse(dados);

console.log(objeto); // { nome: "João", idade: 25, cidade: "São Paulo" }

const objeto1 = { nome: "João", idade: 25, cidade: "São Paulo" };
const dados1 = JSON.stringify(objeto1);

console.log(dados1); // '{"nome": "João", "idade": 25, "cidade": "São Paulo"}'



const dados2 = '{nome: "João", idade: 25, cidade: "São Paulo"}';
const objeto2 = JSON.parse(dados2);

// Uncaught SyntaxError: Expected property name or '}' in JSON at position 1

const objeto3 = {
    nome: "Cláudio",
    idade: undefined,
    funcao: () => {
      console.log("Isso é uma função");
    },
  };
  
  const dados3 = JSON.stringify(objeto);
  
  console.log(dados3); // '{"nome":"Cláudio"}'7


  const pessoa = { nome: "Maria", idade: 31, cidade: "Rio de Janeiro" };
const dados5 = JSON.stringify(pessoa);


const dados4 = '{"nome": "Maria", "idade": 31, "cidade": "Rio de Janeiro"}';
const pessoa4 = JSON.parse(dados4)

console.log(pessoa.nome); // "Maria"
console.log(pessoa.idade); // 31
console.log(pessoa.cidade); // "Rio de Janeiro"

console.log(pessoa['nome']); // "Maria"
console.log(pessoa['idade']); // 31
console.log(pessoa['cidade']); // "Rio de Janeiro"
pessoa.profissao = "programadora";
console.log(pessoa); // { nome: "Maria", idade: 31, cidade: "Rio de Janeiro", profissao: "programadora" }

delete pessoa.cidade;
console.log(pessoa); // { nome: "Maria", idade: 31, profissao: "programadora" }
