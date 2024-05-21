const array1 = [1, 2, 3, 4, 5];

// forEach()
array1.forEach(element => {
    console.log(element);
});
// Saída: 1, 2, 3, 4, 5

// map()
const squaredArray = array1.map(element => {
    return element * element;
});
console.log(squaredArray);
// Saída: [1, 4, 9, 16, 25]

// filter()
const evenNumbers = array1.filter(element => {
    return element % 2 === 0;
});
console.log(evenNumbers);
// Saída: [2, 4]

// find()
const firstEvenNumber = array1.find(element => {
    return element % 2 === 0;
});
console.log(firstEvenNumber);
// Saída: 2

// reduce()
const sum = array1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum);
// Saída: 15


// push()
const array2 = [1, 2, 3];
array2.push(4, 5);
console.log(array2);
// Saída: [1, 2, 3, 4, 5]

// pop()
const array3 = [1, 2, 3, 4, 5];
array3.pop();
console.log(array3);
// Saída: [1, 2, 3, 4]

// shift()
const array4 = [1, 2, 3, 4, 5];
array4.shift();
console.log(array4);
// Saída: [2, 3, 4, 5]

// unshift()
const array5 = [2, 3, 4, 5];
array5.unshift(1);
console.log(array5);
// Saída: [1, 2, 3, 4, 5]

// splice()
const array6 = [1, 2, 3, 4, 5];
array6.splice(2, 0, 6);
console.log(array6);
// Saída: [1, 2, 6, 3, 4, 5]



// indexOf()
const index = array1.indexOf(3);
console.log(index);
// Saída: 2

// includes()
const hasThree = array1.includes(3);
console.log(hasThree);
// Saída: true

// sort()
const array7 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
array7.sort((a, b) => a - b);
console.log(array7);
// Saída: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// reverse()
const array8 = [1, 2, 3, 4, 5];
array8.reverse();
console.log(array8);
// Saída: [5, 4, 3, 2, 1]

// slice()
const slicedArray = array1.slice(1, 4);
console.log(slicedArray);
// Saída: [2, 3, 4]


//const array1 = [1, 2, 3, 4, 5];




