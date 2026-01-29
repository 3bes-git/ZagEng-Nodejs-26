let arr = [];

for (let i = 0; i < 5; i++) {
  let number = Number(prompt("Enter number ", "number"));
  arr.push(number);
 
}
console.log(Math.max(...arr))
console.log(Math.min(...arr))
