//array.includes(elemento, indiceInicio);


const numbers = [1, 2, 3, 4, 5];
const includesThree = numbers.includes(3);
console.log(includesThree);


const persons = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 },
    { name: 'Alice', age: 35 }
  ];
  const includesAlice = persons.includes({ name: 'Alice', age: 35 });
  const includesAlice1 = persons.includes( persons => persons.name === 'Alice');
  console.log(includesAlice1);
  console.log(includesAlice);



  //array.indexOf(elemento, indiceInicio);

const numbers1 = [1, 2, 3, 4, 5];
const indexThree = numbers1.indexOf(3);
console.log(indexThree);


const persons1 = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 },
    { name: 'Alice', age: 35 }
  ];
  const indexAlice = persons1.findIndex(person => person.name === 'Alice');
  console.log(indexAlice);

