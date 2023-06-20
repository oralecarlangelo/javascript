# Hoisting and Scope

Hoisting and scope are important concepts to understand in JavaScript as they impact how variables and functions are accessed and behave within the program.

## Example 1: Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations.

Example:

```javascript
console.log(message); // Output: undefined
var message = "Hello, world!";
```

In the above example, the variable message is declared and then accessed before its initialization. The variable is hoisted, so the code compiles successfully but logs undefined because the assignment is not hoisted.

### Example 2: Function Scope

JavaScript has function scope, which means variables declared inside a function are only accessible within that function.

Example:

```javascript
function greet() {
  var name = "John";
  console.log("Hello, " + name);
}

greet(); // Output: Hello, John
console.log(name); // Output: ReferenceError: name is not defined
```

In the above example, the variable name is declared within the greet function. It is accessible only within the function scope and not outside of it.

## Example 3: Block Scope

Prior to ES6, JavaScript did not have block scope. Variables declared with var are function-scoped and can be accessed outside of blocks.

Example:

```javascript
function count() {
  for (var i = 1; i <= 5; i++) {
    console.log(i);
  }
  console.log(i); // Output: 6
}

count();
```

In the above example, the variable i is declared within the for loop block, but it is accessible outside of the loop block due to its function scope. The value of i is 6 because it is incremented until the condition becomes false.

## Example 4: Lexical Scope

Lexical scope refers to the visibility of variables based on their physical location within the code. Functions in JavaScript form closures, which means they have access to variables in their outer (enclosing) scope.

Example:

```javascript
function outer() {
  var outerVariable = "I'm from outer function";

  function inner() {
    console.log(outerVariable);
  }

  inner(); // Output: I'm from outer function
}

outer();
```

In the above example, the inner function has access to the outerVariable declared in the outer function. This is possible because of lexical scope, which allows inner functions to access variables from their outer scope.

This documentation provides an overview of hoisting and scope in JavaScript, explaining their concepts and providing code examples to illustrate their behavior. Understanding hoisting and scope helps you write cleaner and more effective JavaScript code.
