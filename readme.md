# Module Pattern

The Module pattern is a design pattern in JavaScript that allows encapsulation of code by creating private and public members. It helps to organize code, avoid naming collisions, and promote code reusability.

## Usage

To use the Module pattern, follow these steps:

1. Create an immediately-invoked function expression (IIFE) that serves as the module.
2. Inside the module, define private variables and functions that are inaccessible from the outside.
3. Define public variables and functions that can be accessed and used by other parts of the program.
4. Return an object or a set of functions from the module, representing the public API.

## Example

```javascript
const Module = (function () {
  // Private variables and functions
  let privateVar = "I am private";

  function privateFunction() {
    console.log("This is a private function");
  }

  // Public API
  return {
    publicVar: "I am public",
    publicFunction: function () {
      console.log("This is a public function");
    },
  };
})();

console.log(Module.publicVar); // Output: I am public
Module.publicFunction(); // Output: This is a public function
console.log(Module.privateVar); // Output: undefined
Module.privateFunction(); // Output: TypeError: Module.privateFunction is not a function
```

In the example above, we create a self-invoking function that acts as a module. Inside the module, we define private variables and functions that are inaccessible from the outside. We also define public variables and functions that can be accessed and used by other parts of the program.

The Module object serves as the public API of the module, exposing the public variables and functions to the outside world. The private variables and functions are encapsulated within the closure of the self-invoking function, making them inaccessible from outside the module.

To use the module, we access its public variables and functions using the Module object. Attempting to access or call private variables or functions will result in an error.

By using the Module pattern, we can control the visibility and accessibility of variables and functions, promoting modular code organization and reducing potential naming conflicts.
