
function log(title, value) {
  console.log(`\n=== ${title} ===`);
  console.log(value);
}



// a)
log("1a", `5 + 7 = ${5 + 7}`);

// b)
log("1b", `Line 1
Line 2
Line 3`);

// c)
const firstName = "John", lastName = "Doe";
log("1c", `${firstName} ${lastName}`);




// a)
const square = n => n * n;
log("2a", square(5));

// b) Explanation
log("2b Explanation", "Arrow functions do NOT have their own 'this'. They inherit it, so this.value becomes undefined.");

// c)
const obj = {
  value: 50,
  test() { return this.value; }
};
log("2c", obj.test());



// a)
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
log("3a", copyProduct);

// b)
const a = { x: 1 }, b = { y: 2 };
const merged = { ...a, ...b };
log("3b", merged);

// c)
function maxValue(...nums) {
  return Math.max(...nums);
}
log("3c", maxValue(3, 9, 1, 7));




// a)
const arr = [10, 20, 30];
const [x1, x2] = arr;
log("4a", { x1, x2 });

// b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
log("4b", brand);

// c)
const info = {};
log("4c", info?.user?.name);




// a)
for (var i = 0; i < 3; i++) {}
log("5a (var)", i);

// b)
try {
  for (let j = 0; j < 3; j++) {}
  log("5b (let)", j);
} catch (e) {
  log("5b (let error)", "ReferenceError: j is not defined");
}

// c)
log("5c", "const prevents reassignment to help avoid accidental changes.");




// a)
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
log("6a", speed);

// b)
let age = 16;
log("6b", age >= 18 ? "Adult" : "Minor");

// c)
let num = -2;
let result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
log("6c", result);




// a)
const nums = [1, 2, 3];
log("7a", [...nums, 4, 5]);

// b)
let A = ["x", "y"], B = ["z"];
log("7b", [...A, ...B]);

// c)
function printNames(...names) {
  return names;
}
log("7c", printNames("A", "B", "C"));




// a)
const user = { id: 101, status: "active" };
const { id, status } = user;
log("8a", { id, status });

// b)
const id1 = 101, role = "admin";
const userShort = { id1, role };
log("8b", userShort);

// c)
const name = "Aria", marks = 88;
const student = {
  name,
  marks,
  greet() { return `Hello, I'm ${this.name}`; }
};
log("8c", student.greet());




// a)
log("9a", `${new Date().toDateString()}`);

// b)
let NAME = "Sam", SCORE = 87;
log("9b", `Hello ${NAME}, your score is ${SCORE}/100`);




const add = (a, b) => a + b;
log("10a", add(5, 7));

const isAdult = age => age >= 18;
log("10b", isAdult(20));

const double = n => n * 2;
log("10c", double(6));




// a)
const arr1 = [1,2,3];
log("11a", [...arr1]);

// b)
log("11b", [100, ...arr1]);

// c)
const o1 = { a: 1, b: 2 };
const o2 = { b: 99, c: 3 };
log("11c", { ...o1, ...o2 }); // b overwritten




const u = { name: "Alex", address: { city: "Bangalore" } };

log("12a", u?.address?.city); // safe

const u2 = { name: "Alex" };
log("12b", u2?.job?.title); // undefined, no error

const maybeNull = null;
log("12c", maybeNull?.hello?.world); // prevents crash
