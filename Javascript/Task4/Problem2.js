function addTask() {
  let input = document.getElementById("taskInput");
  let li = document.createElement("li");

  li.textContent = input.value;

  li.onclick = function () {
    li.style.textDecoration = "line-through";
  };

  let btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
