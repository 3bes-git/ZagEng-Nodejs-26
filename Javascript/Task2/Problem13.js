let arr = [];

for (let i = 0; i < 4; i++) {
  let age = prompt("Enter number ", "number");
  arr.push(age);
  if(arr[i]>=8){
    console.log("Pass");
  }else{
    console.log("Fail");
  }
}
