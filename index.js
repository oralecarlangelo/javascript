const Module = (function () {
  // Private variables and functions
  let privateVar = 'I am private';

  function privateFunction() {
    console.log('This is a private function');
  }

  // Public API
  return {
    publicVar: 'I am public',
    publicFunction: function () {
      console.log('This is a public function');
    },
  };
})();

console.log(Module.publicVar); // Output: I am public
Module.publicFunction(); // Output: This is a public function
console.log(Module.privateVar); // Output: undefined
Module.privateFunction(); // Output: TypeError: Module.privateFunction is not a function
