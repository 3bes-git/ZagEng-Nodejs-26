let input1 = [1, 1, 1, 2, 1, 1];
let input2 = [2, 4, -2];
let input3 = [2, 4, 6 , 2 , 4];

function uniqueNumbers(arr) {
  return arr.filter((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(uniqueNumbers(input1));
console.log(uniqueNumbers(input2));
console.log(uniqueNumbers(input3));
