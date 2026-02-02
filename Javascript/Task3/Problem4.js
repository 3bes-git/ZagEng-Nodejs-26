let input = [10, 20, 30];

function average(arr) {
  let sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

console.log(average(input));
