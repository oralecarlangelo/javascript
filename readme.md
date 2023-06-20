# Async/Await

Async/await is a modern JavaScript syntax for handling asynchronous operations in a more synchronous and readable manner. It is built on top of Promises and provides a simpler way to write asynchronous code that resembles synchronous code.

## Example 1: Using async/await with Promises

Async/await can be used with Promises to write asynchronous code that looks and behaves more synchronously.

Example:

```javascript
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function fetchData() {
  await delay(2000);
  return "Data fetched successfully.";
}

async function process() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

process();
```

In the above example, the fetchData function returns a Promise that resolves after a delay of 2000 milliseconds. The process function uses the await keyword to wait for the Promise to resolve and then logs the fetched data to the console.

## Example 2: Using async/await with Axios
Async/await can also be used with libraries like axios to simplify making asynchronous HTTP requests.

Example:

```javascript
const axios = require("axios");

async function getUserData(username) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user data.");
  }
}

async function displayUserData(username) {
  try {
    const userData = await getUserData(username);
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}

displayUserData("oralecarlangelo");
```

In the above example, the getUserData function uses axios to make an HTTP GET request to the GitHub API endpoint for a specific username. The response data is accessed using response.data, and it is returned as the result of the function. If an error occurs during the request or response, an error is thrown.

Async/await in combination with axios provides a clean and straightforward way to handle asynchronous HTTP requests in JavaScript.
