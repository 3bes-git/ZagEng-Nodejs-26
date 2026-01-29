let arr = [];

for (let i = 0; i <= 4; i++) {
  let numbers = Number(prompt("Enter number ", "number"));
  arr.push(numbers);
}
for (let n = 0; n <= 4; n++) {
  if (arr[n] > 6) {
    console.log(arr[n]);
  } else {
    continue;
  }
}
