// Example 1: Callback Function
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("John", sayGoodbye);
// Output:
// Hello, John!
// Goodbye!

// Example 2: Callback with Asynchronous Operation
function fetchData(callback) {
  setTimeout(() => {
    const data = "This is the fetched data.";
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log(`Processing data: ${data}`);
}

fetchData(processData);
// Output (after 2 seconds):
// Processing data: This is the fetched data.
