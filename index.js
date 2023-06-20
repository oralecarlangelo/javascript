// Try/Catch

try {
  // Code that might throw an error
  const result = 10 / 0; // Division by zero
  console.log(result); // This line won't be executed
} catch (error) {
  // Code to handle the error
  console.error("An error occurred:", error);
}

// Throwing Errors

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
