// Arrays
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];

// Accessing Array Elements
console.log(numbers[0]); // Output: 1
console.log(fruits[1]); // Output: banana

// Modifying Array Elements
numbers[2] = 10;
console.log(numbers); // Output: [1, 2, 10, 4, 5]

// Array Length
console.log(fruits.length); // Output: 3

// Adding and Removing Elements
fruits.push("grape");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "orange"]

// Iterating over Array Elements
numbers.forEach((num) => {
  console.log(num);
});
