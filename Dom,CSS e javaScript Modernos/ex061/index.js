const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];

console.log(array3); // [1, 2, 3, 4, 5, 6]


const array4 = [1, 2, 3];
const array5 = [...array4, 4, 5, 6];

console.log(array5); // [1, 2, 3, 4, 5, 6]


const objeto1 = { nome: "Lucas", idade: 30 };
const objeto2 = { ...objeto1 };

console.log(objeto2); // { nome: "Lucas", idade: 30 }


const objeto3 = { nome: "Lucas", idade: 30 };
const objeto4 = { ...objeto4, profissao: "Programador" };

console.log(objeto4); // { nome: "Lucas", idade: 30, profissao: "Programador" }


const string1 = "JavaScript";
const array6 = [...string1];

console.log(array6 

    
); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

