console.log('Start');

setTimeout(() => {
  console.log('SetTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');
