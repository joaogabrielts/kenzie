//Interface é um recurso extremamente utilizado no Typescript e existe com a finalidade de estabelecer tipos a objetos de forma completa.


//Além disso, é possível relacionar interfaces entre si (quando existem objetos dentro de objetos), veja:
// colocamos a interface iPet dentro da interface IPerson

interface iPet {
  type: string;
  name: string;
}

interface iPerson {
  name: string;
  idade: number;
  pet? : iPet; // o ponto de ? faz nao ser obrigatorio o pet 
}

const personA: iPerson = {
  name: "alex",
  idade: 32,
  pet: {
    type: "Gato", 
    name: "harley",
  },
};

const personB: iPerson = {
    name: "maria",
    idade: 25,
    //aqui temos o exemplo que nao esta dando erro pq esta sem o objeto pet 
  };