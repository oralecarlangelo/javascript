// Function Declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John"); // Output: Hello, John!

// Function Expression
const greetExpression = function (name) {
  console.log(`Hello, ${name}!`);
};

greetExpression("Jane"); // Output: Hello, Jane!

// Arrow Function
const greetArrow = (name) => {
  console.log(`Hello, ${name}!`);
};

greetArrow("Alice"); // Output: Hello, Alice!
