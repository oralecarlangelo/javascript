# JavaScript Foundation Repository

## Error Handling

Error handling is an important aspect of building robust JavaScript applications. It allows for the detection and handling of errors to prevent program crashes and provide meaningful feedback to users.

### Try/Catch

The `try/catch` statement is used to catch and handle errors that occur within a specific block of code. The `try` block contains the code that might throw an error, and the `catch` block is executed if an error occurs.

Example:

```javascript
try {
  // Code that might throw an error
  const result = 10 / 0; // Division by zero
  console.log(result); // This line won't be executed
} catch (error) {
  // Code to handle the error
  console.error("An error occurred:", error);
}
```

In the above example, the try block attempts to divide 10 by 0, which would result in an error. The catch block is executed, and the error object is caught and logged to the console.

## Throwing Errors

Throwing errors allows you to create custom error conditions and handle them appropriately. You can throw errors using the throw statement, along with an error object.

Example:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  const result = divide(10, 0); // Throws an error
  console.log(result); // This line won't be executed
} catch (error) {
  console.error("An error occurred:", error);
}
```

In the above example, the divide function throws an error if the divisor is zero. The error is caught in the catch block, and the error message is logged to the console.
