// Sintaxe sem arrow function
//array.map(function(element, index, array) {
    // código a ser executado para cada elemento
   // return novoElemento;
  //});
  
  // Sintaxe com arrow function
  ///array.map((element, index, array) => {
    // código a ser executado para cada elemento
   // return novoElemento;
  //});  
  
  const numbers = [1, 2, 3, 4, 5];
  const doubleNumbers = numbers.map((number) => {
    return number * 2;
  });
  console.log(doubleNumbers);



  const persons = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 },
    { name: 'Alice', age: 35 }
  ];
  const personsWithId = persons.map((person, index) => {
    person.id = index + 1
    return person;
  });
  console.log(personsWithId);



  const newPerson = persons.map((elementoAtual, indice) => {
    const data = {
       name: elementoAtual.name,
       age: elementoAtual.age - 2,
       id: indice +1    
    }

    return data
  })


  console.log(newPerson);