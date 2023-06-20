// Example 1: "this" in Object Method
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
};

person.greet(); // Output: Hello, my name is John and I'm 30 years old.

// Example 2: "this" in Function Constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`This car is a ${this.make} ${this.model}.`);
};

const myCar = new Car("Toyota", "Camry");
myCar.getDetails(); // Output: This car is a Toyota Camry.
