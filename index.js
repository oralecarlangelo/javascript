// Object Destructuring
const person = {
  name: "John Doe",
  age: 30,
  city: "New York"
};

const { name, age, city } = person;
console.log(name); // Output: John Doe
console.log(age); // Output: 30
console.log(city); // Output: New York

// Array Destructuring
const numbers = [1, 2, 3, 4, 5];

const [first, second, , fourth] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(fourth); // Output: 4
