//Variáveis com let e const
let minhaVariavel = 'valor inicial';
minhaVariavel = 'novo valor'; // OK

const outraVariavel = 'valor constante';
//outraVariavel = 'novo valor'; // erro



//Arrow Functions
// Function Expression antiga
var soma = function(a, b) {
    return a + b;
  }
  
  // Arrow Function
  const soma1 = (a, b) => a + b;



  //Template literals
  const nome1 = 'João';
const idade1 = 30;
const mensagem = `Olá, meu nome é ${nome1} e eu tenho ${idade1} anos de idade.`;


//Classes

class Cachorro{
    constructor(nome) {
      this.nome = nome;
      console.log(this);
    }
  
    falar() {
      console.log(this.nome + ' late.');
    }
  }
  
  const meuCachorro = new Cachorro('Toby');
 


 //Módulos

  // Exportando uma função
//export function minhaFuncao() {
    // ...
 // }
  
  // Importando a função
  //import { minhaFuncao } from './meu-modulo.js'





  //Desestruturação de objetos e arrays
  const pessoa = {
    nome: 'João',
    idade: 30,
    endereco: {
      rua: 'Rua 1',
      cidade: 'São Paulo'
    }
  };
  
  // Desestruturação de objetos
  const { nome, idade } = pessoa;
  console.log({ nome, idade });
  const { rua, cidade } = pessoa.endereco;
  console.log({ rua, cidade } );
  
  // Desestruturação de arrays
  const numeros1 = [1, 2, 3, 4, 5];
  const [primeiroNumero, segundoNumero] = numeros1;


  //Rest e spread operators

  function minhaFuncao(...argumentos) {
    // argumentos é um array que contém todos os argumentos passados para a função
  }


  function minhaFuncao(a, b, c) {
    // ...
  }
  
  const numeros = [1, 2, 3];
  
 
  console.log( minhaFuncao(...numeros));


  //Promessas
  const minhaPromise = new Promise((resolve, reject) => {
    // lógica assíncrona
  });





