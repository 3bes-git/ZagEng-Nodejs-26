// let input = 5;
let input = Number(prompt("Enter numebr"));
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(input));
  