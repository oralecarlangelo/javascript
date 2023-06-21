function debounce(func, delay) {
  let timeoutId;
  
  return function (...args) {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function handleScroll() {
  console.log('Handling scroll event...');
  // Perform scroll-related tasks here
}

const debouncedScroll = debounce(handleScroll, 200);

window.addEventListener('scroll', debouncedScroll);


function throttle(func, interval) {
  let lastExecutionTime = 0;
  
  return function (...args) {
    const now = Date.now();
    
    if (now - lastExecutionTime >= interval) {
      func.apply(this, args);
      lastExecutionTime = now;
    }
  };
}

function handleResize() {
  console.log('Handling resize event...');
  // Perform resize-related tasks here
}

const throttledResize = throttle(handleResize, 2000);

window.addEventListener('resize', throttledResize);
