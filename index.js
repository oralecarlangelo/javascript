// Example 1: Prototypal Inheritance
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  console.log("Making a sound...");
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Barking...");
};

const dog1 = new Dog("Max", "Labrador");
dog1.makeSound(); // Output: Making a sound...
dog1.bark(); // Output: Barking...

// Example 2: Class Inheritance
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log("Engine started.");
  }
}

class Car extends Vehicle {
  constructor(make, model, color) {
    super(make, model);
    this.color = color;
  }

  drive() {
    console.log("Driving...");
  }
}

const car1 = new Car("Toyota", "Camry", "Blue");
car1.startEngine(); // Output: Engine started.
car1.drive(); // Output: Driving...
