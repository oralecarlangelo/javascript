// Example 1: Constructors and Instances
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("John Doe", 30);
console.log(person1.name); // Output: John Doe
console.log(person1.age); // Output: 30

const person2 = new Person("Jane Smith", 25);
console.log(person2.name); // Output: Jane Smith
console.log(person2.age); // Output: 25

// Example 2: ES6 Classes
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getDetails() {
    return `${this.brand} ${this.model}`;
  }
}

const car1 = new Car("Toyota", "Camry");
console.log(car1.getDetails()); // Output: Toyota Camry

const car2 = new Car("Honda", "Accord");
console.log(car2.getDetails()); // Output: Honda Accord
