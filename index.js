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
