// Sintaxe sem arrow function
array.forEach(function(element, index, array) {
    // código a ser executado para cada elemento
  });
  
  // Sintaxe com arrow function
  array.forEach((element, index, array) => {
    // código a ser executado para cada elemento
  });


  const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});

const persons = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 },
    { name: 'Alice', age: 35 }
  ];
  
  persons.forEach(function(person) {
    console.log(person.name + ' has ' + person.age + ' years old.');
  });