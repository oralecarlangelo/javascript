const RevealingModule = (function () {
  let privateVar = 'I am private';

  function privateFunction() {
    console.log('This is a private function');
  }

  function publicFunction() {
    console.log('This is a public function');
  }

  return {
    publicFunction: publicFunction,
  };
})();

RevealingModule.publicFunction(); // Output: This is a public function
RevealingModule.privateFunction(); // Output: TypeError: RevealingModule.privateFunction is not a function
