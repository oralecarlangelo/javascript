# Constructors/Classes

Constructors and classes are fundamental concepts in object-oriented programming (OOP). They allow you to create objects with predefined properties and behaviors.

## Example 1: Constructors and Instances

In JavaScript, constructors are functions used to create objects. They define the initial state and behavior of objects created from them. Instances of objects are created using the `new` keyword along with the constructor function.

Example:

```javascript
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
```

In the above example, the Person constructor function is used to create instances of Person objects. Each instance has a name and age property.

## Example 2: ES6 Classes
ES6 introduced the class syntax as a more concise way to define constructors and create objects. Classes provide a cleaner and more familiar syntax for creating objects with methods.

Example:

```javascript
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
```

In the above example, the Car class defines a constructor that takes brand and model parameters. It also defines a getDetails method that returns the details of the car. Instances of the Car class are created using the new keyword.

Constructors and classes are foundational concepts in OOP, allowing you to create objects with properties and behaviors that can be easily reused and extended.
