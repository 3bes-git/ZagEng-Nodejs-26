let arr=[];
let counter=0;
for (let i = 0; i < 5; i++) {
  let number = Number(prompt("Enter number", "number"));
  arr.push(number);
  if(arr[i]>10){
    counter++;
  }
}

console.log(counter);
