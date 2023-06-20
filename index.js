// Example 1: Basic Closure
function outerFunction() {
  const outerVariable = "I'm from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Output: I'm from the outer function

// Example 2: Closure with Private Data
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
    decrement
  };
}

const counterInstance = counter();
counterInstance.increment(); // Output: 1
counterInstance.increment(); // Output: 2
counterInstance.decrement(); // Output: 1
