# Callbacks

In JavaScript, a callback is a function that is passed as an argument to another function and is invoked after a certain operation or task is completed. Callbacks are commonly used for handling asynchronous operations and achieving better control flow.

## Example 1: Callback Function

A callback function can be used to execute code after a specific task is completed.

Example:

```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("John", sayGoodbye);
```

In the above example, the greet function takes a name parameter and a callback function. After greeting the person by name, the callback function sayGoodbye is invoked, resulting in the message "Goodbye!" being logged to the console.

## Example 2: Callback with Asynchronous Operation

Callbacks are commonly used in asynchronous operations, such as fetching data from an API or performing time-consuming tasks.

Example:

```javascript
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
```

In the above example, the fetchData function simulates an asynchronous operation that takes 2 seconds to complete. After the data is fetched, the callback function processData is invoked with the fetched data as an argument, resulting in the message "Processing data: This is the fetched data." being logged to the console.

Callbacks provide a flexible way to handle asynchronous operations, allowing you to control the flow of execution and perform actions after a specific task is finished.
