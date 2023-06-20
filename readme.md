# Array Functions

JavaScript provides several built-in array functions to perform operations on arrays. Here are some commonly used ones:

## forEach()

The forEach() function executes a callback function for each element in the array.

Example:

```javascript
numbers.forEach((num) => {
  console.log(num);
});
```

## map()

The map() function creates a new array by applying a callback function to each element of the original array.

Example:

```javascript
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 20, 8, 10]
```

## filter()

The filter() function creates a new array with elements that satisfy a certain condition specified in a callback function.

Example:

```javascript
const filteredNumbers = numbers.filter((num) => num > 3);
console.log(filteredNumbers); // Output: [4, 5]
```

## every()

The every() function checks if all elements in the array satisfy a specified condition.

Example:

```javascript
const allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // Output: true
```

## some()

The some() function checks if at least one element in the array satisfies a specified condition.

Example:

```javascript
const hasNegative = numbers.some((num) => num < 0);
console.log(hasNegative); // Output: false
```

## find()

The find() function returns the first element in the array that satisfies a specified condition.

Example:

```javascript
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // Output: 2
```

## findIndex()

The findIndex() function returns the index of the first element in the array that satisfies a specified condition.

Example:

```javascript
const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(firstEvenIndex); // Output: 1
```

## reduce()

The reduce() function applies a callback function to reduce an array to a single value by iteratively combining elements.

Example:

```javascript
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 15
```

## includes()

The includes() function checks if an array includes a specific element and returns true or false accordingly.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(1)); // Output: true
console.log(numbers.includes(6)); // Output: false
```
