/*
--
CLASS LECTURE NOTES
--
*/
/*
CHALLENGE:
Follow these steps to create a TypeScript function:
- Create a function with a return type of boolean.
- The function takes in a string username and string password for it's password.
- Inside the function have a conditional that checks if the username is set to <elevenfiftyuser> and the password is ,Letmein1234!>.

If both conditions are true, the function should return true.

If one or both conditions are false the function should return false.
*/

function nameCheckDetails(un: string, pw: string) : boolean {
  if (un === 'elevenfiftyuser' && pw === 'Letmein1234!') {
    return true 
} else {
  return false
}
}
nameCheckDetails('elevenfiftyuser', 'Letmein1234!')
;


/*
OPTIONALS 
*/

// CHALLENGE
/*
write a function that has three params: first, middle, and last that returns a type of string.
-the middle param should be optional and first and last are required.
-if a value is passed in for middle, concat the fullname and include the middle name.
-if a value is not passed in for middle, concat the fullname with just first and last.
*/

function threePartName (first: string, last: string, middle?: string) {
  let full = middle ? `${first}` ${middle} ${last} : `${first}` `${last}`
}

threePartName("Ing", "borg", "e");
/*
--
---
MODULE NOTES
---
--
*/



/* 
TYPESCRIPT SAFETY IN ARGUMENTS 
++++++++++++++++++++++++++++++

TypeScript allows us to bring types to our parameters and limits to the number of arguments we pass in. Go into the  file. Let's add some functions, and add the following code:
*/
function addNumbers(numOne: number, numTwo: number){ 
  return numOne + numTwo; 
}

//1 - Works
addNumbers(1, 2);

//2 - Errors
addNumbers(1, 2, 3);
addNumbers(1, 2, 3, "Foo");

//Practice...
function fullName(firstName: string, lastName: string){
  return firstName + " " + lastName;
}
fullName(Alec, Synnestvedt);
/* 
RETURN TYPES
*/
//consider the plain JS:
function hello(greetingString){
  return greetingString;
}

foo(1); //1

//refactor to bring in TS return types:
                  //1             //2
function sayHello(name: string) : string {
  return name;
}

sayHello("Kenn"); //3
sayHello(1); //4

/*
We create a type for our parameter, a string.

We use the colon followed by a type to denote a return type.

We call the function and pass in a string argument. The argument satisfies the return type. So this function works.

We call the function and pass in the wrong return type. The argument does not satisfy the return type, and so this would break.

The compiler tells us that there is an error before we run the code!!!
*/

//1                             //2
function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){
  console.log(someString);
  return numOne + numTwo;
}

    //5
addNumbersWithOptional(1, 2); //3
addNumbersWithOptional(1, 2, "this is optional"); //4

/*
ANALYSIS
The first two parameters, numOne and numTwo are not optional.

The someString parameter is optional.

Since someString is optional, it does not require an argument when the function is called.

We can also call the function with an argument provided for someString.

If you hover over the function call you'll notice the type on someString is a union type of string | undefined. If a value is passed in, it should be of type string. If a value is not passed in, it is of type undefined.

Key Rule
________
It's important to note the following rule:

Optional params must go after all required params
*/
