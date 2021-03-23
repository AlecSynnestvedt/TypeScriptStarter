//1   //2     //3
let username: string = "instructor";
let password: string = "letmein1234!";
let instructorId: number = 5;

let password: string;
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMaried: boolean;

let greeting = "Hello";

/*
Compile Time Errors
___________________

It's important to note that TypeScript offers compile-time error checking. Compile-time checking occurs during the compile time. Compile time errors are caused by a typing mistake or poor syntax. With compile time error checking, our program can't execute a single line of code until we remove all syntax errors. The following are usual compile time errors:
- Syntax errors
- Typechecking errors
- Compiler crash

So if you try this, you'll get an error:
*/
// let password: string;
// password = 1234;

/*
BASIC TYPES
*/

// NUMBER
let age: number = 40; 
let currentYear: number = 2018;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

//STRING 
let companyName: string;
companyName = "ElevenFifty"
//single or double quotes are fine but must remain consistent within scoped use 

//BOOLEAN 
let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

//ARRAY 
//1 
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']
//2
let allScores: Array<number> = [100, 92, 95, 96];

console.log("Student List:", studentList[0]);
//accessing array indices works the same way

//ANY 
/* Any
One of the things that many developers like about TypeScript is the ability to toggle off forced types if the type is not known during development. At any point in the application, we may not know what type a variable is. This could be coming from a 3rd party package. With these cases, we let the type be decided at compile time, and we can use the  type: */

let dataFromThirdParty: any = '12345';
console.log(dataFromTHirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

//VOID 
/*
A  type has no type at all. This is not really seen in variables, but is more common to see in functions that return no value:
*/
function sayHelloToAll() : void {
  console.log("Hello to all!")
}

//NULL AND UNDEDFINED  
let undefinedVariable: undefined = undefined; 
let nullVariable: null = null; 


//TUPLE 
/* Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number: */

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly...
x = [10, "hello"]; // Error

// Type 'number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.

// OK:
console.log(x[0].substring(1));

console.log(x[1].substring(1));
// Property 'substring' does not exist on type 'number'.



/*
ENUM 
Enums allow us to give names to numeric values.
*/
enum WeaponType { Sword, Saber, Spear }
let weapon: WeaponType = WeaponType.Sword 

/*
Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants. Unlike most TypeScript features, this is not a type-level addition to JavaScript but something added to the language and runtime. Because of this, it’s a feature which you should know exists, but maybe hold off on using unless you are sure. Reference Page: https://www.typescriptlang.org/docs/handbook/enums.html
*/

enum CardType { Ace = 1, Two, Three, Four }
let CardType: string = CardType[2]
console.log(cardType);
