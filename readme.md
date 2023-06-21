# Singleton Pattern

The Singleton pattern is a design pattern in JavaScript that restricts the instantiation of a class to a single object. It ensures that only one instance of a class exists throughout the application and provides a global point of access to that instance.

Usage
To implement the Singleton pattern, follow these steps:

1. Create a class with a private constructor and a private static variable to hold the single instance.
2. Define a static method to access the instance, and if the instance doesn't exist, create it.
3. Use the static method to access the single instance of the class throughout the application.

## Example

```javascript
class Singleton {
  constructor() {
    // Private variable
    this.data = "Singleton instance created";
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  getData() {
    return this.data;
  }
}

const instance1 = Singleton.getInstance();
console.log(instance1.getData()); // Output: Singleton instance created

const instance2 = Singleton.getInstance();
console.log(instance2.getData()); // Output: Singleton instance created

console.log(instance1 === instance2); // Output: true (both instances are the same)
```

In the example above, we create a Singleton class with a private constructor and a private static variable instance to hold the single instance of the class. The getInstance method is a static method that returns the single instance of the class. If the instance doesn't exist, it creates a new instance. The getData method returns the data of the Singleton instance.

To access the Singleton instance, we call the static method getInstance(). Both instance1 and instance2 refer to the same instance of the Singleton class, as confirmed by the comparison instance1 === instance2 which outputs true.

## Benefits

- Single Instance: The Singleton pattern ensures that only one instance of a class exists throughout the application.
- Global Access: The Singleton instance can be accessed globally, providing a centralized point of access.
- Lazy Initialization: The Singleton instance is created when it is first accessed, allowing for lazy initialization and efficient resource usage.
