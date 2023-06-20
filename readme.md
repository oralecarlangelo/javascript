# Destructuring

Destructuring is a convenient way to extract values from objects or arrays and assign them to variables. It allows you to unpack values from data structures and access them individually.

## Object Destructuring

With object destructuring, you can extract values from an object into separate variables. You can specify the variables you want to extract by using curly braces `{}` and providing the property names that match the object's keys.

Example:

```javascript
const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

const { name, age, city } = person;
console.log(name); // Output: John Doe
console.log(age); // Output: 30
console.log(city); // Output: New York
```

## Array Destructuring

Array destructuring allows you to extract values from an array into separate variables. You can specify the variables you want to extract by using square brackets [] and providing the positions of the elements you want to access.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, second, , fourth] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(fourth); // Output: 4
```
