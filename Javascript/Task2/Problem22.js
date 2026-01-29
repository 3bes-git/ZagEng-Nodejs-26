let arr = [];

for (let i = 0; i < 5; i++) {
  let number = Number(prompt("Enter number", "number"));
  arr.push(number);
}
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i] * 2);
}

console.log(arr2);
