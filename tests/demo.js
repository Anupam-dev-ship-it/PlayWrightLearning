// 🟢 TypeScript Example – Strong Typing Made Simple
// • 'string' → can only store text because type is fixed as string
//   (In JS → you could later assign a number, no error until runtime)
var message1 = "Hello, World!";
console.log(message1);
// • 'number' → only numbers allowed; catches type errors at compile time
//   (In JS → you could assign "twenty", and it’d run but break logic later)
var age1 = 20;
console.log("Age is: " + age1);
// • 'boolean' → true/false only, ensures clear yes/no logic
//   (In JS → could mistakenly store a string like "true")
var isactive1 = false;
// • 'number[]' → array that holds only numbers, blocks other data types
//   (In JS → you could mix numbers, strings, etc., with no warning)
var numberArry1 = [1, 2, 3, 4, 5];
// • 'any' → can store any type; turns off strict typing (like plain JS)
//   (In JS → all variables behave like 'any' by default)
var data1 = "Any type of data";
data1 = 25; // allowed – type safety off
function add(a, b) {
    return a + b;
}
var user = { name: "anupam", age: 29 };
user.location = "India";
