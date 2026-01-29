let arr = [];

for (let i = 0; i < 5; i++) {
  let value = prompt("Enter Value");
  arr.push(value);
  if (isNaN(value)) {
    console.log(value);
  }
}
