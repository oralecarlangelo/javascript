# Advanced Asynchronous JavaScript

This section covers advanced asynchronous JavaScript techniques, including promises, async/await, and working with AJAX and APIs.

## Promises

The fetchData function returns a promise that resolves after a delay of 2 seconds. The resolved value is the message "Data fetched successfully."

Example:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data fetched successfully.";
      resolve(data);
      // reject(new Error("Failed to fetch data."));
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Output: Data fetched successfully.
  })
  .catch((error) => {
    console.error(error);
  });
```

The above example demonstrates how to use promises to handle asynchronous operations. The then method is used to handle the resolved value, while the catch method is used to handle any errors that occur during the promise execution.

## Async/Await

The fetchDataAsync function uses async/await syntax to handle asynchronous operations. It awaits the resolution of the fetchData promise and logs the resolved value to the console.

Example:

```javascript
async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log(data); // Output: Data fetched successfully.
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();
```

The above example demonstrates how to use async/await to write asynchronous code in a more synchronous-like manner. The await keyword is used to pause the execution until the promise is resolved or rejected. The code within the try block is executed when the promise is resolved, and any errors are caught and handled in the catch block.

## AJAX with XMLHttpRequest

The fetchUserWithXHR function demonstrates how to make an AJAX request using the XMLHttpRequest object. It makes a GET request to the GitHub API to fetch user data based on the provided username.

Example:

```javascript
function fetchUserWithXHR(username) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${username}`);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        resolve(data);
      } else {
        reject(new Error("Failed to fetch user data."));
      }
    };
    xhr.onerror = function () {
      reject(new Error("Failed to make a request."));
    };
    xhr.send();
  });
}

fetchUserWithXHR("oralecarlangelo")
  .then((user) => {
    console.log(user); // Output: User data
  })
  .catch((error) => {
    console.error(error);
  });
```

The above example demonstrates how to make an AJAX request using the XMLHttpRequest object. It creates a new XMLHttpRequest, sets the request method and URL, and defines event handlers for the successful response and error cases. The resolved data is logged to the console, and any errors are caught and handled in the catch block.

## Working with Axios

The fetchUserWithAxios function demonstrates how to make an AJAX request using the Axios library. It makes a GET request to the GitHub API to fetch user data based on the provided username.

Example:

```javascript
function fetchUserWithAxios(username) {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error("Failed to fetch user data.");
    });
}

fetchUserWithAxios("oralecarlangelo")
  .then((user) => {
    console.log(user); // Output: User data
  })
  .catch((error) => {
    console.error(error);
  });
```

The above example demonstrates how to make an AJAX request using the Axios library. The get method is used to make a GET request to the specified URL, and the response data is accessed through the data property of the response object. Any errors are caught and handled in the catch block.
