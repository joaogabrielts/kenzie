// Sintaxe sem arrow function
//array.filter(function(element, index, array) {
    // código para verificar a condição
   // return true/false;
 // });
  
  // Sintaxe com arrow function
 //array.filter((element, index, array) => {
    // código para verificar a condição
  //  return true/false;
 // });


 const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);


const persons = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 },
    { name: 'Alice', age: 35 }
  ];
  const adults = persons.filter(person => person.age >= 30);
  console.log(adults);

