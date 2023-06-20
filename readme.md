# Promises

Promises are a powerful feature in JavaScript for handling asynchronous operations. They provide a way to write cleaner and more manageable code when dealing with operations that may take some time to complete.

## Example 1: Creating a Promise

A Promise represents the eventual completion or failure of an asynchronous operation. It can be in one of three states: `pending`, `fulfilled`, or `rejected`.

Example:

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("Operation completed successfully.");
    } else {
      reject("Operation failed.");
    }
  }, 2000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

In the above example, a Promise is created to simulate an asynchronous operation that takes 2 seconds to complete. The Promise will either resolve with a success message or reject with an error message based on the value of the success variable. The .then() method is used to handle the resolved state, and the .catch() method is used to handle the rejected state.

## Example 2: Chaining Promises

Promises can be chained together to perform a sequence of asynchronous operations.

Example:

```javascript
const multiply = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = num * 2;
      resolve(result);
    }, 1000);
  });
};

multiply(3)
  .then((result) => {
    console.log(result); // Output: 6
    return multiply(result);
  })
  .then((result) => {
    console.log(result); // Output: 12
  })
  .catch((error) => {
    console.error(error);
  });
```

In the above example, the multiply function returns a Promise that resolves with the result of multiplying the given number by 2. The Promises are chained together using the .then() method, allowing the subsequent .then() to operate on the resolved value of the previous Promise.

Promises provide a more elegant and readable way to handle asynchronous operations, making the code easier to understand and maintain.
