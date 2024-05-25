// Sintaxe sem arrow function
//array.reduce(function(accumulator, element, index, array) {
    // código para combinar os elementos
   // return novoAcumulador;
  //}, valorInicial);
  
  // Sintaxe com arrow function
 // array.reduce((accumulator, element, index, array) => {
    // código para combinar os elementos
  //  return novoAcumulador;
 // }, valorInicial);   

  const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum);




const persons = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 },
    { name: 'Alice', age: 35 }
  ];
  const totalAges = persons.reduce((accumulator, person) => accumulator + person.age, 0);
  console.log(totalAges);