let students = [];

function addStudent() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let grade = document.getElementById("grade").value;

  let student = {
    name: name,
    age: age,
    grade: grade
  };

  students.push(student);
  listStudents();
}

function listStudents() {
  let list = document.getElementById("studentsList");
  list.innerHTML = "";

  students.forEach(student => {
    let li = document.createElement("li");
    li.textContent = `${student.name} - ${student.age} - ${student.grade}`;
    list.appendChild(li);
  });
}

function saveToJSON() {
  let json = JSON.stringify(students);
  document.getElementById("jsonData").value = json;
  console.log(json);
}

function loadFromJSON() //JSON to Array
 {
  let json = document.getElementById("jsonData").value;
  students = JSON.parse(json);
  listStudents();
}
