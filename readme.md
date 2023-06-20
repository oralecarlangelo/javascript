# Inheritance

Inheritance is a key concept in object-oriented programming that allows objects to acquire properties and methods from other objects. It enables code reuse and promotes the creation of more organized and maintainable code.

## Example 1: Prototypal Inheritance

In JavaScript, prototypal inheritance is achieved by creating a prototype chain between objects. Constructors and prototypes are used to establish this chain.

Example:

```javascript
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
```

In the above example, the Animal constructor defines the name property and the makeSound method. The Dog constructor inherits from Animal using Object.create() to set up the prototype chain. The bark method is added to the Dog.prototype, allowing instances of Dog to access and use that method.

Example 2: Class Inheritance
ES6 introduced the class syntax, providing a more concise and intuitive way to achieve inheritance.

Example:

```javascript
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
```

In the above example, the Car class extends the Vehicle class using the extends keyword. The super keyword is used in the Car constructor to call the parent class constructor. This establishes the inheritance relationship, allowing Car instances to access the methods defined in Vehicle class.

Inheritance provides a powerful mechanism for creating hierarchies of objects and promoting code reuse. It allows for the extension and specialization of existing objects, providing flexibility and maintainability.
