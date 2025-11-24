// 1. Declare a global variable
let age = 20;

// 2. Function in Global Execution Context
function displayAge() {
    console.log("Age inside displayAge():", age);
}

// 3. Function that updates the global variable
function changeAge() {
    age = 25;  // updating the global variable
    console.log("Age updated inside changeAge():", age);
}

// Calling the functions
displayAge();   // prints: 20
changeAge();    // updates to 25
displayAge();   // prints: 25 (global variable changed)
