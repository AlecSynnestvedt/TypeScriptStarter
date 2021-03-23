//1   //2     //3
var username = "instructor";
var password = "letmein1234!";
var instructorId = 5;
var password;
var phoneNumber;
var email;
var socialSecurity;
var isMaried;
var greeting = "Hello";
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
var age = 40;
var currentYear = 2018;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
//STRING 
var companyName;
companyName = "ElevenFifty";
//single or double quotes are fine but must remain consistent within scoped use 
//BOOLEAN 
var isLoggedIn = true;
var isGoldLevelUser = true;
//ARRAY 
//1 
var studentList = ['Tom', 'Tracy', 'Nikaya'];
//2
var allScores = [100, 92, 95, 96];
console.log("Student List:", studentList[0]);
//accessing array indices works the same way
//ANY 
/* Any
One of the things that many developers like about TypeScript is the ability to toggle off forced types if the type is not known during development. At any point in the application, we may not know what type a variable is. This could be coming from a 3rd party package. With these cases, we let the type be decided at compile time, and we can use the  type: */
var dataFromThirdParty = '12345';
console.log(dataFromTHirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
//VOID 
/*
A  type has no type at all. This is not really seen in variables, but is more common to see in functions that return no value:
*/
function sayHelloToAll() {
    console.log("Hello to all!");
}
//NULL AND UNDEDFINED  
var undefinedVariable = undefined;
var nullVariable = null;
//TUPLE 
/* Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number: */
// Declare a tuple type
var x;
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
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
/*
Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants. Unlike most TypeScript features, this is not a type-level addition to JavaScript but something added to the language and runtime. Because of this, it’s a feature which you should know exists, but maybe hold off on using unless you are sure. Reference Page: https://www.typescriptlang.org/docs/handbook/enums.html
*/
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var CardType = CardType[2];
console.log(cardType);
//# sourceMappingURL=01-types.js.map