

const greet = (name = "World") => {
    console.log(`Hello, ${name}!`);
  };
  
  greet(); // Output: "Hello, World!"
  greet("John"); // Output: "Hello, John!"


const calculateArea = (width, height = width * 2) => {
    console.log(width * height);
  };
  
  calculateArea(3); // Output: 8
  calculateArea(2, 4); // Output: 8




