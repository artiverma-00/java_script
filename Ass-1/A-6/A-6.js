

const isEven = (n) => n % 2 === 0;

const getResult = (marks) => (marks >= 35 ? "Pass" : "Fail");

const greet = (name) => {
  console.log(`Hello, ${name ? name : "Guest"}`);
};

// Example usage:
console.log(isEven(4)); // Output: true
console.log(getResult(40)); // Output: Pass
greet("John"); // Output: Hello, John
greet(); // Output: Hello, Guest