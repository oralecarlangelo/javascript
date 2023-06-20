# Control Structures

Control structures in JavaScript are used to control the flow of execution in a program. Here are some commonly used control structures:

## If...Else

The `if...else` statement is used to execute a block of code based on a condition.

Example:

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
```

## Else If

The else if statement allows you to add additional conditions to be checked if the previous condition is not met.

Example:

```javascript
let time = 12;

if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}
```

## Switch

The switch statement allows you to perform different actions based on different conditions.

Example:

```javascript
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
```

## For Loop

A for loop is used to repeat a block of code a certain number of times.

Example:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## While Loop

A while loop is used to execute a block of code repeatedly as long as a specified condition is true.

Example:

```javascript
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
```

Do...While Loop
A do...while loop is used to execute a block of code once, and then repeat the execution as long as a specified condition is true.

Example:

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```
