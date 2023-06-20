// Example 1: Prototypes with Constructors
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("John Doe", 30);
person1.greet(); // Output: Hello, my name is John Doe

// Example 2: Prototypes with Classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Making a sound...");
  }
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};

const animal1 = new Animal("Lion");
animal1.makeSound(); // Output: Making a sound...
animal1.eat(); // Output: Lion is eating.
