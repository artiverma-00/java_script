

console.log(profile.user?.details?.email);
console.log(profile.user?.details?.phone);
// Example where optional chaining prevents runtime error
const data = {
  info: {
    name: "Test User"
  }
};
console.log(data.info?.address?.city); // No error, prints undefined
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); // Output: 20
console.log(x); // ReferenceError: x is not defined
// Explanation: 'let' is block-scoped, so 'x' is not accessible outside the if block, while 'var' is function-scoped, making 'y' accessible.
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

