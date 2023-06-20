# Prototypes

Prototypes are an essential part of JavaScript's object-oriented programming model. They allow objects to inherit properties and methods from other objects. Prototypes provide a way to share common functionality across multiple objects efficiently.

## Example 1: Prototypes with Constructors

In JavaScript, every object has a prototype that acts as a blueprint for that object's properties and methods. Prototypes can be created using constructor functions.

Example:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("John Doe", 30);
person1.greet(); // Output: Hello, my name is John Doe
```

In the above example, the Person constructor function defines the name and age properties for instances of Person. The greet method is added to the Person.prototype, which allows all instances of Person to access and use that method.

## Example 2: Prototypes with Classes

ES6 introduced the class syntax, which also allows prototypes to be defined.

Example:

```javascript
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
```

In the above example, the Animal class defines the makeSound method using the class syntax. The eat method is added to the Animal.prototype, making it accessible to all instances of Animal.

Prototypes provide a powerful mechanism for object inheritance and sharing functionality. They allow for efficient memory usage and support dynamic changes to objects at runtime.
