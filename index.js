const list = document.querySelector('ul');

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.style.backgroundColor = 'yellow';
  }
});

document.addEventListener('click', (event) => {
  console.log('Clicked element:', event.target);
});
