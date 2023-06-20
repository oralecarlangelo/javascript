# Understanding "this" Keyword

In JavaScript, the "this" keyword refers to the object that is currently executing the code. It provides a way to access and manipulate the properties and methods of the object within the context of the code.

## Example 1: "this" in Object Method

In the context of an object method, "this" refers to the object itself. It allows you to access the object's properties and invoke its methods.

Example:

```javascript
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

person.greet(); // Output: Hello, my name is John and I'm 30 years old.
```

In the above example, when the greet() method is invoked on the person object, this refers to the person object itself, allowing access to its name and age properties.

## Example 2: "this" in Function Constructor

In the context of a function constructor, "this" refers to the newly created object when using the new keyword. It allows you to assign properties and methods to the created object.

Example:

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`This car is a ${this.make} ${this.model}.`);
};

const myCar = new Car("Toyota", "Camry");
myCar.getDetails(); // Output: This car is a Toyota Camry.
```

In the above example, when the Car constructor function is invoked with the new keyword, this refers to the newly created object (myCar). The make and model properties are assigned to the myCar object, and the getDetails() method is added to the object's prototype.

Understanding the usage of the "this" keyword is crucial in JavaScript to access and manipulate object properties and methods within the appropriate context
