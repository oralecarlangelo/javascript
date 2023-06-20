# Functions

Functions are reusable blocks of code that perform a specific task. They allow you to write code once and use it multiple times. In JavaScript, there are different ways to define functions.

## Function Declaration

Function declarations are defined using the `function` keyword followed by the function name and a set of parentheses containing optional parameters. The function body is enclosed in curly braces `{}`.

Example:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John"); // Output: Hello, John!
```

## Function Expression

Function expressions are created by assigning an anonymous function to a variable. The function is defined without a name and can be stored in a variable for later use. The variable can then be invoked as a function.

Example:

```javascript
const greetExpression = function (name) {
  console.log(`Hello, ${name}!`);
};

greetExpression("Jane"); // Output: Hello, Jane!
```

## Arrow Function

Arrow functions are a concise way to write functions in JavaScript. They are defined using arrow (=>) notation and do not require the function keyword. Arrow functions have a shorter syntax and lexically bind this to the surrounding context.

Example:

```javascript
const greetArrow = (name) => {
  console.log(`Hello, ${name}!`);
};

greetArrow("Alice"); // Output: Hello, Alice!
```
