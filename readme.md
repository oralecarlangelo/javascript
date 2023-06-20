# Arrays and Array Functions

Arrays are used to store collections of data in JavaScript. Here are some common operations performed on arrays, along with examples of various array functions:

## Arrays

Arrays are created using square brackets `[]` and can hold elements of any type.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];
```

## Accessing Array Elements

Array elements can be accessed using square bracket notation and the index of the element (zero-based index).

Example:

```javascript
console.log(numbers[0]); // Output: 1
console.log(fruits[1]); // Output: banana
```

## Modifying Array Elements

Array elements can be modified by assigning a new value to a specific index.

Example:

```javascript
numbers[2] = 10;
console.log(numbers); // Output: [1, 2, 10, 4, 5]
```

## Array Length

The length property of an array returns the number of elements in the array.

Example:

```javascript
console.log(fruits.length); // Output: 3
```

## Adding and Removing Elements

New elements can be added to an array using the push() method, and elements can be removed using the pop() method.

Example:

```javascript
fruits.push("grape");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "orange"]
```

