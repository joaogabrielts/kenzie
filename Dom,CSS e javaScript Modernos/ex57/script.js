//array.splice(start, deleteCount, item1, item2, ...);




// Exemplo 1
const originalArray = [1, 2, 3, 4, 5];
const removedElements = originalArray.splice(1, 2, 6, 7);

console.log(originalArray); // Output: [ 1, 6, 7, 4, 5 ]
console.log(`${removedElements}`); // Output: [ 2, 3 ]




// Exemplo 2
const originalArray2 = [ "Maria", "João", "Roberta", "Maurício" ];
const removedElement = originalArray2.splice(2, 1);

console.log(originalArray2); // Output: [ 'Maria', 'João', 'Maurício' ]
console.log(removedElement); // Output: [ 'Roberta' ]
