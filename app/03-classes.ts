/*
PROPERTIES
___________________
Harnessing the power of ES6, we can make custom types in conjunction with TypeScript, while also simulating the experience of traditional Object Oriented Programming. Many developers moving from Java, C#, and other OOP languages, often site this as a source of frustration with JavaScript: There are no types or classes

Yes, ES6 did provide classes, but as the MDN docs say, these classes still involve the prototype chain and are just 'syntactic sugar'. They are not classes in the traditional, OOP sense.

With TypeScript, we are more able to build a development environment that highly resembles a classical OOP environment, which allows for type safety and allows for instantiation of custom types/classes. Let's see this working.
*/

//1
class Person {
  //2
  firstName: string;
  lastName: string;
}
//3
let phil: Person = new Person();

//4
phil.firstName = "Phil";
phil.lastName = "Donahue";

/*
ANALYSIS 
Using the  keyword, we create a new class called . Just to be clear, this is not part of TypeScript. This is part of ES6.

We create 2 properties with types in that class. Here TypeScript allows us to set the types of our properties, as we would in a traditional OOP language like Java or C#. Dictating these types requires that when we instantiate the class and use these properties, they must hold string values.

We instantiate(create an instance) of the class by setting the type to  and calling the  keyword to create a new instance of the class.

Back to the top code. We set the properties on the instance of the  property.
*/

class Person {
  //1
  firstName: string;
  lastName: string;
  //2
  sayHello(){             //3
    console.log("Hello", this.firstName);
  }
}
//4
let kenn: Person = new Person();
//5
kenn.firstName = "Phil";
kenn.lastName = "Donahue";