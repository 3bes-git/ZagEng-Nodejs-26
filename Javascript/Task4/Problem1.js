let students = [];

function addStudent() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let grade = document.getElementById("grade").value;

  let student = {
    name: name,
    age: age,
    grade: grade,
  };

  students.push(student);
  showStudents();
}

function showStudents() {
  let ul = document.getElementById("studentsList");
  ul.innerHTML = "";

  students.forEach((student, x) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${student.name} - ${student.age} - ${student.grade}
      <button onclick="removeStudent(${x})">Remove</button>
    `;
    ul.appendChild(li);
  });
}

function removeStudent(x) {
  students.splice(x, 1);
  showStudents();
}
