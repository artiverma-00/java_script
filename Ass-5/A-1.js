// Step 1: Function to display a greeting message
function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}

// Step 2: Function simulating user input retrieval
function getUserInput(callback) {
  setTimeout(() => {
    const username = "Alice"; // Simulated fetched username
    callback(username);       // Call the callback with the username
  }, 1000); // 1 second delay
}

// Calling the function and passing displayMessage as callback
getUserInput(displayMessage);
