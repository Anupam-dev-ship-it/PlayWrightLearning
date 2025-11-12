// 🟢 TypeScript Example – Strong Typing Made Simple

// • 'string' → can only store text because type is fixed as string
//   (In JS → you could later assign a number, no error until runtime)
let message1: string = "Hello, World!";
console.log(message1);

// • 'number' → only numbers allowed; catches type errors at compile time
//   (In JS → you could assign "twenty", and it’d run but break logic later)
let age1: number = 20;
console.log("Age is: " + age1);

// • 'boolean' → true/false only, ensures clear yes/no logic
//   (In JS → could mistakenly store a string like "true")
let isactive1: boolean = false;

// • 'number[]' → array that holds only numbers, blocks other data types
//   (In JS → you could mix numbers, strings, etc., with no warning)
let numberArry1: number[] = [1, 2, 3, 4, 5];

// • 'any' → can store any type; turns off strict typing (like plain JS)
//   (In JS → all variables behave like 'any' by default)
let data1: any = "Any type of data";
data1 = 25; // allowed – type safety off

function add(a:number,b:number): number
{
return a+b;
}

let user:{name:string,age:number,location:string}={name:"Jhon",age: 29,location:"Hydrebad"};
user.location="India";
