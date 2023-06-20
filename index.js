// Pure Functions

function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result); // Output: 5

// Higher-Order Functions

function multiplyByTwo(number) {
  return number * 2;
}

function transformArray(array, transformation) {
  const transformedArray = [];
  for (let i = 0; i < array.length; i++) {
    transformedArray.push(transformation(array[i]));
  }
  return transformedArray;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = transformArray(numbers, multiplyByTwo);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Functional Composition

function add(a, b) {
  return a + b;
}

function multiplyByTwo(number) {
  return number * 2;
}

function subtractOne(number) {
  return number - 1;
}

const fcResult = subtractOne(multiplyByTwo(add(2, 3)));
console.log(result); // Output: 9
