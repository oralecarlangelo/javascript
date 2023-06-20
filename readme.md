# DOM Basics Example

This example demonstrates the basics of DOM (Document Object Model) manipulation, including the selection of elements, manipulation of content, and handling of events.

## HTML Code

The HTML code defines a simple web page structure with the following elements:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Basics</title>
  </head>
  <body>
    <h1 id="title">Welcome to DOM Basics</h1>
    <p class="content">This is a sample paragraph.</p>
    <button id="myButton">Click me!</button>

    <script src="index.js"></script>
  </body>
</html>
```

```
The <h1> element with id="title" represents a heading.
The <p> element with class="content" represents a paragraph.
The <button> element with id="myButton" represents a button.
```

## JavaScript Code

The JavaScript code interacts with the HTML elements and performs the following tasks:

Selects elements using various methods, such as getElementById() and getElementsByClassName().
Manipulates the content of the selected elements using properties like textContent and innerHTML.
Adds event listeners to handle click and mouseover events on the button.

Example:

```javascript
// Selection of elements
const titleElement = document.getElementById("title");
const contentElements = document.getElementsByClassName("content");
const buttonElement = document.getElementById("myButton");

// Manipulating content
titleElement.textContent = "Updated Title";

for (let i = 0; i < contentElements.length; i++) {
  contentElements[i].innerHTML = "Updated content " + (i + 1);
}

// Handling events
buttonElement.addEventListener("click", () => {
  console.log("Button clicked!");
});

buttonElement.addEventListener("mouseover", () => {
  console.log("Mouse over button!");
});
```

- The JavaScript code selects elements using various methods, such as getElementById(), getElementsByClassName(), and getElementById().
- It manipulates the content of the selected elements by modifying the textContent and innerHTML properties.
- Event listeners are added to the button element to handle the click and mouseover events. When the button is clicked or the mouse hovers over it, corresponding messages are logged to the console.

## Running the Example

To run this example:

1. Save the HTML code in an HTML file, e.g., index.html.
2. Save the JavaScript code in a separate JavaScript file, e.g., index.js.
3. Ensure that both files are in the same directory.
4. Open the HTML file in a web browser.
