# JavaScript Data Types

JavaScript has several built-in data types to represent different kinds of values. Here are the commonly used data types:

## Numbers

In JavaScript, numbers represent numeric values. They can be integers or floating-point numbers.

Example:

```javascript
const age = 25;
const price = 9.99;
```

## Strings

Strings represent textual data enclosed within single quotes ('') or double quotes ("").

Example:

```javascript
const name = "John Doe";
const message = "Hello, world!";
```

## Booleans

Booleans represent either true or false, indicating logical values.

Example:

```javascript
const isActive = true;
const isLoggedIn = false;
```

Null and Undefined
null and undefined represent the absence of a value.

Example:

```javascript
let variable1 = null;
let variable2; // undefined
```

## Objects

Objects are complex data types that store collections of key-value pairs. They are denoted by curly braces {}.

Example:

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};
```

## Symbols

Symbols are unique and immutable data types used as unique identifiers for object properties.

Example:

```
const id = Symbol("unique identifier");
```

## Unknown

unknown is a type introduced in TypeScript and supported in modern JavaScript. It represents values whose types are not known during development.

Example:

```javascript
let value;
value = 5; // value is now a number
value = "Hello"; // value is now a string
value = true; // value is now a boolean
value = null; // value is now null
value = { name: "John" }; // value is now an object
value = Symbol("unique identifier"); // value is now a symbol
value = undefined; // value is now undefined
```
