# Closures

In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared. It allows a function to access variables from its outer (enclosing) scope even after the outer function has finished executing. Closures are a powerful and important concept in JavaScript.

## Example 1: Basic Closure

A basic closure example involves an outer function that returns an inner function. The inner function maintains access to the variables of the outer function even after the outer function has finished executing.

Example:

```javascript
function outerFunction() {
  const outerVariable = "I'm from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Output: I'm from the outer function
```

In the above example, the outerFunction creates a variable outerVariable, and then returns the innerFunction. When outerFunction is invoked and assigned to closure, it creates a closure, preserving the reference to outerVariable. When closure is invoked, it can still access and log the value of outerVariable.

## Example 2: Closure with Private Data

Closures are often used to create functions with private data. By enclosing variables within an outer function, we can create functions that can access and modify those variables but keep them hidden from the outside world.

Example:

```javascript
function counter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function decrement() {
    count--;
    console.log(count);
  }

  return {
    increment,
    decrement,
  };
}

const counterInstance = counter();
counterInstance.increment(); // Output: 1
counterInstance.increment(); // Output: 2
counterInstance.decrement(); // Output: 1
```

In the above example, the counter function returns an object with two methods: increment and decrement. These methods have access to the count variable, which is hidden from the outside world. Each time the methods are invoked, they can access and modify the count variable.

Closures are powerful tools in JavaScript that enable various patterns and techniques, such as data encapsulation and the module pattern.
