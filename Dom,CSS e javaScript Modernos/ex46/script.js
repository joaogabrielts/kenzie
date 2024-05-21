const firstName = "John";
const age1 = 25;
const message = `My name is ${firstName} and I am ${age1} years old.`;
console.log(message);
// Saída: "My name is John and I am 25 years old."    

// Antes do ES6
const nonEs6MultilineString = "This is a string \nthat spans across multiple lines \nwithout using Template Literals"

// Pós ES6 com Template Literals
const multiLineString = `This is a string 
that spans across multiple lines 
using Template Literals.`;
console.log(multiLineString);




const age = 18;
const ageStatus = age >= 18 ? "Adulto" : "Menor de idade";
console.log(ageStatus);
// Saída: "Adulto"
