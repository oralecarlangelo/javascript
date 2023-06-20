// Creating and Removing Elements

// Creating a new element
const newElement = document.createElement("div");
newElement.textContent = "New element";
newElement.className = "box";

// Appending the new element to an existing element
const container = document.getElementById("container");
container.appendChild(newElement);

// Removing an element
const elementToRemove = document.getElementById("element-to-remove");
if (elementToRemove) {
  elementToRemove.remove();
}

// Traversing the DOM

// Accessing parent element
const parentElement = container.parentNode;

// Accessing sibling elements
const previousSibling = container.previousElementSibling;
const nextSibling = container.nextElementSibling;

// Accessing child elements
const children = container.children;
const firstChild = container.firstElementChild;
const lastChild = container.lastElementChild;
