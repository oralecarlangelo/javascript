// Example 1: Creating a Promise
const promise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
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
// Output (after 2 seconds): Operation completed successfully.

// Example 2: Chaining Promises
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
