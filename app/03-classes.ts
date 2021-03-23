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
/*
Analysis
1. These two variables are the properties of the class. They should be above the methods.

2. Here we have a method. This is a function that prints "Hello, " then a name to the console.

3. this.firstName will refer to the firstName for the specific instance.

4. We instantiate the Person() class with a variable name of kenn.

5. We set the property of firstName to "Kenn" for this specific instance.

6. We call the method on the kenn object. Because the firstName of kenn is set to "Kenn", this will print "Hello Kenn" to the console.

--
Key Rule
--
Notice that with methods in our class that you don't have to use the function keyword.
*/

/*
CONSTRUCTORS 
------------
Purpose:

A constructor allows us to more easily and efficiently create an instance of a class by enabling us to instantiate the class(create a new instance of the class) and set the properties at the same time
*/

//1
class Game {
  constructor(name: string, maker: string){//2
    this.gameName = name; //4
    this.gameMaker = maker;
  }
  gameName: string; //3
  gameMaker: string; 
}

//5
let battleship: Game = new Game('Battleship', 'Hasbro');
/*
Analysis
1. We create a new class called Game.

2. We create a constructor for the class that takes in a parameter that is of type string.

3. We set up a property called gameName.

4. We set the value of gameName equal to the value that is passed into the constructor's argument.

5. We create an instance of the Game class called battleship.

6. We pass in values to satisfy the requirements of the constructor. If we do not pass values in for the constructor's arguments, we get an error. The following code throws a compile-time error:

let battleship: Game = new Game(); //throws error bc two args are required in the parens.
*/

/* 
INHERITANCE 
-----------
*/

class Vehicle {
  type: string; 
  make: string;
  model: string; 
  manufacturerYear: number; 
  runs: boolean; 
  topSpeed: number;
}

//here we have a parent class 

//Ex. 1
                //1
class Automobile extends Vehicle {
  isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false; //2
myCar.topSpeed = 200; //3
myCar.make = "Volvo"; 

//Ex. 2
                    //1
class Motorcycle extends Vehicle {
  easyToDoWheelie: boolean; 
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true; //2
myMotorcycle.topSpeed = 180; //3

/*
Analysis
1. The extends keyword declares that the class is going to inherit all of the properties and methods from another class. This is called subclassing. Both Motorcycle and Automobile inherit from Vehicle.

2. Note that these are properties declared in the subclass. The Motorcycle class does not have access to the isSelfDriving property and the Automobile class does not have access to easyToDoWheelie.

3. These are properties from the parent Vehicle class, the Vehicle class. They are inherited properties.

*/

class Store {
  constructor(name: string, city: string){
    this.name = name;
    this.city = city; 
  }
  name: string;
  city: string;
}

let ikea: Strong = new Strore("Ikea", "Fishers");

/*
One of the most elegant augmentations that TypeScript has made comes with parameter properties. The pattern above has become quite common over the years, and we can now use TypeScript to streamline a lot of the code above in our constructor.

Let's refactor the code to the following:
*/

class Store {
              //1                                     //2
  constructor(public name: string, public city: string){}
}
let ikea: Store = new Store('Ikea', 'Fishers');

/* 
Analysis
Again, the code above is a shortified version of the first version of the Store class. Let's look at a few things:

1. We add a public accessor. We'll talk about this in the next module. For now, know that it's required for this approach.

2. With this approach, we don't have to do all of the bindings for our properties inside of our constructor. We don't need this.name = name. 

TypeScript infers that there is a property called a name that will be the value of the argument that is passed into the constructor.

*/
