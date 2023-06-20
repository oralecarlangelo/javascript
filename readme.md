# JSON (JavaScript Object Notation)

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It provides a simple and standardized way to represent structured data.

## Convert Object to JSON

You can convert a JavaScript object to JSON using the `JSON.stringify()` method. This method takes an object as a parameter and returns the JSON representation of the object.

Example:

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const personJSON = JSON.stringify(person);
console.log(personJSON); // Output: {"name":"John","age":30,"city":"New York"}
```

## Convert JSON to Object

You can convert JSON back to a JavaScript object using the JSON.parse() method. This method takes a JSON string as a parameter and returns the corresponding JavaScript object.

Example:

```javascript
const personJSON = '{"name":"John","age":30,"city":"New York"}';

const personObject = JSON.parse(personJSON);
console.log(personObject); // Output: { name: "John", age: 30, city: "New York" }
```

Array of Objects
JSON can handle complex data structures, such as an array of objects.

Example:

```javascript
// Array of Objects
const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Developer",
    salary: 50000,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Designer",
    salary: 60000,
  },
  {
    id: 3,
    name: "Bob Johnson",
    position: "Manager",
    salary: 80000,
  },
];

// Convert Array of Objects to JSON
const employeesJSON = JSON.stringify(employees);
console.log(employeesJSON);
// Output:
// [
//   {"id":1,"name":"John Doe","position":"Developer","salary":50000},
//   {"id":2,"name":"Jane Smith","position":"Designer","salary":60000},
//   {"id":3,"name":"Bob Johnson","position":"Manager","salary":80000}
// ]

// Convert JSON to Array of Objects
const employeesArray = JSON.parse(employeesJSON);
console.log(employeesArray);
// Output:
// [
//   { id: 1, name: 'John Doe', position: 'Developer', salary: 50000 },
//   { id: 2, name: 'Jane Smith', position: 'Designer', salary: 60000 },
//   { id: 3, name: 'Bob Johnson', position: 'Manager', salary: 80000 }
// ]
```
