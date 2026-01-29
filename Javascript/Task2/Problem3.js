let arr = [];

for (let i = 0; i <= 4; i++) {
  let numbers = Number(prompt("Enter number ", "number"));
  arr.push(numbers);
}

console.log("The array:", arr);
console.log("Length:", arr.length);
console.log("first element:", arr[0]);
console.log("last element:", arr[arr.length - 1]);
