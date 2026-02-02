// let input = prompt("enter names").split(" ");

let input = ["hi", "hello", "welcome"];

function Strings(arr) {
    return arr.filter(str => str.length > 4);
  }
  
  console.log(Strings(input));
  