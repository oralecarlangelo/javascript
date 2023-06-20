// JSON Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Convert Object to JSON
const personJSON = JSON.stringify(person);
console.log(personJSON); // Output: {"name":"John","age":30,"city":"New York"}

// Convert JSON to Object
const personObject = JSON.parse(personJSON);
console.log(personObject); // Output: { name: "John", age: 30, city: "New York" }


// Array of Objects
const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Developer",
    salary: 50000
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Designer",
    salary: 60000
  },
  {
    id: 3,
    name: "Bob Johnson",
    position: "Manager",
    salary: 80000
  }
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
