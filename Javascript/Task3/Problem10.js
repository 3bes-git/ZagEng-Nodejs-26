let input = [73, 221, 52, 214];

function modifyNumbers(arr) {
  return arr.map((n) => {
    if (n % 2 === 0) {
      return n + 1;
    } else {
      return n - 1;
    }
  });
}

console.log(modifyNumbers(input));
