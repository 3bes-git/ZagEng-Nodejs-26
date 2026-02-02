let input = prompt("Enter str");

function removeSpecialChar(str) {
  return str.replace(/[$!@#.?]/g, "");
}

console.log(removeSpecialChar("Hi How are you!"));

console.log(removeSpecialChar("Are-u_coming?"));

console.log(removeSpecialChar(input));
