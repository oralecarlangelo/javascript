// Example 1: Hoisting
console.log(message); // Output: undefined
var message = "Hello, world!";

// Example 2: Function Scope
function greet() {
  var name = "John";
  console.log("Hello, " + name);
}

greet(); // Output: Hello, John
console.log(name); // Output: ReferenceError: name is not defined

// Example 3: Block Scope
function count() {
  for (var i = 1; i <= 5; i++) {
    console.log(i);
  }
  console.log(i); // Output: 6
}

count();

// Example 4: Lexical Scope
function outer() {
  var outerVariable = "I'm from outer function";

  function inner() {
    console.log(outerVariable);
  }

  inner(); // Output: I'm from outer function
}

outer();
