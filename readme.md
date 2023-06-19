# Variables (var, let, const)

In JavaScript, variables are used to store and manipulate data. There are three ways to declare variables: `var`, `let`, and `const`.

## var

The `var` keyword was traditionally used to declare variables in JavaScript. Variables declared with `var` have function scope or global scope, depending on where they are declared. They can be reassigned and redeclared within their scope.

```javascript
var name = "John";
name = "Jane"; // Variable can be reassigned
var age = 25;
var age = 30; // Variable can be redeclared within the same scope
```

## let

The let keyword was introduced in ECMAScript 6 (ES6) and provides block scope for variables. Variables declared with let are limited to the block in which they are defined (e.g., within curly braces {}). They can be reassigned but cannot be redeclared within the same scope.

```javascript
let name = "John";
name = "Jane"; // Variable can be reassigned
let age = 25;
let age = 30; // SyntaxError: Identifier 'age' has already been declared
```

## const

The const keyword also came with ES6 and is used to declare variables that have a constant (unchanging) value. const variables are block-scoped and cannot be reassigned or redeclared within the same scope. However, for objects and arrays assigned to const, their internal properties can still be modified.

```javascript
const name = "John";
name = "Jane"; // TypeError: Assignment to a constant variable
const age = 25;
const age = 30; // SyntaxError: Identifier 'age' has already been declared

const numbers = [1, 2, 3];
numbers.push(4); // Valid, the internal array can be modified
numbers = [1, 2, 3, 4]; // TypeError: Assignment to a constant variable
```

It's generally recommended to use let or const instead of var due to their more predictable behavior and block scoping.

Keep in mind that choosing between let and const depends on whether you need the variable to be reassigned. If you know the variable won't be reassigned, using const provides immutability and can help prevent accidental modifications.