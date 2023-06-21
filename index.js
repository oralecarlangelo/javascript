const axios = require("axios");
const XMLHttpRequest = require('xhr2');

// Promises

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

// Async/Await

async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log(data); // Output: Data fetched successfully.
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();

// AJAX with XMLHttpRequest

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

// Working with Axios

function fetchUserWithAxios(username) {
  return axios.get(`https://api.github.com/users/${username}`)
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
