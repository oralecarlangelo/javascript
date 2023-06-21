# Event Delegation and Bubbling

Event delegation and bubbling are concepts in JavaScript that allow you to handle events efficiently and effectively, especially when dealing with multiple elements or dynamically created elements.

## Event Delegation

Event delegation is a technique where you attach an event listener to a parent element instead of individual child elements. The parent element listens for events that bubble up from its child elements. This approach is useful when you have a large number of child elements or dynamically created elements.

The key steps for event delegation are as follows:

Identify a parent element that will contain all the child elements of interest.
Attach an event listener to the parent element.
Inside the event listener, determine the specific child element that triggered the event using event.target.
Perform the desired action based on the event and the target element.
Example
Suppose we have an unordered list (ul) with multiple list items (li) as child elements. We want to change the background color of a list item when it is clicked. Instead of attaching an event listener to each list item, we can use event delegation by attaching the event listener to the parent unordered list.

```javascript
const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.style.backgroundColor = "yellow";
  }
});
```

In the example above, we attach the click event listener to the parent unordered list (list). When a list item is clicked, the event bubbles up to the parent, and we can access the specific list item using event.target. We check if the target element's tag name is 'LI' and then change its background color to yellow.

By using event delegation, we only need one event listener on the parent element, regardless of the number of child elements. This reduces memory usage and simplifies event management, especially when dynamically adding or removing child elements.

## Event Bubbling

Event bubbling is the process where an event triggered on an element also triggers the same event on its parent elements, propagating up the DOM tree until it reaches the document object. This allows you to handle events at different levels of the DOM hierarchy.

When an event occurs on an element, it triggers the event handlers for that specific element first, then the handlers for its parent elements, and so on, until it reaches the document object. This behavior is known as event bubbling.

Example
Suppose we have an HTML structure with nested elements, and we want to log a message whenever any element is clicked, including its parent elements.

```javascript
document.addEventListener("click", (event) => {
  console.log("Clicked element:", event.target);
});
```

In the example above, we attach a click event listener to the document object. When any element is clicked, the event bubbles up to the document, triggering the event listener. We log the clicked element (event.target) to the console.

Event bubbling allows you to handle events in a more generic and flexible way. You can attach a single event listener to a common ancestor element and capture events from multiple child elements without the need for individual event listeners.

## Benefits

- Simplified Event Handling: Event delegation allows you to handle events efficiently, especially when dealing with many elements or dynamically created elements.
- Memory Efficiency: With event delegation, you attach fewer event listeners, which reduces memory consumption and improves performance.
- Dynamic Event Handling: Event delegation enables handling events on elements that are added or removed dynamically without requiring additional event listeners.
