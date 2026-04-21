let students = [
  { id: 1, name: "Abbas", age: 21, department: "Computer Science" },
  { id: 2, name: "Ali",    age: 20, department: "Electrical Engineering" },
  { id: 3, name: "Sara",   age: 22, department: "Computer Science" },
];

let nextId = 4;

module.exports = { students, getNextId: () => nextId++};
