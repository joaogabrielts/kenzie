//Declarando variáveis com let e const
let myVariable = "Hello";
const myConstant = 42;


//Escopo de variáveis com let e const
function exampleFunction() {
    let myVariable = "Hello";
    if (true) {
      let myVariable = "Goodbye";
      console.log(myVariable); // Output: "Goodbye"
    }
    console.log(myVariable); // Output: "Hello"
  }


//Usando const com objetos e arrays

const myArray = [1, 2, 3];
// Adicionando o inteiro 4 ao array
myArray.push(4);

console.log(myArray);
// Saída: [1, 2, 3, 4]

// Tentando reatribuir o valor de myArray, um erro é levantado
myArray = 'um novo valor';
// Saída: TypeError: Assignment to constant variable.

//Usando let e const em loops
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // Saída:
  // 0
  // 1
  // 2
  // 3
  // 4


  const users = [
    { name: "Ale", module: "M2" },
    { name: "TK", module: "M1" },
  ];
  
  for (let i = 0; i < users.length; i++) {
    const currentUser = users[i];
    console.log(currentUser);
  }
  
  // Saídas:
  // { name: 'Ale', module: 'M2' }
  // { name: 'TK', module: 'M1' }
//