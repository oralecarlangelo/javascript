// If...Else
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// Else If
let time = 12;

if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// Switch
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  default:
    console.log("Today is some other day.");
}

// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While Loop
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

// Do...While Loop
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
