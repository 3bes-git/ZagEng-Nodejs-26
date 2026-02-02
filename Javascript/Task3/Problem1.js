let names = prompt("enter names").split(" ");

//   let names = ["ahmed", "sara"];

function toUpper(arr) {
  return arr.map((str) => str.trim().toUpperCase());
}

console.log(toUpper(names));
