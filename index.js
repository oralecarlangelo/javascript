const axios = require('axios');

// Example 1: Using async/await with Promises
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
// Output (after 2 seconds): Data fetched successfully.

// Example 2: Using async/await with Fetch API
async function getUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
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
