let input = prompt("Enter str");

function replaceSpaces(str) {
    return str.replace(/ /g, "#");
  }
  
  console.log(replaceSpaces("Hello World "));
  console.log(replaceSpaces(input));
