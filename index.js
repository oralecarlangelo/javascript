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

// Creating a new Array with map()
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 20, 8, 10]

// Filtering Array Elements with filter()
const filteredNumbers = numbers.filter((num) => num > 3);
console.log(filteredNumbers); // Output: [4, 5]

// Checking if Array Elements satisfy a condition with every()
const allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // Output: true

// Checking if at least one Array Element satisfies a condition with some()
const hasNegative = numbers.some((num) => num < 0);
console.log(hasNegative); // Output: false

// Finding the first Array Element that satisfies a condition with find()
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // Output: 2

// Finding the index of the first Array Element that satisfies a condition with findIndex()
const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(firstEvenIndex); // Output: 1

// Creating a new Array with elements that pass a test using filter() and map()
const filteredDoubled = numbers.filter((num) => num > 2).map((num) => num * 2);
console.log(filteredDoubled); // Output: [20, 8, 10]

// Reducing an Array to a single value with reduce()
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 15

// Checking if a value includes inside the array
console.log(numbers.includes(1)); // Output: true
console.log(numbers.includes(6)); // Output: false