# Functional Programming

## Pure Functions

A pure function is a function that always produces the same output for the same input and does not have any side effects. It does not modify any external state or rely on external dependencies.

### Example

```javascript
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result); // Output: 5
```

In the above example, the add function is a pure function. It takes two inputs and always returns the same output for the same inputs. It does not modify any external state or rely on external variables.

## Higher-Order Functions

Higher-order functions are functions that can take other functions as arguments or return functions as results. They allow for the composition and abstraction of behaviors.

Example

```javascript
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
```

In the above example, the transformArray function is a higher-order function. It takes an array and a transformation function as arguments. It applies the transformation function to each element of the array and returns a new array with the transformed values.

## Functional Composition

Functional composition is the process of combining multiple functions to create new functions. It allows for the creation of complex behaviors by chaining together simpler functions.

Example

```javascript
function add(a, b) {
  return a + b;
}

function multiplyByTwo(number) {
  return number * 2;
}

function subtractOne(number) {
  return number - 1;
}

const result = subtractOne(multiplyByTwo(add(2, 3)));
console.log(result); // Output: 9
```

In the above example, the result is obtained by composing multiple functions together. The add function adds 2 and 3, the multiplyByTwo function doubles the result, and the subtractOne function subtracts 1 from the multiplied value.
